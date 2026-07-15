import { Pie, PieChart, PieSectorShapeProps, Sector, Tooltip, TooltipIndex } from 'recharts';
import { PieType } from '../../types';

const COLORS = ['var(--red)', 'var(--grey)', 'var(--redhover)', 'var(--line)'];

const PieGradient = (props: PieSectorShapeProps) => {
  return (
    <>
      <defs>
        <radialGradient
          id={`fillGradient${props.index}`}
          cx={props.cx}
          cy={props.cy}
          r={props.outerRadius}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor={COLORS[props.index % COLORS.length]} stopOpacity={0} />
          <stop offset="100%" stopColor={COLORS[props.index % COLORS.length]} stopOpacity={0.8} />
        </radialGradient>
        <radialGradient
          id={`borderGradient${props.index}`}
          cx={(typeof props.width === 'number' ? props.width : 0) / 2}
          cy={(typeof props.height === 'number' ? props.height : 0) / 2}
        >
          <stop offset="0%" stopColor={COLORS[props.index % COLORS.length]} stopOpacity={0} />
          <stop offset="100%" stopColor={COLORS[props.index % COLORS.length]} stopOpacity={0.8} />
        </radialGradient>
        <clipPath id={`clipPath${props.index}`}>
          <Sector {...props} />
        </clipPath>
      </defs>
      <Sector
        {...props}
        clipPath={`url(#clipPath${props.index})`}
        fill={`url(#fillGradient${props.index})`}
        stroke={`url(#borderGradient${props.index})`}
        strokeWidth={props.isActive ? '100%' : 0}
      />
    </>
  );
};




export default function PieWithGradient({
  data,
  isAnimationActive = true,
  defaultIndex,
}: {
  data:PieType[]
  isAnimationActive?: boolean;
  defaultIndex?: TooltipIndex;
}) {
  return (
      <PieChart style={{ width: '100%', maxWidth: '100%', maxHeight: '500px', aspectRatio: 1 }}  responsive className="">
        <Pie data={data} dataKey="x" isAnimationActive={isAnimationActive} shape={PieGradient} innerRadius="30%" outerRadius='45%'  label={({payload}) => `${payload.name} (${payload.x}%)`}  labelLine={true}/>
        <Tooltip defaultIndex={defaultIndex} />
      </PieChart>
  );
}
