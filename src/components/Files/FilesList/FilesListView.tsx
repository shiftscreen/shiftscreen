import React from 'react';
import { File } from 'types';
import { Typography } from 'antd';

import { Table } from './FilesListStyle';
import { columns, data } from './FilesListUtils';

const { Text } = Typography;

const FilesList: React.FC = () => {
  const title = () => (
    <Text style={{ fontSize: '16px' }} strong>
      Lista
    </Text>
  );

  return (
    <Table
      //sfdfsd

      rowKey={(file: File) => file.id}
      columns={columns}
      dataSource={data}
      title={title}
      pagination={false}
      bordered
    />
  );
};

export default FilesList;
