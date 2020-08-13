import React from 'react';
import * as R from 'ramda';

import { ConfigType } from '../CalendarTypes';
import dayjs from 'dayjs';

interface Props {
  config: ConfigType;
}

const View: React.FC<Props> = ({ config }: Props) => {

  fetch('/modules/calendar/name-days.txt')
    .then(r => r.text())
    .then(namesListText => namesListText.split('\n'))
    .then(namesList => {
      const todayDay = dayjs().dayOfYear();
      const leapYear = dayjs().year() % 4 === 0;
      const index = todayDay - 1 - (leapYear && todayDay > 1 ? 1 : 0);
      const todayNames = namesList[index];
      const todayNamesFormatted = todayNames.replace(/,/g, ', ');
      console.log(todayNamesFormatted);
    });

  fetch('/modules/calendar/holidays.txt')
    .then(r => r.text())
    .then(holidaysListText => holidaysListText.split('\n'))
    .then(holidaysList => {
      const todayDay = dayjs().dayOfYear();
      const leapYear = dayjs().year() % 4 === 0;
      const index = todayDay - 1 + (leapYear && todayDay > 1 ? 1 : 0);
      const todayholiday = holidaysList[index];
      console.log(todayholiday);
    });

  return (
    <div>

    </div>
  )

  /*return (
    <Container>
      <CardContainer>
        <Card>
          <CardDay>

          </CardDay>
          <CardMonth>

          </CardMonth>
        </Card>
        <Holiday>

        </Holiday>
      </CardContainer>
      <ListContainer>
        <List>

        </List>
        <NameDay>
          Imieniny:
        </NameDay>
      </ListContainer>
    </Container>
  )*/
};

export default View;
