import React from 'react';
import { File } from 'types';
import { Alert, List, Skeleton, Typography } from 'antd';

import { Table } from './FilesListStyle';
import { columns } from './FilesListUtils';
import { useViewerFilesQuery } from 'generated/graphql';

const { Text } = Typography;

const FilesList: React.FC = () => {
  const { data, loading, error } = useViewerFilesQuery();

  if (loading) return (
    <List
      size="small"
      dataSource={[1, 2, 3]}
      pagination={false}
      renderItem={() => (
        <List.Item>
          <Skeleton loading={loading} active />
        </List.Item>
      )}
      bordered
    />
  );

  if (error || !data) {
    console.error(error);
    return (
      <Alert
        message="Wystąpił błąd"
        type="error"
        showIcon
      />
    );
  }

  const title = () => (
    <Text style={{ fontSize: '16px' }} strong>
      Lista
    </Text>
  );

  return (
    <Table
      rowKey={(file: File) => file.id}
      columns={columns}
      dataSource={data?.viewer.files || []}
      title={title}
      pagination={false}
      bordered
    />
  );
};

export default FilesList;
