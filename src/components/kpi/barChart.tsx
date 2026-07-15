import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { genreBar } from '../../types';

interface SimpleBarChartProps {
  data: genreBar[]
}



const SimpleBarChart = ({data}:SimpleBarChartProps) => {
  return (
      <BarChart
        style={{ width: '100%', maxWidth: '100%', maxHeight: '500px', aspectRatio: 1.618, pointerEvents: 'none' }}
        responsive
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3" />
        <XAxis dataKey="name" />
        <YAxis width="auto" />
        <Tooltip />
        <Legend />
        <Bar dataKey="vues" name="Nombre de vues" fill="var(--red)" radius={[10, 10, 0, 0]} />
      </BarChart>
  );
};

export default SimpleBarChart;
