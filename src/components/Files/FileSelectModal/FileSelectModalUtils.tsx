import React from 'react';
import filesize from 'filesize';
import { ColumnsType } from 'antd/es/table';
import { BasicFilePartsFragment } from 'types';

export const columns: ColumnsType<BasicFilePartsFragment> = [
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
];
