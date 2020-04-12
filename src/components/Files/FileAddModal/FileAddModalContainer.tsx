import React from 'react';
import { ModalProps } from 'antd/es/modal';
import { UploadOutlined } from '@ant-design/icons';
import { FormikProps } from 'formik';
import { NewFileInput } from 'types';

import ModalFormik from 'shared/ModalFormik';
import FileAddForm from './FileAddForm';
import {
  useAddFileMutation,
  ViewerFilesDocument,
  ViewerFilesQuery,
  ViewerStorageDocument,
} from 'generated/graphql';
import { message } from 'antd';

interface Props {
  visible: boolean;
  onCreate: (values: NewFileInput) => Promise<void>;
  onClose: () => void;
}

const FileAddModal: React.FC<Props> = (props: Props) => {
  const formikRef = React.useRef<FormikProps<NewFileInput>>();
  const {
    visible,
    onCreate,
    onClose,
  } = props;

  const [addFile] = useAddFileMutation({
    refetchQueries: [{
      query: ViewerStorageDocument,
    }],
    update: (store, { data }) => {
      const current = store.readQuery<ViewerFilesQuery>({
        query: ViewerFilesDocument,
      });

      if (current?.viewer?.files && data?.addFile) {
        store.writeQuery<ViewerFilesQuery>({
          query: ViewerFilesDocument,
          data: {
            viewer: {
              ...current.viewer,
              files: [...current.viewer.files, data.addFile],
            },
          }
        })
      }
    }
  });

  const handleSubmit = async (values: NewFileInput) => {
    try {
      await addFile({ variables: { values } });
      onClose();
    } catch (e) {
      console.error(e);
      message.error('Wystąpił błąd przy dodawaniu pliku');
    }
  };

  const modalProps: ModalProps = {
    title: 'Dodaj nowy plik',
    okText: 'Dodaj',
    okButtonProps: {
      icon: <UploadOutlined/>
    }
  };

  return (
    <ModalFormik<NewFileInput>
      visible={visible}
      modalProps={modalProps}
      onClose={onClose}
      formikRef={formikRef}
    >
      <FileAddForm
        formikRef={formikRef}
        onSubmit={handleSubmit}
      />
    </ModalFormik>
  )
};

export default FileAddModal;
