import React from 'react';
import * as R from 'ramda';
import { useField } from 'formik';
import { Button, Form, TimePicker } from 'antd';
import { DatePicker } from 'formik-antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import dayjs, { Dayjs } from 'dayjs';

import { Container, PickerContainer } from './ListInputStyle';

const { RangePicker: TimeRangePicker } = TimePicker;
const { RangePicker: DateRangePicker } = DatePicker;

interface Props {
  fieldName: string;
  RangePicker: typeof TimeRangePicker | typeof DateRangePicker;
}

const ListInputView: React.FC<Props> = ({ fieldName, RangePicker }) => {
  const [field] = useField({ name: fieldName });

  const handleAddClick = () => {
    const newValue = R.concat(field.value, [[]]);

    field.onChange({
      target: {
        name: fieldName,
        value: newValue,
      }
    })
  };

  const handleRemoveClick = (value: [string, string]) => {
    const newValue = R.without([value], field.value);

    field.onChange({
      target: {
        name: fieldName,
        value: newValue,
      }
    })
  };

  const handleChange = (value: [any, any] | null, name: string) => (
    field.onChange({
      target: {
        name,
        value,
      },
    })
  );

  const isTimePicker = RangePicker === TimeRangePicker;
  const timePickerProps = isTimePicker && { picker: 'time', format: 'HH:mm' };
  const toElement = (value: [string, string], index: number) => {
    const name = `${fieldName}[${index}]`;

    const picker = (
      // @ts-ignore due to ts compiler limits
      <RangePicker<Dayjs>
        name={name}
        value={[
          dayjs(field.value[index][0]),
          dayjs(field.value[index][1]),
        ]}
        allowClear={false}
        onChange={(value: any) => handleChange(value, name)}
        {...timePickerProps}
      />
    );

    return (
      <PickerContainer key={index}>
        {picker}
        <MinusCircleOutlined
          className="dynamic-delete-button"
          onClick={() => handleRemoveClick(value)}
        />
      </PickerContainer>
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
          <PlusOutlined /> Dodaj przedział
        </Button>
      </Form.Item>
    </Container>
  )
};

export default ListInputView;
