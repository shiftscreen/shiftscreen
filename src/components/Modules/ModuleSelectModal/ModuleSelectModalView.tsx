import React from 'react';
import { Button, Modal } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

import { BasicAppInstancePartsFragment } from 'generated/graphql';
import { Module } from 'types';
import ModuleInstancesList from './ModuleInstancesList';
import ModulesList from './ModulesList';

interface Props {
  visible: boolean;
  onClose: (instance?: BasicAppInstancePartsFragment) => void;
}

const ModuleSelectModal: React.FC<Props> = ({ visible, onClose }: Props) => {
  const [module, setModule] = React.useState<Module | undefined>();

  const getChildren = () => {
    if (module) {
      return (
        <ModuleInstancesList
          module={module}
          onClick={onClose}
        />
      )
    } else {
      return (
        <ModulesList
          onClick={setModule}
        />
      )
    }
  };

  const getFooter = () => {
    if (module) {
      const handleBack = () => setModule(undefined);

      return (
        <Button
          icon={<ArrowLeftOutlined />}
          style={{ marginRight: 'auto' }}
          onClick={handleBack}
        >
          Powrót
        </Button>
      )
    }

    return null;
  };

  const children = getChildren();
  const footer = getFooter();

  const handleCloseClick = () => (
    onClose()
  );

  return (
    <Modal
      title="Wybór modułu"
      okButtonProps={{
        style: { display: 'none' }
      }}
      visible={visible}
      onCancel={handleCloseClick}
      children={children}
      footer={footer}
      bodyStyle={{
        maxHeight: '50vh',
        overflowY: 'scroll',
      }}
    />
  );
};

export default ModuleSelectModal;
