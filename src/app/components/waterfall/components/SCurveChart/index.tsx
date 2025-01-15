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
import { theme } from '@/app/style/customThemeProvider';

const SCurveChart = () => {
    
  const data = mocks.map((task) => ({
    name: task.Resumo,
    planned: dayjs(task.delivery_date).unix(),
    actual: dayjs(task.actual_delivery_date).unix(),
  }));

  data.sort((a, b) => a.planned - b.planned);

  return (
    <div style={{ width: 1000, height: 500, background: theme.colors.tableGray, padding: 5, borderRadius: 8, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h2 style={{ textAlign: 'center', fontSize: '1.5rem', color: '#000' }}>Exemplo de Gráfico de Curva em S</h2>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
          style={{ padding: 15 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12, fill: '#000' }}
          />
          <YAxis
            domain={['auto', 'auto']}
            tickFormatter={(value: number) =>
              dayjs.unix(value).format('DD/MM/YYYY')
            }
            tick={{ fontSize: 12, fill: '#000' }}
          />
          <Tooltip
            formatter={(value: number) =>
              dayjs.unix(value).format('DD/MM/YYYY')
            }
            contentStyle={{ color: '#000', backgroundColor: '#333' }}
            labelStyle={{ color: '#000' }}
          />
          <Legend wrapperStyle={{ color: '#000' }} />
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
