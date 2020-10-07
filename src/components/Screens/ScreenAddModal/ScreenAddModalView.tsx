import React, { Fragment } from 'react';
import { ModalProps } from 'antd/es/modal';
import { PlusOutlined } from '@ant-design/icons';
import { FormikProps } from 'formik';
import { NewScreenInput } from 'types';
import { ErrorAlert } from 'shared';
import { Typography } from 'antd';

import { useAddScreenMutation, useSelectedOrganizationQuery } from 'generated/graphql';
import ModalFormik from 'shared/ModalFormik';
import ScreenAddForm from './Form';
import { updateCache } from './ScreenAddModalUtils';
import { handleError } from '../../../utils';

const { Text } = Typography;

interface Props {
  visible: boolean;
  onCreate: (values: NewScreenInput) => Promise<void>;
  onClose: () => void;
}

const ScreenAddModal: React.FC<Props> = ({ visible, onClose }: Props) => {
  const formikRef = React.useRef<FormikProps<NewScreenInput>>();
  const { data } = useSelectedOrganizationQuery();
  const selectedOrganization = data?.selectedOrganization;

  const [addScreen, { error }] = useAddScreenMutation({
    onCompleted: onClose,
    update: (cache, mutationResult) => (
      updateCache(cache, mutationResult, selectedOrganization)
    ),
  });


  if (!selectedOrganization) {
    onClose();
    return null;
  }

  const handleSubmit = async (values: NewScreenInput) => {
    try {
      await addScreen({ variables: { values } });
    } catch (e) {
      handleError(e);
    }
  };

  const title = (
    <>
      Stwórz nowy wyświetlacz dla organizacji&nbsp;
      <Text strong>{selectedOrganization.title}</Text>
    </>
  );

  const modalProps: ModalProps = {
    title,
    okText: 'Stwórz',
    okButtonProps: {
      icon: <PlusOutlined/>,
    }
  };

  return (
    <ModalFormik<NewScreenInput>
      visible={visible}
      modalProps={modalProps}
      onClose={onClose}
      formikRef={formikRef}
    >
      <Fragment>
        <ScreenAddForm
          formikRef={formikRef}
          onSubmit={handleSubmit}
          organization={selectedOrganization}
        />
        {error && <ErrorAlert error={error}/>}
      </Fragment>
    </ModalFormik>
  );
};

export default ScreenAddModal;
