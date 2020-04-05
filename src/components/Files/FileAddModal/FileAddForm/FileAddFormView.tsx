import React from 'react';
import { Upload } from 'antd';
import { Form, Input } from 'formik-antd';
import { InboxOutlined } from '@ant-design/icons';
import { RcFile, UploadChangeParam, UploadFile }  from 'antd/lib/upload/interface';

const { Dragger } = Upload;

interface Props {
  fileList: UploadFile[] | undefined;
  beforeUpload(file: RcFile): boolean;
  onChange(info: UploadChangeParam): void
  onRemove(): boolean;
}

const FileAddForm: React.FC<Props> = (props: Props) => {
  const {
    fileList,
    beforeUpload,
    onChange,
    onRemove
  } = props;

  return (
    <Form
      name="file-add-form"
    >
      <Form.Item name="title">
        <Input name="title" placeholder="Tytuł pliku" />
      </Form.Item>
      <Form.Item name="file">
        <Dragger
          listType="picture"
          fileList={fileList}
          beforeUpload={beforeUpload}
          onChange={onChange}
          onRemove={onRemove}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Kliknij albo upuść plik tutaj</p>
        </Dragger>
      </Form.Item>
    </Form>
  );
};

export default FileAddForm;
