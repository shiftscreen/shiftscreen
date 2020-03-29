import React from 'react';
import { Result, Button } from 'antd';

const Error404: React.FC = () => (
  <Result
    status={404}
    title="404"
    subTitle="Ups, ta strona nie istnieje."
    extra={<Button type="primary">Strona główna</Button>}
  />
);

export default Error404;
