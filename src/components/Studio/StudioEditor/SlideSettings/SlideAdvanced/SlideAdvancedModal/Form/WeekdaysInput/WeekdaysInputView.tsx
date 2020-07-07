import React from 'react';
import { useField } from 'formik';
import * as R from 'ramda';
import { WeekdayElement, WeekdaysWrapper } from './WeekdaysInputStyle';
import { FIELD_NAME, getHumanWeekname } from './WeekdaysInputUtils';

const WeekdaysInput: React.FC = () => {
  const [field] = useField<number[]>({ name: FIELD_NAME });
  const allWeekdays = [0, 1, 2, 3, 4, 5, 6];
  const currentWeekdays = field.value;

  const isActive = (dayNumber: number) => (
    R.includes(dayNumber, currentWeekdays)
  );

  const handleClick = (e: any, dayNumber: number) => {
    e.preventDefault();
    const dayActive = isActive(dayNumber);
    const newValue = R.cond<boolean, number[]>([
      [R.and(true), R.always(R.without([dayNumber], currentWeekdays))],
      [R.T, R.always(R.concat(currentWeekdays, [dayNumber]))],
    ])(dayActive);

    field.onChange({
      target: {
        name: FIELD_NAME,
        value: newValue,
      }
    })
  };

  const toElement = (dayNumber: number) => (
    <WeekdayElement
      key={dayNumber}
      isActive={isActive(dayNumber)}
      onClick={e => handleClick(e, dayNumber)}
    >
      {getHumanWeekname(dayNumber)}
    </WeekdayElement>
  );
  const elementsList = R.map(toElement, allWeekdays);

  return (
    <WeekdaysWrapper>
      {elementsList}
    </WeekdaysWrapper>
  );
};

export default WeekdaysInput;
