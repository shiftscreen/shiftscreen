import React from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { AddModal } from 'components/Organizations';

const OrganizationsHeaderActions: React.FC = () => {
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
        icon={<PlusOutlined />}
        onClick={handleClick}
      >
        Stwórz nową
      </Button>
      <AddModal
        visible={visible}
        onCreate={handleCreate}
        onClose={handleClose}
      />
    </>
  )
};

export default OrganizationsHeaderActions;
