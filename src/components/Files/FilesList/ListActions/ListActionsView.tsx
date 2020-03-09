import React from 'react';
import { File } from 'types';
import { Button, Popconfirm, Row, Col, Typography } from 'antd';
import { DeleteOutlined, EditOutlined, LinkOutlined } from '@ant-design/icons';

const { Text } = Typography;

interface Props {
  file: File;
}

const ListActions: React.FC<Props> = (props: Props) => {
  const { file } = props;

  return (
    <Row justify="space-between" align="middle">
      <Col>
        <EditAction file={file}/>
      </Col>
      <Col>
        <LinkAction file={file}/>
      </Col>
      <Col>
        <DeleteAction file={file}/>
      </Col>
    </Row>
  );
};

const EditAction: React.FC<Props> = (props: Props) => {
  const { file } = props;

  return (
    <Button
      icon={<EditOutlined />}
    />
  );
};

const LinkAction: React.FC<Props> = (props: Props) => {
  const { file } = props;

  return (
    <Button
      icon={<LinkOutlined />}
    />
  );
};

const DeleteAction: React.FC<Props> = (props: Props) => {
  const { file } = props;

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
      onConfirm={() => null}
      onCancel={() => null}
      okText="Usuń"
      cancelText="Nie"
      placement="topRight"
    >
      <Button
        danger
        icon={<DeleteOutlined />}
      />
    </Popconfirm>
  );
};

export default ListActions;
