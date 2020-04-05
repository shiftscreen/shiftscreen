import React from 'react';
import { File } from 'types';
import { Button, Popconfirm, Row, Col, Typography, Tooltip, message } from 'antd';
import { DeleteOutlined, LinkOutlined } from '@ant-design/icons';

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
  const [loading, setLoading] = React.useState<boolean>();
  const { file } = props;

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      message.success('Skopiowano link do schowka');
    }, 200);
  };

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
  const [loading, setLoading] = React.useState<boolean>();
  const { file } = props;

  const handleConfirm = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      message.success(`Pomyślnie usunięto plik ${file.title}`);
    }, 600);
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
        icon={<DeleteOutlined />}
        loading={loading}
      />
    </Popconfirm>
  );
};

export default ListActions;
