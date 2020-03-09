import React, {useImperativeHandle, forwardRef, ChangeEvent} from 'react';
import { NewFileInput } from 'types';
import { Modal, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { Formik, FormikProps } from 'formik';
import { Form, Input, InputNumber, Checkbox } from 'formik-antd';
import { initialValues, AddFileSchema } from "./FilesAddModalUtils";
import { RcFile } from 'antd/lib/upload';

const { Dragger } = Upload;

interface Props {
  visible: boolean;
  onCreate: (values: NewFileInput) => Promise<void>;
  onCancel: () => void;
}

const FilesAddModal: React.FC<Props> = (props: Props) => {
  const [confirmLoading, setConfirmLoading] = React.useState<boolean>(false);
  const formikRef = React.useRef(null);
  const {
    visible,
    onCreate,
    onCancel,
  } = props;

  const handleOk = () => (
    // @ts-ignore
    formikRef.current.handleSubmit()
  );

  return (
    <Modal
      title="Dodaj nowy plik"
      visible={visible}
      confirmLoading={confirmLoading}
      onOk={handleOk}
      onCancel={onCancel}
    >
      <FilesAddFormik ref={formikRef}/>
    </Modal>
  )
};

const FilesAddFormik = forwardRef((_, ref) => {
  const handleSubmit = (values: NewFileInput) => {
    console.log(values)
  };

  useImperativeHandle(ref, () => ({
    handleSubmit
  }), []);

  return (
    <Formik<NewFileInput>
      initialValues={initialValues}
      validationSchema={AddFileSchema}
      onSubmit={handleSubmit}
      render={FilesAddForm}
    />
  );
});

type FormValues = FormikProps<NewFileInput>;

const FilesAddForm: React.FC<FormValues> = (props: FormValues) => {
  const {
    setFieldValue,
    setFieldTouched,
  } = props;

  const handleFileUpload = (file: RcFile): boolean => {
    setFieldValue('file', file);
    setFieldTouched('file');
    return true;
  };

  const handleFileRemove = (): boolean => {
    setFieldValue('file', null);
    setFieldTouched('file');
    return true;
  };

  return (
    <Form>
      <Input name="title" placeholder="Tytuł pliku" />
      <Dragger
        action=""
        multiple={false}
        beforeUpload={handleFileUpload}
        onRemove={handleFileRemove}
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Kliknij albo upuść plik tutaj</p>
      </Dragger>
    </Form>
  );
};

export default FilesAddModal;
