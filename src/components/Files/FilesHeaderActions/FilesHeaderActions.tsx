import React from 'react';
import { Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { AddModal } from 'components/Files';

const FilesHeaderActions: React.FC = () => {
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
        icon={<UploadOutlined/>}
        onClick={handleClick}
      >
        Dodaj nowy
      </Button>
      <AddModal
        visible={visible}
        onCreate={handleCreate}
        onClose={handleClose}
      />
    </>
  );
};

export default FilesHeaderActions;
