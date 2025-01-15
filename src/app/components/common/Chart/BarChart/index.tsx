import React from "react";
import {
  BarLayer,
  BarLegendProps,
  ComputedDatum,
  ResponsiveBar,
} from "@nivo/bar";
import { Tooltip } from "./interface";
import { AxisProps } from "@nivo/axes";

interface IBar {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  keys?: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  indexBy?: any;
  margin?: object;
  padding?: number;
  innerPadding?: number;
  layout?: "vertical" | "horizontal";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  colors?: any;
  legends?: BarLegendProps[];
  groupMode?: "grouped" | "stacked";
  animate?: boolean;

  tooltip?: Tooltip;
  enableLabel?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  axisBottom?: AxisProps<any> | null | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  label?: (val: ComputedDatum<any>) => string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  layers?: BarLayer<any>[];
  theme?: object;
}
export const BarChart: React.FC<IBar> = (props) => {
  const {
    data,
    keys,
    indexBy,
    margin,
    padding,
    innerPadding,
    layout,
    colors,
    legends,
    groupMode,
    animate,
    tooltip,
    axisBottom,
    enableLabel,
    label,
    layers,
    theme,
  } = props;

  return (
    <ResponsiveBar
      data={data}
      keys={keys}
      indexBy={indexBy}
      layout={layout}
      margin={margin}
      padding={padding}
      innerPadding={innerPadding}
      axisBottom={axisBottom}
      groupMode={groupMode}
      animate={animate}
      tooltip={tooltip}
      enableLabel={enableLabel}
      label={label}
      colors={colors}
      legends={legends}
      layers={layers}
      theme={theme}
    />
  );
};
