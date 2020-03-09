import React from 'react';
import { Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { Storage, List, AddModal } from 'components/Files';

const Files: React.FC = () => (
  <>
    <Storage />
    <List />
  </>
);

export const FilesHeaderActions: React.FC = () => {
  const [visible, setVisible] = React.useState<boolean>(false);

  const handleClick = (): void => (
    setVisible(true)
  );

  return (
    <>
      <Button
        type="primary"
        size="large"
        icon={<UploadOutlined />}
        onClick={handleClick}
      >
        Dodaj nowy
      </Button>
      <AddModal
        visible={visible}
        onCreate={async () => setVisible(false)}
        onCancel={async () => setVisible(false)}
      />
    </>
  )
};

export default Files;
