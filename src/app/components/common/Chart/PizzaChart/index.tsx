import { ResponsivePie } from '@nivo/pie';
import { PizzaChartProps } from './interface';

const PizzaChart: React.FC<PizzaChartProps> = (props) => {
  const {
    data,
    margin,
    innerRadius,
    enableArcLinkLabels,
    enableArcLabels,
    animate,
    legends,
    colors,
    tooltip,
    valueFormat,
  } = props;

  return (
    <ResponsivePie
      data={data}
      margin={margin}
      innerRadius={innerRadius}
      colors={colors}
      enableArcLinkLabels={enableArcLinkLabels}
      animate={animate}
      enableArcLabels={enableArcLabels}
      legends={legends}
      tooltip={tooltip}
      valueFormat={valueFormat}
    />
  );
};

export default PizzaChart;
