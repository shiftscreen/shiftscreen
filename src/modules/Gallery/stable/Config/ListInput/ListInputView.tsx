import React from 'react';
import * as R from 'ramda';
import { useField } from 'formik';
import { Form, Button } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import randomstring from 'randomstring';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import { MediaInput } from 'shared';

import { Container, ElementContainer } from './ListInputStyle';
import { PhotoInstance } from '../../GalleryTypes';

interface Props {
  fieldName: string;
  onAfterChange(): void;
}

const ListInputView: React.FC<Props> = ({ fieldName, onAfterChange }) => {
  const [field] = useField<PhotoInstance[]>({ name: fieldName });

  const debouncedOnAfterChange = React.useCallback(() =>
    AwesomeDebouncePromise(onAfterChange, 500),
    [field.value],
  );

  const handleAddClick = () => {
    const newValue = R.concat<any>(field.value, [{
      id: randomstring.generate(7),
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

  const handleRemoveClick = (value: PhotoInstance) => {
    const newValue = R.without([value], field.value);

    field.onChange({
      target: {
        name: fieldName,
        value: newValue,
      }
    });

    onAfterChange();
  };

  const toElement = (value: PhotoInstance, index: number) => {
    const name = `${fieldName}[${index}]`;
    const handleRemove = () => handleRemoveClick(value);

    return (
      <ElementContainer key={value.id}>
        <MediaInput
          name={`${name}.image`}
          onAfterChange={onAfterChange}
        />
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
          <PlusOutlined /> Dodaj obrazek
        </Button>
      </Form.Item>
    </Container>
  )
};

export default ListInputView;
