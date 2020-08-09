import React from 'react';
import { Radio, Input } from 'formik-antd';
import { useField } from 'formik';

import { Container, Button, KeyInputContainer, FileNameContainer } from './MediaInputStyle';
import { BasicFilePartsFragment, FileKeyInput, useFileByKeyLazyQuery } from 'generated/graphql';
import { SelectModal as FileSelectModal } from 'components/Files';

interface Props {
  name: string;
}

interface ExtendedProps extends Props {
  onAfterChange?(): void;
}

const MediaInput: React.FC<ExtendedProps> = ({ onAfterChange, ...props }) => {
  const [{ value, name }] = useField(props);
  const urlSelected = value.type === 'url';

  return (
    <Container>
      <Radio.Group name={`${name}.type`}>
        <Radio.Button value="url">Link</Radio.Button>
        <Radio.Button value="key">Pliki</Radio.Button>
      </Radio.Group>
      {urlSelected && (
        <URLInput
          name={name}
        />
      )}
      {!urlSelected && (
        <KeyInput
          name={name}
          onAfterChange={onAfterChange}
        />
      )}
    </Container>
  );
};

const URLInput: React.FC<Props> = ({ name }) => (
  <Input
    name={`${name}.url`}
    placeholder="URL"
  />
);

const KeyInput: React.FC<ExtendedProps> = ({ onAfterChange, ...props }) => {
  const [{ value: fileKey, name, onChange }] = useField({
    name: `${props.name}.key`,
  });
  const [fileByKey, { data: file }] = useFileByKeyLazyQuery({
    variables: { fileKey },
    fetchPolicy: 'cache-first',
  });
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);

  const handleClose = async (file?: BasicFilePartsFragment, key?: FileKeyInput) => {
    setModalVisible(false);

    if (key) {
      onChange({
        target: {
          name,
          value: key,
        }
      });

      onAfterChange && onAfterChange();
    }
  };

  const handleClick = () => (
    setModalVisible(true)
  );

  const getFile = async () => {
    try {
      await fileByKey();
    } catch (e) {
      console.error(e);
    }
  };

  React.useEffect(() => {
    getFile();
  }, [fileKey]);

  return (
    <KeyInputContainer>
      {file && (
        <FileNameContainer>
          {file.fileKey.file.title}
        </FileNameContainer>
      )}
      <Button
        size="large"
        onClick={handleClick}
      >
        Wybierz plik
      </Button>
      <FileSelectModal
        visible={modalVisible}
        onClose={handleClose}
        withKey
      />
    </KeyInputContainer>
  );
};

export default MediaInput;
