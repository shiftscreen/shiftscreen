import React from 'react';
import { ModuleConfigProps, PredefinedQuotesType } from 'types';
import { Alert, Divider } from 'antd';
import { useField } from 'formik';
import { SourceType } from '../QuotesTypes';
import { Form, Radio } from 'formik-antd';
import ListInputView from './ListInput';

const Config: React.FC<ModuleConfigProps> = ({ submitForm }) => {
  const [{ value: sourceType }] = useField<SourceType>({
    name: 'sourceType',
  });
  const predefinedSelected = sourceType === 'predefined';

  return (
    <>
      <Alert
        type="info"
        message="Przy każdym pokazaniu slajdu wyświetlony zostanie jeden losowy cytat"
      />
      <Divider/>
      <Form.Item
        name="sourceType"
        label="Źródło danych"
      >
        <Radio.Group name="sourceType">
          <Radio.Button value="predefined">Predefiniowane</Radio.Button>
          <Radio.Button value="config">Własne</Radio.Button>
        </Radio.Group>
      </Form.Item>
      {predefinedSelected && (
        <Radio.Group name="predefinedList">
          <Radio
            name="predefinedList"
            value={PredefinedQuotesType.Motivational}
          >
            Motywacyjne
          </Radio>
          <Radio
            name="predefinedList"
            value={PredefinedQuotesType.Bussiness}
          >
            O biznesie
          </Radio>
        </Radio.Group>
      )}
      {!predefinedSelected && (
        <Form.Item
          name="quotesList"
          label="Lista cytatów"
        >
          <ListInputView
            onAfterChange={submitForm}
            fieldName="quotesList"
          />
        </Form.Item>
      )}
    </>
  );
};

export default React.memo(Config);
