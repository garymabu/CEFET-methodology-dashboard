import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import dayjs from 'dayjs';
import mocks from '../../mock/waterfall-mock.json';

const SCurveChart = () => {
    
  const data = mocks.map((task) => ({
    name: task.Resumo,
    planned: dayjs(task.delivery_date).unix(),
    actual: dayjs(task.actual_delivery_date).unix(),
  }));

  data.sort((a, b) => a.planned - b.planned);

  return (
    <div style={{ width: 1000, height: 500, background: '#5e5587', padding: 5, borderRadius: 8, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h2 style={{ textAlign: 'center', fontSize: '1.5rem' }}>Exemplo de Gráfico de Curva em S</h2>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
          style={{ padding: 15 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12, fill: '#FFF' }}
          />
          <YAxis
            domain={['auto', 'auto']}
            tickFormatter={(value: number) =>
              dayjs.unix(value).format('DD/MM/YYYY')
            }
            tick={{ fontSize: 12, fill: '#FFF' }}
          />
          <Tooltip
            formatter={(value: number) =>
              dayjs.unix(value).format('DD/MM/YYYY')
            }
            contentStyle={{ color: '#FFF', backgroundColor: '#333' }}
            labelStyle={{ color: '#FFF' }}
          />
          <Legend wrapperStyle={{ color: '#FFF' }} />
          <Line
            type="monotone"
            dataKey="planned"
            stroke="#8884d8"
            strokeWidth={2}
            dot={{ r: 4 }}
            name="Planejado"
          />
          <Line
            type="monotone"
            dataKey="actual"
            stroke="#82ca9d"
            strokeWidth={2}
            dot={{ r: 4 }}
            name="Finalizado"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SCurveChart;
