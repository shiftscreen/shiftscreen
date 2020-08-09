import React from 'react';
import { ModuleConfigProps } from 'types';
import { Alert, Divider } from 'antd';
import { useField } from 'formik';
import { SourceType } from '../NewsTypes';
import { Form, Input, Radio } from 'formik-antd';
import ListInputView from './ListInput';

const Config: React.FC<ModuleConfigProps> = ({ submitForm }) => {
  const [{ value: sourceType }] = useField<SourceType>({
    name: 'sourceType',
  });
  const rssSelected = sourceType === 'rss';

  return (
    <>
      <Alert
        type="info"
        message="Przy każdym pokazaniu slajdu wyświetlony zostanie jeden losowy news"
      />
      <Divider/>
      <Form.Item
        name="domain"
        label="Strona WWW"
      >
        <Input name="domain" />
      </Form.Item>
      <Form.Item
        name="sourceType"
        label="Źródło danych"
      >
        <Radio.Group name="sourceType">
          <Radio.Button value="config">Własne</Radio.Button>
          <Radio.Button value="rss">Kanał RSS</Radio.Button>
        </Radio.Group>
      </Form.Item>
      {rssSelected && (
        <Form.Item
          name="rssUrl"
          label="Kanał RSS"
        >
          <Input name="rssUrl" />
        </Form.Item>
      )}
      {!rssSelected && (
        <Form.Item
          name="newsList"
          label="Lista newsów"
        >
          <ListInputView
            onAfterChange={submitForm}
            fieldName="newsList"
          />
        </Form.Item>
      )}
    </>
  );
};

export default React.memo(Config);
