import { PieTooltipProps } from '@nivo/pie';

export interface PizzaChartProps {
  data: PizzaChartDataEntry[];
  margin?: object;
  colors?: string[];
  innerRadius?: number;
  enableArcLinkLabels?: boolean;
  enableArcLabels?: boolean;
  animate?: boolean;
  isInteractive?: boolean;
  tooltip?: React.FC<PieTooltipProps<PizzaChartDataEntry>>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  legends?: any[];
  valueFormat?: (value: number) => string
}

export interface PizzaChartDataEntry {
  // must be unique for the whole dataset
  id: string | number,
  value: number,
  label?: string,
}