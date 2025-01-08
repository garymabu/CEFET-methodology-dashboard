import { ComputedBarDatum } from '@nivo/bar';

export interface GenerateLineProps {
  data: number[];
  color: string;
  key: string;
}

export interface LineProps {
  bars: ComputedBarDatum<Record<string, unknown>>[],
  yScale: (value: number) => number | undefined,
}