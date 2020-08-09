export type SlideTransitionType = 'none' | 'across' | 'acrossOverlay';

export interface SlideTransition {
  type: SlideTransitionType;
  durationMilliseconds: number;
}

export type SlideDates = SlideDate[];
export type SlideDate = [string, string] | [];

export type SlideTimes = SlideTime[];
export type SlideTime = [string, string];

export type SlideWeekdays = number[];
