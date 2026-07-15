import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {SubscriberLine} from '../../types';

interface LineProp{
  data: SubscriberLine[]
}

export default function LineGraphicChart({data}: LineProp) {
  return (
    <LineChart
      style={{ width: '100%', maxWidth: '100%', height: '100%', maxHeight: '500px', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="var(--grey)" />
      <XAxis dataKey="date" stroke="var(--grey)" />
      <YAxis dataKey="abonnes" width="auto" stroke="var(--grey)" />
      <Tooltip
        cursor={{
          stroke: 'var(--red)',
        }}
        contentStyle={{
          backgroundColor: 'var(--color-surface-raised)',
          borderColor: 'var(--red)',
        }}
      />
      <Legend />
      <Line
        type="monotone"
        dataKey="abonnes"
        stroke="var(--red)"
        dot={{
          fill: 'var(--red)',
        }}
        activeDot={{ r: 8, stroke: 'var(--color-surface-base)' }}
      />
      {data[0].desabonnements &&
      <Line
        type="monotone"
        dataKey="desabonnements"
        stroke="var(--redhover)"
        dot={{
          fill: 'var(--redhover)',
        }}
        activeDot={{ r: 8, stroke: 'var(--color-surface-base)' }}
      />

      }

    </LineChart>
  );
}
