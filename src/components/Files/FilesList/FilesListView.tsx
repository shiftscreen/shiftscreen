import React from 'react';
import filesize from 'filesize';
import { ColumnsType } from 'antd/es/table';
import { File } from 'types';
import { Table } from './FilesListStyle';

import Actions from './ListActions';

const columns: ColumnsType<File> = [
  {
    title: 'Tytuł',
    dataIndex: 'title',
  },
  {
    title: 'Nazwa pliku',
    dataIndex: 'filename',
  },
  {
    title: 'Wielkość',
    dataIndex: 'sizeBytes',
    render: (size: number) => filesize(size),
  },
  {
    title: 'Ostatnio zmodyfikowany',
    dataIndex: 'createdAt',
    render: (date: string) => (new Date(date).toLocaleDateString()),
  },
  {
    key: 'actions',
    width: '10rem',
    render: (text, file: File) => <Actions file={file} />,
  },
];

const data: File[] = [
  {
    id: "4",
    createdAt: "2020-03-03T22:02:24.301Z",
    updatedAt: "2020-03-03T22:02:24.301Z",
    filename: "1583272944180-9ItBLKH0_400x400.jpg",
    sizeBytes: 36819,
    mimeType: "image/jpeg",
    title: "Zdjecie"
  },
  {
    id: "5",
    createdAt: "2020-03-03T22:02:24.301Z",
    updatedAt: "2020-03-03T22:02:24.301Z",
    filename: "1583272944180-9ItBLKH0_400x400.jpg",
    sizeBytes: 36819,
    mimeType: "image/jpeg",
    title: "Zdjecie"
  },
  {
    id: "6",
    createdAt: "2020-03-03T22:02:24.301Z",
    updatedAt: "2020-03-03T22:02:24.301Z",
    filename: "1583272944180-9ItBLKH0_400x400.jpg",
    sizeBytes: 36819,
    mimeType: "image/jpeg",
    title: "Zdjecie"
  }
];

const FilesList: React.FC = () => (
  <Table
    rowKey={(file: File) => file.id}
    columns={columns}
    dataSource={data}
    pagination={false}
    bordered
  />
);

export default FilesList;
