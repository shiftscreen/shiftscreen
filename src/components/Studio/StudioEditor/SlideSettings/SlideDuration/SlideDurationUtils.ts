import moment from 'moment';

export const TIME_FORMAT = 'HH:mm:ss';

export const getMomentDuration = (seconds: number): moment.Moment => {
  const duration = moment.duration(seconds,'seconds').as('milliseconds');
  const formatted = moment.utc(duration).format(TIME_FORMAT);
  return moment(formatted, TIME_FORMAT);
};

export const getSecondsDuration = (duration: moment.Moment): number => (
  duration.diff(
    moment().startOf('day'),
    'seconds',
  )
);
