import React from 'react';
import { Input, InputNumber, Select } from 'antd';

import { SlideTypes, useUpdateSlideMutation } from 'types';
import { BasicSlidePartsFragment } from 'generated/graphql';
import { Addon } from './SlideTransitionStyle';
import { handleError } from '../../../../../utils';

const { Option } = Select;

interface Props {
  slide: BasicSlidePartsFragment;
}

const SlideTransition: React.FC<Props> = ({ slide }: Props) => {
  const [updateSlide] = useUpdateSlideMutation();
  const transition: SlideTypes.SlideTransition = slide.transition;

  const handleChange = async (eventValue: any, field: string) => {
    const newValue = {
      ...transition,
      [field]: eventValue,
    };

    try {
      await updateSlide({
        variables: {
          id: parseInt(slide.id, 10),
          values: {
            transition: newValue,
          },
        },
        optimisticResponse: {
          __typename: 'Mutation',
          updateSlide: {
            ...slide,
            transition: newValue,
            __typename: 'Slide',
          }
        }
      })
    } catch (e) {
      handleError(e);
    }
  };

  return (
    <Input.Group
      size="large"
      style={{ width: 'auto' }}
      compact
    >
      <Select<SlideTypes.SlideTransitionType>
        size="large"
        value={transition.type}
        onChange={v => handleChange(v, 'type')}
      >
        <Option value="none">Brak animacji</Option>
        <Option value="across">Przesunięcie</Option>
        <Option value="acrossOverlay">Nałożenie</Option>
      </Select>
      {transition.type !== 'none' && (
        <>
          <InputNumber
            name="durationMilliseconds"
            type="number"
            size="large"
            step={100}
            value={transition.durationMilliseconds}
            style={{ width: '6rem' }}
            onChange={v => handleChange(v, 'durationMilliseconds')}
            formNoValidate
          />
          <Addon className="ant-input-group-addon">ms</Addon>
        </>
      )}
    </Input.Group>
  );
};

export default SlideTransition;
