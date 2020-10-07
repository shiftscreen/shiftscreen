import React from 'react';
import * as R from 'ramda';
import filesize from 'filesize';
import dayjs from 'dayjs';
import { message, Typography } from 'antd';
import { ColumnsType } from 'antd/es/table';

import { File } from 'types';
import { useUpdateFileMutation } from 'generated/graphql';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FAIcon } from './FilesListStyle';
import Actions from './ListActions';
import { handleError } from '../../../utils';

const { Text } = Typography;

interface TitleEditableProps {
  file: File;
}

const TitleEditable: React.FC<TitleEditableProps> = ({ file }) => {
  const [updateFile] = useUpdateFileMutation();

  const handleChange = async (title: string) => {
    try {
      await updateFile({
        variables: {
          id: parseInt(file.id, 10),
          values: { title },
        }
      });
    } catch (e) {
      handleError(e, 'Wystąpił błąd podczas próby aktualizacji tytułu');
    }
  };

  return (
    <Text editable={{ onChange: handleChange }}>
      {file.title}
    </Text>
  );
};

interface IconProps {
  mimeType: string;
}

const Icon: React.FC<IconProps> = ({ mimeType }) => {
  const icon = R.cond<string, IconProp>([
    [R.includes('image'), R.always('file-image')],
    [R.includes('video'), R.always('file-video')],
    [R.T, R.always('file')]
  ])(mimeType);

  return (
    <FAIcon icon={icon} />
  )
};

export const columns: ColumnsType<File> = [
  {
    title: '',
    width: '1rem',
    dataIndex: 'mimeType',
    render: (mimeType: string) => (<Icon mimeType={mimeType}/>)
  },
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
    render: (date: string) => dayjs(date).format('LLL'),
  },
  {
    key: 'actions',
    width: '8rem',
    render: (text, file: File) => <Actions file={file}/>,
  },
];
