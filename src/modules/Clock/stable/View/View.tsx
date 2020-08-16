import React from 'react';
import * as R from 'ramda';

import { ConfigType } from '../ClockTypes';
import dayjs from 'dayjs';
import {
  Container,
  ClockDigitalContainer,
  ClockDigitalDate,
  ClockDigitalInner,
  ClockDigitalText,
  ClockFace,
  ClockFaceContainer,
  ClockHandMinute,
  ClockHandHour,
} from './Style';
import { monthNames } from './Utils';

interface Props {
  config: ConfigType;
}

const View: React.FC<Props> = ({ config }: Props) => {
  const { showDate } = config;
  const todayDay = dayjs().date();
  const todayMonthName = monthNames[dayjs().month()];

  return (
    <Container>
      <ClockFaceContainer>
        <Clock/>
      </ClockFaceContainer>
      <ClockDigitalContainer>
        <ClockDigitalInner>
          <ClockText/>
          {showDate && (
            <ClockDigitalDate>
              {todayDay}&nbsp;{todayMonthName}
            </ClockDigitalDate>
          )}
        </ClockDigitalInner>
      </ClockDigitalContainer>
    </Container>
  )
};

const ClockText = () => {
  const [time, setTime] = React.useState<string>(
    dayjs().format('HH:mm:ss'),
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      const timeNow = dayjs().format('HH:mm:ss');
      setTime(timeNow);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ClockDigitalText>
      {time}
    </ClockDigitalText>
  );
};

export const Clock = () => {
  const [{ hour, minute }, setHourMinute] = React.useState<{ hour: number; minute: number; }>({
    hour: dayjs().hour()  % 12,
    minute: dayjs().minute(),
  });
  const hourHandRotate = (hour / 12) * 360;
  const minuteHandRotate = (minute / 60) * 360;

  React.useEffect(() => {
    const interval = setInterval(() => {
      setHourMinute({
        hour: dayjs().hour() % 12,
        minute: dayjs().minute(),
      })
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ClockFace>
      <ClockHandHour rotate={hourHandRotate}/>
      <ClockHandMinute rotate={minuteHandRotate}/>
    </ClockFace>
  )
};

export default View;
