import React from 'react';
import Line from './index';

const LINE_STYLE = '2px dashed blue';

// Octogon
const points = [
  { x: 60, y: 0 },
  { x: 120, y: 0 },
  { x: 180, y: 60 },
  { x: 180, y: 120 },
  { x: 120, y: 180 },
  { x: 60, y: 180 },
  { x: 0, y: 120 },
  { x: 0, y: 60 },
  { x: 60, y: 0 },
].reduce((lines, p, index, arr) => {
  if (index === 0) return lines;
  return lines.concat({
    x1: arr[index-1].x,
    y1: arr[index-1].y,
    x2: p.x,
    y2: p.y
  });
}, []);

export default class App extends React.Component {
  render() {
    return (
      <div>
      {
        points.map((p, i) => <Line
          key={i}
          from={{x: p.x1, y: p.y1}}
          to={{x: p.x2, y: p.y2}}
          style={LINE_STYLE}
        />)
      }
      </div>
    );
  }
}
