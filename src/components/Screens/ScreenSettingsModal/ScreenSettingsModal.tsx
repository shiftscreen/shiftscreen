import React from 'react';
import { ModalProps } from 'antd/es/modal';
import { SaveOutlined } from '@ant-design/icons';
import { FormikProps } from 'formik';
import { Screen, UpdateScreenInput } from 'types';
import { message } from 'antd';

import ModalFormik from 'shared/ModalFormik';
import ScreenSettingsForm from './ScreenSettingsForm';
import { useUpdateScreenMutation } from 'generated/graphql';

interface Props {
  screen: Screen;
  visible: boolean;
  onCreate: (values: UpdateScreenInput) => Promise<void>;
  onClose: () => void;
}

const ScreenSettingsModal: React.FC<Props> = (props: Props) => {
  const formikRef = React.useRef<FormikProps<UpdateScreenInput>>();
  const {
    screen,
    visible,
    onCreate,
    onClose,
  } = props;

  const [updateScreen] = useUpdateScreenMutation();

  const handleSubmit = async (values: UpdateScreenInput) => {
    try {
      await updateScreen({
        variables: {
          id: parseInt(screen.id, 10),
          values
        }
      })
    } catch (e) {
      console.error(e);
      message.error('Wystąpił błąd przy aktualizacji wyświetlacza');
    }
  };

  const modalProps: ModalProps = {
    title: 'Ustawienia wyświetlacza',
    okText: 'Zapisz',
    okButtonProps: {
      icon: <SaveOutlined/>
    }
  };

  return (
    <ModalFormik<UpdateScreenInput>
      visible={visible}
      modalProps={modalProps}
      onClose={onClose}
      formikRef={formikRef}
    >
      <ScreenSettingsForm
        screen={screen}
        formikRef={formikRef}
        onSubmit={handleSubmit}
      />
    </ModalFormik>
  )
};

export default ScreenSettingsModal;
