import { BarChart } from "@/app/components/common/Chart/BarChart";
import mockData from '../../mock/waterfall-mock.json';
import GenerateLine from "@/app/components/common/Chart/Line";
import { scaleLinear } from 'd3-scale';

interface SCurveProps {
    data: Array<{
        Resumo: string;
        Pontuacao: number;
    }>;
}

const BarGraph = ({ data }: SCurveProps) => {

    /* const processWaterfallData = (data: typeof mockData) => {
        let total = 0;
        return data
            .filter(item => item.delivery_date && item.actual_delivery_date) // Filtrar itens válidos
            .map((item, index) => {
                const increment = item.Pontuacao ? Math.min(item.Pontuacao * 10, 100) : 0; // Calcular incremento
                const start = total; // Valor do total antes de adicionar o incremento
                total += increment; // Atualizar o total acumulado com o incremento
                const end = total; // Valor do total após o incremento

                return {
                    name: item.Resumo || `Task ${index + 1}`, // Nome da tarefa
                    increment, // Incremento atual
                    start, // Valor inicial antes do incremento
                    end, // Valor final após o incremento
                };
            });
    };

    const waterfallData = processWaterfallData(mockData);
    console.log('Dados do Waterfall:', waterfallData);

    return (
        <>
            <div style={{ height: '500px', width: '100%' }}>
                <BarChart
                    data={waterfallData}
                    keys={['increment']}
                    indexBy="name"
                    layout="vertical"
                    groupMode="stacked"
                    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                    colors={{ scheme: 'set3' }}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Tarefas',
                        legendPosition: 'middle',
                        legendOffset: 32,
                    }}
                    animate={true}
                    layers={[
                        'grid',
                        'axes',
                        'bars',
                        (props) => {
                            const { bars } = props;
                            return bars.map((bar) => (
                                <rect
                                    key={bar.key}
                                    x={bar.x}
                                    y={bar.y}
                                    width={bar.width}
                                    height={bar.height}
                                    fill={bar.data.data.end > bar.data.data.start ? 'green' : 'red'}
                                />
                            ));
                        },
                    ]}
                    tooltip={(point) => (
                        <div style={{ background: '#fff', padding: '5px', border: '1px solid #ccc' }}>
                            <strong>{point.indexValue}</strong>
                            <br />
                            Incremento: {point.value}
                            <br />
                            Total acumulado: {point.data.end}
                        </div>
                    )}
                />
            </div>
        </>
    ); */
const plannedData: number[] = [];
  const actualData: number[] = [];

  let plannedTotal = 0;
  let actualTotal = 0;

  data.forEach((item) => {
    plannedTotal += item.Pontuacao;
    actualTotal += item.Pontuacao; // Ajuste se necessário para dados reais diferentes.

    plannedData.push(plannedTotal);
    actualData.push(actualTotal);
  });

  const yScale = scaleLinear()
    .domain([0, Math.max(...plannedData, ...actualData)])
    .range([300, 0]); // Altura do gráfico invertida para o eixo Y.

  const bars = plannedData.map((value, index) => ({
    key: `bar-${index}`,
    index,
    data: { value },
    x: index * 50 + 30, // Espaçamento entre os pontos.
    y: yScale(value) || 0,
    width: 40, // Largura fictícia para centralizar os pontos.
    height: 300 - (yScale(value) || 0),
    color: 'blue',
  }));

  const PlannedLine = GenerateLine({ data: plannedData, color: 'blue', key: 'planned' });
  const ActualLine = GenerateLine({ data: actualData, color: 'green', key: 'actual' });

  return (
    <svg width="100%" height="400">
      <line x1="30" y1="0" x2="30" y2="300" stroke="black" />
      <line x1="30" y1="300" x2={bars.length * 50 + 30} y2="300" stroke="black" />

      {/* <PlannedLine bars={bars} yScale={yScale} />
      <ActualLine bars={bars} yScale={yScale} /> */}

      {data.map((item, index) => (
        <text
          key={item.Resumo}
          x={bars[index].x}
          y="320"
          textAnchor="middle"
          fontSize="12"
        >
          {item.Resumo}
        </text>
      ))}
    </svg>
  );
};

export default BarGraph;