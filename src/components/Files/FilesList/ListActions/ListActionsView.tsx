import React from 'react';
import { File } from 'types';
import { Button, Col, message, Popconfirm, Row, Tooltip, Typography } from 'antd';
import { DeleteOutlined, LinkOutlined } from '@ant-design/icons';

import {
  FileLinkMutation,
  useDeleteFileMutation,
  useFileLinkMutation,
  ViewerFilesDocument,
  ViewerFilesQuery,
  ViewerStorageDocument,
} from 'generated/graphql';
import { handleError } from 'utils';

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
        icon={<LinkOutlined/>}
        loading={loading}
        onClick={handleClick}
      />
    </Tooltip>
  );
};

const DeleteAction: React.FC<Props> = ({ file }) => {
  const [deleteFile, { loading }] = useDeleteFileMutation({
    variables: {
      id: parseInt(file.id, 10),
    },
    onCompleted: () => (
      message.success(`Pomyślnie usunięto plik ${file.title}`)
    ),
    onError: (error) => (
      handleError(error, 'Wystąpił błąd przy usuwaniu pliku')
    ),
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
        });
      }
    }
  });

  const handleConfirm = async () => {
    try {
      await deleteFile();
    } catch (e) {
      handleError(e);
    }
  };

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
        icon={<DeleteOutlined/>}
        loading={loading}
      />
    </Popconfirm>
  );
};

export default ListActions;
