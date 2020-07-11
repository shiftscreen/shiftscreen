import React from 'react';
import { List, Skeleton } from 'antd';

import { ErrorAlert } from 'shared';
import { BasicFilePartsFragment, useViewerFilesQuery } from 'generated/graphql';
import { Table } from '../FileSelectModalStyle';
import { columns } from '../FileSelectModalUtils';

interface FilesListProps {
  onClick(file: BasicFilePartsFragment): void;
}

const FilesList: React.FC<FilesListProps> = ({ onClick }) => {
  const { data, loading, error } = useViewerFilesQuery();

  const onRow = (record: BasicFilePartsFragment) => ({
    onClick: () => onClick(record),
  });

  if (loading) return (
    <List
      size="small"
      dataSource={[1, 2, 3]}
      pagination={false}
      renderItem={() => (
        <List.Item>
          <Skeleton loading={loading} active/>
        </List.Item>
      )}
    />
  );

  if (error || !data) return (
    <ErrorAlert error={error}/>
  );

  return (
    <Table<any>
      rowKey={(file: BasicFilePartsFragment) => file.id}
      columns={columns}
      dataSource={data?.viewer.files || []}
      pagination={false}
      onRow={onRow}
    />
  );
};

export default FilesList;
