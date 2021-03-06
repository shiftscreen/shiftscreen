import React from 'react';
import * as R from 'ramda';
import { Formik, FormikProps } from 'formik';
import { NewFileInput } from 'types';
import { RcFile, UploadChangeParam, UploadFile } from 'antd/lib/upload/interface';

import View from './FileAddFormView';
import { AddFileSchema, initialValues } from './FileAddFormUtils';

interface Props {
  formikRef: React.MutableRefObject<FormikProps<NewFileInput> | undefined>;
  onSubmit(values: NewFileInput): Promise<void>;
}

const FileAddForm: React.FC<Props> = ({ formikRef, onSubmit }) => {
  const [fileList, setFileList] = React.useState<UploadFile[]>([]);
  const fileTooBig = fileList[0] && (fileList[0].size > 1024 * 1024 * 100); // 100 MB

  const handleFileUpload = (file: RcFile): boolean => {
    formikRef?.current?.setFieldValue('file', file);
    return false;
  };

  const handleFileChange = (info: UploadChangeParam): void => (
    setFileList(
      R.ifElse(
        R.isEmpty,
        R.always([]),
        R.always([info.file])
      )(info.fileList)
    )
  );

  const handleFileRemove = (): boolean => {
    formikRef?.current?.setFieldValue('file', null);
    setFileList([]);
    return true;
  };

  const handleReset = (): void => {
    setFileList([]);
  };

  return (
    <Formik<NewFileInput>
      initialValues={initialValues}
      validationSchema={AddFileSchema}
      onSubmit={onSubmit}
      onReset={handleReset}
      enableReinitialize
      // @ts-ignore invalid Formik typings
      innerRef={formikRef}
    >
      <View
        fileList={fileList}
        fileTooBig={fileTooBig}
        beforeUpload={handleFileUpload}
        onChange={handleFileChange}
        onRemove={handleFileRemove}
      />
    </Formik>
  );
};

export default FileAddForm;
