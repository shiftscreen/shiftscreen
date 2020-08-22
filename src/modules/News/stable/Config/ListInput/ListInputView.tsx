import React from 'react';
import * as R from 'ramda';
import { useField } from 'formik';
import { Button, Form } from 'antd';
import { Input } from 'formik-antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import randomstring from 'randomstring';

import { Container, ElementCard, ElementContainer } from './ListInputStyle';
import { NewsInstance } from '../../NewsTypes';
import { MediaInput } from '../../../../../shared';
import AwesomeDebouncePromise from 'awesome-debounce-promise';

interface Props {
  fieldName: string;
  onAfterChange(): void;
}

const ListInputView: React.FC<Props> = ({ fieldName, onAfterChange }) => {
  const [field] = useField<NewsInstance[]>({ name: fieldName });

  const debouncedOnAfterChange = React.useCallback(() =>
    AwesomeDebouncePromise(onAfterChange, 500),
    [field.value],
  );

  const handleAddClick = () => {
    const newValue = R.concat<any>(field.value, [{
      id: randomstring.generate(7),
      title: '',
      description: '',
      image: {
        type: 'url',
        url: '',
      },
    }]);

    field.onChange({
      target: {
        name: fieldName,
        value: newValue,
      }
    });

    debouncedOnAfterChange();
  };

  const handleRemoveClick = (value: NewsInstance) => {
    const newValue = R.without([value], field.value);

    field.onChange({
      target: {
        name: fieldName,
        value: newValue,
      }
    });

    onAfterChange();
  };

  const toElement = (value: NewsInstance, index: number) => {
    const name = `${fieldName}[${index}]`;
    const handleRemove = () => handleRemoveClick(value);

    return (
      <ElementContainer key={value.id}>
        <ElementCard>
          <Input
            name={`${name}.title`}
            placeholder="Tytuł"
          />
          <Input.TextArea
            name={`${name}.description`}
            placeholder="Opis"
          />
          <MediaInput
            name={`${name}.image`}
            onAfterChange={onAfterChange}
          />
        </ElementCard>
        <MinusCircleOutlined
          className="dynamic-delete-button"
          onClick={handleRemove}
        />
      </ElementContainer>
    )
  };
  const mapIndexed = R.addIndex<any>(R.map);
  const elementList = mapIndexed(toElement, field.value);

  return (
    <Container>
      {elementList}
      <Form.Item>
        <Button
          type="dashed"
          onClick={handleAddClick}
          style={{ width: '100%' }}
        >
          <PlusOutlined /> Dodaj news
        </Button>
      </Form.Item>
    </Container>
  )
};

export default ListInputView;
