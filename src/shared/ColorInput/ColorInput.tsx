import React from 'react';
import { Input } from 'formik-antd';
import { ColorResult } from 'react-color';
import { Picker } from './ColorInputStyle';
import { useField } from 'formik';
import { defaultColors } from './ColorInputUtils';

interface Props {
  name: string;
  colors?: string[];
  onAfterChange?(): void;
}

const ColorInput: React.FC<Props> = ({ onAfterChange, colors = defaultColors, ...props }: Props) => {
  const [showPicker, setShowPicker] = React.useState<boolean>(false);
  const [{ onChange, value, name }] = useField(props);

  const handleChange = (color: ColorResult) => {
    if (onChange) {
      onChange({
        target: {
          value: color.hex,
          name,
        }
      });
      setShowPicker(false);
      onAfterChange && onAfterChange();
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
    setShowPicker(!showPicker);
  };

  const style = {
    cursor: 'pointer',
  };

  return (
    <>
      <Input
        name={name}
        type="color"
        style={style}
        onClick={handleClick}
      />
      {showPicker && (
        <Picker
          triangle="top-right"
          width="206px"
          colors={colors}
          color={value}
          onChange={handleChange}
        />
      )}
    </>
  );
};

export default ColorInput;
