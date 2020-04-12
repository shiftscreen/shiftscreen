import React from 'react';
import filesize from 'filesize';
import { ColumnsType } from 'antd/es/table';
import { File } from 'types';

import Actions from './ListActions';

export const columns: ColumnsType<File> = [
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
    dataIndex: 'sizeKilobytes',
    render: (size: number) => filesize(size * 1000),
  },
  {
    title: 'Ostatnio zmodyfikowany',
    dataIndex: 'createdAt',
    render: (date: string) => (new Date(date).toLocaleDateString()),
  },
  {
    key: 'actions',
    width: '8rem',
    render: (text, file: File) => <Actions file={file} />,
  },
];
