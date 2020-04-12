import React from 'react';
import { File } from 'types';
import { Button, Popconfirm, Row, Col, Typography, Tooltip, message } from 'antd';
import { DeleteOutlined, LinkOutlined } from '@ant-design/icons';

import {
  useFileLinkMutation,
  FileLinkMutation,
  useDeleteFileMutation,
  ViewerFilesQuery,
  ViewerFilesDocument,
  ViewerStorageDocument,
} from 'generated/graphql';

const { Text } = Typography;

interface Props {
  file: File;
}

const ListActions: React.FC<Props> = (props: Props) => {
  const { file } = props;

  return (
    <Row justify="space-between" align="middle">
      <Col>
        <LinkAction file={file}/>
      </Col>
      <Col>
        <DeleteAction file={file}/>
      </Col>
    </Row>
  );
};

const LinkAction: React.FC<Props> = (props: Props) => {
  const { file } = props;

  const handleClick = async () => (
    await fileLink()
  );

  const handleCompleted = async (data: FileLinkMutation) => {
    await navigator.clipboard.writeText(data.fileLink.url);
    message.success('Skopiowano link do schowka');
  };

  const [fileLink, { loading }] = useFileLinkMutation({
    variables: {
      id: parseInt(file.id, 10),
    },
    onCompleted: handleCompleted,
  });

  return (
    <Tooltip title="Skopiuj link do pliku">
      <Button
        icon={<LinkOutlined />}
        loading={loading}
        onClick={handleClick}
      />
    </Tooltip>
  );
};

const DeleteAction: React.FC<Props> = (props: Props) => {
  const { file } = props;

  const handleConfirm = async () => (
    await deleteFile()
  );

  const handleCompleted = () => (
    message.success(`Pomyślnie usunięto plik ${file.title}`)
  );

  const [deleteFile, { loading }] = useDeleteFileMutation({
    variables: {
      id: parseInt(file.id, 10),
    },
    onCompleted: handleCompleted,
    refetchQueries: [{
      query: ViewerStorageDocument,
    }],
    update: (store) => {
      const current = store.readQuery<ViewerFilesQuery>({
        query: ViewerFilesDocument,
      });

      if (current?.viewer?.files) {
        store.writeQuery<ViewerFilesQuery>({
          query: ViewerFilesDocument,
          data: {
            viewer: {
              ...current.viewer,
              files: current.viewer.files.filter(f => f.id !== file.id),
            },
          }
        })
      }
    }
  });

  const title = (
    <Text>
      Czy na pewno chcesz trwale usunąć plik&nbsp;
      <Text strong>{file.title}</Text>
      ?
    </Text>
  );

  return (
    <Popconfirm
      title={title}
      onConfirm={handleConfirm}
      icon={<DeleteOutlined/>}
      okText="Usuń"
      okType="danger"
      cancelText="Nie"
      placement="topRight"
    >
      <Button
        danger
        icon={<DeleteOutlined />}
        loading={loading}
      />
    </Popconfirm>
  );
};

export default ListActions;
