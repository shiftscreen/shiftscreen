import React from 'react';
import { Result, Button, Row } from 'antd';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  const extra = (
    <Link to='/'>
      <Button type="primary">Powróć na stronę główną</Button>
    </Link>
  );

  return (
    <Row
      style={{ height: '100vh' }}
      align="middle"
      justify="center"
    >
      <Result
        title="404"
        subTitle="Ups! Ta strona nie istnieje."
        extra={extra}
      />
    </Row>
  );
};

export default NotFound;
