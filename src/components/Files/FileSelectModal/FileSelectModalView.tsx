import React from 'react';
import { Modal } from 'antd';

import { BasicFilePartsFragment, FileKeyInput, useAddFileKeyMutation, } from 'generated/graphql';
import FilesList from './FilesList';
import ModalFooter from './ModalFooter';

interface Props {
  withKey?: boolean;
  visible: boolean;
  onClose(file?: BasicFilePartsFragment, key?: FileKeyInput): void;
}

const FileSelectModal: React.FC<Props> = ({ visible, onClose, withKey = false }) => {
  const [addFileKey] = useAddFileKeyMutation();

  const getFileKey = async (file: BasicFilePartsFragment): Promise<FileKeyInput | undefined> => {
    try {
      return await addFileKey({
        variables: {
          fileId: parseInt(file.id, 10),
        }
      }).then(result => {
        if (result?.data?.addFileKey) {
          const { id, key } = result.data.addFileKey;
          return { id, key };
        }
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleSelectClick = async (file: BasicFilePartsFragment) => {
    const key = withKey ? await getFileKey(file) : undefined;
    onClose(file, key);
  };

  const handleCloseClick = () => (
    onClose()
  );

  return (
    <Modal
      title="Wybór pliku"
      visible={visible}
      onCancel={handleCloseClick}
      footer={<ModalFooter/>}
      okButtonProps={{
        style: { display: 'none' }
      }}
      bodyStyle={{
        maxHeight: '50vh',
        overflowY: 'scroll',
        padding: 0,
      }}
    >
      <FilesList
        onClick={handleSelectClick}
      />
    </Modal>
  );
};

export default FileSelectModal;
