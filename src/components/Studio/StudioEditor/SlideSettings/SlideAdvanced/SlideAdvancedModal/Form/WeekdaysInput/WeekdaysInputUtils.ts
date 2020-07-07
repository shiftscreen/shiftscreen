export const FIELD_NAME = 'weekdays';

const HUMAN_WEEKNAMES = ['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'Sb', 'Nd'];

export const getHumanWeekname = (dayNumber: number): string => (
  HUMAN_WEEKNAMES[dayNumber]
);
