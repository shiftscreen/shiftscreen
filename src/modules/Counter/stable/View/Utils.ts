import * as R from 'ramda';
import dayjs from 'dayjs';

type TextType = 's' | 'm' | 'h' | 'd';

const textInflection: Record<TextType, [string, string, string]> = {
  s: ['sekunda', 'sekundy', 'sekund'],
  m: ['minuta', 'minuty', 'minut'],
  h: ['godzina', 'godziny', 'godzin'],
  d: ['dzień', 'dni', 'dni'],
};

const getInflectedText = (diff: number, type: TextType) => (
  R.cond<number, string>([
    [R.equals(1), R.always(textInflection[type][0])],
    [R.always(R.lte(4, diff)), R.always(textInflection[type][1])],
    [R.T, R.always(textInflection[type][2])],
  ])(diff)
);

const formatValue = (value: number): string => (
  value.toFixed(0)
);

export const getFormattedDiff = (diff: number): [string, string] => (
  R.cond<number, [string, string]>([
    [
      R.always(R.lt(diff, 60)),
      R.always([
        formatValue(diff),
        getInflectedText(Math.round(diff), 's'),
      ])],
    [
      R.always(R.lt(diff, 3600)),
      R.always([
        formatValue(R.divide(diff, 60)),
        getInflectedText(Math.round(R.divide(diff, 60)), 'm'),
      ])],
    [
      R.always(R.lt(diff, 86400)),
      R.always([
        formatValue(R.divide(diff, 3600)),
        getInflectedText(Math.round(R.divide(diff, 3600)), 'h'),
      ])],
    [
      R.T,
      R.always([
        formatValue(R.divide(diff, 86400)),
        getInflectedText(Math.round(R.divide(diff, 86400)), 'd'),
      ]),
    ],
  ])(diff)
);

export const countAndGetFormattedDiff = (dateValue: string): [string, string] => {
  const now = dayjs();
  const date = dayjs(dateValue);
  const diffSeconds = dayjs.duration(date.diff(now)).asSeconds();

  return getFormattedDiff(diffSeconds);
};
