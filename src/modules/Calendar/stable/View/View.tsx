import React from 'react';
import * as R from 'ramda';

import { ConfigType } from '../CalendarTypes';
import dayjs from 'dayjs';
import { useCalendarUtilsStableQuery } from 'generated/graphql';
import {
  Container,
  Card,
  List,
  CardContainer,
  CardDay,
  CardMonth,
  Holiday,
  ListContainer,
  NameDay,
  ListHeaderElement, ListElement
} from './Style';
import { dayNames, monthNames } from './Utils';

interface Props {
  config: ConfigType;
}

const View: React.FC<Props> = ({ config }: Props) => {
  const { showHoliday, showDayNames } = config;
  const { data } = useCalendarUtilsStableQuery();
  const todayHoliday = data?.calendarTodayHoliday;
  const todayDayNames = data?.calendarTodayDayNames;
  const todayDay = dayjs().date();
  const todayMonthName = monthNames[dayjs().month()];

  return (
    <Container>
      <CardContainer centered={!showHoliday}>
        <Card>
          <CardDay>
            {todayDay}
          </CardDay>
          <CardMonth>
            {todayMonthName}
          </CardMonth>
        </Card>
        {showHoliday && todayHoliday && (
          <Holiday>
            {todayHoliday}
          </Holiday>
        )}
      </CardContainer>
      <ListContainer centered={!showDayNames}>
        <DaysList/>
        {showDayNames && todayDayNames && (
          <NameDay>
            Imieniny:&nbsp;
            <span>{todayDayNames}</span>
          </NameDay>
        )}
      </ListContainer>
    </Container>
  )
};

const DaysList: React.FC = () => {
  const todayDay = dayjs().date();

  const toListHeaderElement = (dayName: string) => (
    <ListHeaderElement key={dayName}>
      {dayName}
    </ListHeaderElement>
  );
  const headerElementsList = R.map(toListHeaderElement, dayNames);

  const toDummyElement = (dayNumber: number) => (
    <div key={`dummy-${dayNumber}`}/>
  );
  const firstMonthDay = dayjs().startOf('month').day();
  const dummyElementsList = R.map(toDummyElement, R.times(R.identity, firstMonthDay - 1));

  const toListElement = (dayNumber: number) => (
    <ListElement
      key={dayNumber}
      highlighted={dayNumber + 1 === todayDay}
      red={(dayNumber + firstMonthDay) % 7 === 0}
    >
      {dayNumber + 1}
    </ListElement>
  );
  const daysInTodayMonth = dayjs().daysInMonth();
  const elementsList = R.map(toListElement, R.times(R.identity, daysInTodayMonth));

  return (
    <List>
      {headerElementsList}
      {dummyElementsList}
      {elementsList}
    </List>
  )
};

export default View;
