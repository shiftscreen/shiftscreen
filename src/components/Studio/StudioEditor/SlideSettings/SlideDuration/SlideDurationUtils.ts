import dayjs from 'dayjs';

export const TIME_FORMAT = 'HH:mm:ss';

export const getDayjsDuration = (seconds: number): any => {
  const duration = dayjs.duration(seconds,'seconds').as('milliseconds');
  const formatted = dayjs.utc(duration).format(TIME_FORMAT);
  return dayjs(formatted, TIME_FORMAT);
};

export const getSecondsDuration = (duration: any): number => (
  duration.diff(
    dayjs().startOf('day'),'second',
  )
);
