import React from 'react';
import filesize from 'filesize';
import moment from 'moment';
import { message, Typography } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { File, useUpdateFileMutation } from 'types';

import Actions from './ListActions';

const { Text } = Typography;

interface TitleEditableProps {
  file: File;
}

const TitleEditable: React.FC<TitleEditableProps> = ({ file }: TitleEditableProps) => {
  const [updateFile] = useUpdateFileMutation();

  const handleChange = async (title: string) => {
    try {
      await updateFile({
        variables: {
          id: parseInt(file.id, 10),
          values: { title },
        }
      })
    } catch (e) {
      console.error(e);
      message.error('Wystąpił błąd podczas próby aktualizacji tytułu')
    }
  };

  return (
    <Text editable={{ onChange: handleChange }}>
      {file.title}
    </Text>
  )
};

export const columns: ColumnsType<File> = [
  {
    title: 'Tytuł',
    dataIndex: '',
    render: (file: File) => (<TitleEditable file={file}/>)
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
    dataIndex: 'updatedAt',
    render: (date: string) => moment(date).format('LLL'),
  },
  {
    key: 'actions',
    width: '8rem',
    render: (text, file: File) => <Actions file={file} />,
  },
];
