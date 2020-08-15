import React from 'react';
import * as R from 'ramda';
import { useField } from 'formik';
import { Form, Button } from 'antd';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import { Input, Radio } from 'formik-antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import randomstring from 'randomstring';

import { MediaInput } from 'shared';
import { Container, ElementContainer, ElementCard } from './ListInputStyle';
import { QuoteInstance } from '../../QuotesTypes';

interface Props {
  fieldName: string;
  onAfterChange(): void;
}

const ListInputView: React.FC<Props> = ({ fieldName, onAfterChange }) => {
  const [field] = useField<QuoteInstance[]>({ name: fieldName });

  const debouncedOnAfterChange = React.useCallback(() =>
    AwesomeDebouncePromise(onAfterChange, 500),
    [field.value],
  );

  const handleAddClick = () => {
    const newValue = R.concat<any>(field.value, [{
      id: randomstring.generate(7),
      content: '',
      author: '',
      type: 'none',
      image: {
        type: 'image',
        key: 'url',
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

  const handleRemoveClick = (value: QuoteInstance) => {
    const newValue = R.without([value], field.value);

    field.onChange({
      target: {
        name: fieldName,
        value: newValue,
      }
    });

    debouncedOnAfterChange();
  };

  const toElement = (value: QuoteInstance, index: number) => {
    const name = `${fieldName}[${index}]`;
    const handleRemove = () => handleRemoveClick(value);

    return (
      <ElementContainer key={value.id}>
        <ElementCard>
          <Input
            name={`${name}.author`}
            placeholder="Author"
          />
          <Input.TextArea
            name={`${name}.content`}
            placeholder="Cytat"
          />
          <Radio.Group name={`${name}.imageType`} size="small">
            <Radio.Button value="beside">Obok</Radio.Button>
            <Radio.Button value="background">Tło</Radio.Button>
            <Radio.Button value="none">Brak</Radio.Button>
          </Radio.Group>
          {value.imageType !== 'none' && (
            <MediaInput
              name={`${name}.image`}
              onAfterChange={onAfterChange}
            />
          )}
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
          <PlusOutlined /> Dodaj cytat
        </Button>
      </Form.Item>
    </Container>
  )
};

export default ListInputView;
