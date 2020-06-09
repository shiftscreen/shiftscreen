import React from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { AddModal } from 'components/Screens';
import { Select as OrganizationSelect } from '../../Organizations';

const ScreensHeaderActions: React.FC = () => (
  <>
    <OrganizationSelect/>
    <NewScreenAction/>
  </>
);


const NewScreenAction: React.FC = () => {
  const [visible, setVisible] = React.useState<boolean>(false);

  const handleClick = (): void => (
    setVisible(true)
  );

  const handleCreate = async (values: any) => {
    setVisible(false);
  };

  const handleClose = () => (
    setVisible(false)
  );

  return (
    <>
      <Button
        type="primary"
        size="large"
        icon={<PlusOutlined/>}
        onClick={handleClick}
      >
        Stwórz nowy
      </Button>
      <AddModal
        visible={visible}
        onCreate={handleCreate}
        onClose={handleClose}
      />
    </>
  );
};

export default ScreensHeaderActions;
