/* import GenerateLine from '../common/Chart/Line';
import mockData from './mock/waterfall-mock.json';

export default function Waterfall() {
  const prepareChartData = (data: typeof mockData) => {
    const filteredData = data.filter(
      (item) => item.delivery_date && item.Pontuacao
    );

    const sortedData = filteredData.sort(
      (a, b) =>
        new Date(a.delivery_date).getTime() - new Date(b.delivery_date).getTime()
    );

    let cumulativeScoreReal = 0;
    let cumulativeScorePlanned = 0;

    return sortedData.map((item) => {
      cumulativeScoreReal += item.Pontuacao ?? 0;
      cumulativeScorePlanned += item.Pontuacao ?? 0;
      return {
        real: {
          x: new Date(item.actual_delivery_date),
          y: cumulativeScoreReal,
          label: item.Resumo,
        },
        planned: {
          x: new Date(item.delivery_date),
          y: cumulativeScorePlanned,
          label: item.Resumo,
        },
      };
    });
  };

  const chartData = prepareChartData(mockData);

  const yScale = (value: number) => {
    const maxY = Math.max(
      ...chartData.map((d) => d.real.y),
      ...chartData.map((d) => d.planned.y)
    ) + 10;
    return (value / maxY) * 300;
  };

  const barWidth = 60;
  const spacing = 20;

  const LineReal = GenerateLine({
    data: chartData.map((d) => d.real.y),
    color: 'blue',
    key: 'real-line',
  });

  const LinePlanned = GenerateLine({
    data: chartData.map((d) => d.planned.y),
    color: 'green',
    key: 'planned-line',
  });

  return (
    <div style={{ width: 1000, backgroundColor: '#333', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h2 style={{ fontSize: 30, fontWeight: 'bold', color: '#FFF'}}>Waterfall Progress Chart</h2>
      <svg width={chartData.length * (barWidth + spacing)} height={400}>
        <LineReal bars={chartData.map((d, i) => ({
          key: `real-bar-${i}`,
          index: i,
          data: {
            id: `real-bar-${i}`,
            value: d.real.y,
            formattedValue: d.real.y.toString(),
            hidden: false,
            index: i,
            indexValue: `real-bar-${i}`,
            data: {
              id: `real-bar-${i}`,
              value: d.real.y,
              formattedValue: d.real.y.toString(),
              hidden: false,
              x: d.real.x,
              y: d.real.y,
              label: d.real.label,
              index: i,
              indexValue: `real-bar-${i}`,
            },
          },
          x: i * (barWidth + spacing),
          y: yScale(d.real.y),
          width: barWidth,
          height: 400 - yScale(d.real.y),
          absX: i * (barWidth + spacing),
          absY: yScale(d.real.y),
          color: 'blue',
          label: d.real.label,
        }))} yScale={yScale} />

        <LinePlanned bars={chartData.map((d, i) => ({
          key: `planned-bar-${i}`,
          index: i,
          data: {
            id: `planned-bar-${i}`,
            value: d.planned.y,
            formattedValue: d.planned.y.toString(),
            hidden: false,
            index: i,
            indexValue: `planned-bar-${i}`,
            data: {
              id: `planned-bar-${i}`,
              value: d.planned.y,
              formattedValue: d.planned.y.toString(),
              hidden: false,
              x: d.planned.x,
              y: d.planned.y,
              label: d.planned.label,
              index: i,
              indexValue: `planned-bar-${i}`,
            },
          },
          x: i * (barWidth + spacing),
          y: yScale(d.planned.y),
          width: barWidth,
          height: 400 - yScale(d.planned.y),
          absX: i * (barWidth + spacing),
          absY: yScale(d.planned.y),
          color: 'green',
          label: d.planned.label,
        }))} yScale={yScale} />

        {chartData.map((point, i) => (
          <g key={`group-${i}`}>
            <circle
              cx={i * (barWidth + spacing) + barWidth / 2}
              cy={yScale(point.real.y)}
              r={6}
              fill="blue"
              stroke="white"
              style={{ cursor: "pointer" }}
            >
              <title>{`Real: ${point.real.label}`}</title>
            </circle>

            <circle
              cx={i * (barWidth + spacing) + barWidth / 2}
              cy={yScale(point.planned.y)}
              r={6}
              fill="green"
              stroke="white"
              style={{ cursor: "pointer" }}
            >
              <title>{`Planned: ${point.planned.label}`}</title>
            </circle>

            <text
              x={i * (barWidth + spacing) + barWidth / 2 + 10}
              y={yScale(point.real.y)}
              textAnchor="start"
              fontSize="12"
              fill="white"
              fontWeight="bold"
            >
              {point.real.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
} */

import GanttGraph from './components/GanttGraph';
import BarGraph from './components/BarGraph';
import SCurveChart from './components/SCurveChart';

export default function Waterfall() {
  return (
    <>
      <GanttGraph />
      <SCurveChart />
    </>
  );
}