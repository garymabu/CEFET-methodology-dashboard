import { line } from 'd3-shape';
import { GenerateLineProps, LineProps } from './interface';

/**
 * Generates a line component based on the data and color passed.
 * !ATTENTION: You should always pass data in the key order you want the line to be drawn.
 * 
 * @example
 * const data = [
 *   120,
 *   200,
 * ];
 * 
 * const Line = GenerateLine({
 *   data,
 *   color: 'red',
 *   key: 'automaticUpdates',
 * });
 */
const GenerateLine = ({data, color, key}: GenerateLineProps) => {
  const Line = ({ bars, yScale }: LineProps) => {
    const coordinates = data.map((item, i) => ({
      x: bars[i].x + (bars[i].width / 2),
      y: yScale(item) ?? 0,
    }));
    const linePath = line()(coordinates.map((coordinate) => [coordinate.x, coordinate.y]));

    return (
      <>
        <path
          d={linePath || undefined}
          fill="none"
          stroke={color}
          style={{ pointerEvents: 'none' }}
        />
        {
          coordinates.map(
            ({x, y}) => (
              <circle
                key={`${key}-${x}-${y}`}
                cx={x}
                cy={y}
                r={4}
                fill={color}
                stroke="white"
                style={{ pointerEvents: 'none' }}
              />
            )
          )
        }
      </>
    );
  };
  return Line;
};

export default GenerateLine;