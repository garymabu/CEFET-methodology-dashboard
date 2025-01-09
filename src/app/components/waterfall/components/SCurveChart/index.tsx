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
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12 }}
          />
          <YAxis
            domain={['auto', 'auto']}
            tickFormatter={(value: number) =>
              dayjs.unix(value).format('DD/MM/YYYY')
            }
          />
          <Tooltip
            formatter={(value: number) =>
              dayjs.unix(value).format('DD/MM/YYYY')
            }
          />
          <Legend />
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
