// src/components/Relationship.js
import React from 'react';
import { Line } from 'react-konva';

const Relationship = ({ data }) => {
  // Assuming data contains start and end positions
  const { startX, startY, endX, endY } = data;

  return (
    <Line
      points={[startX, startY, endX, endY]}
      stroke="#000"
      strokeWidth={2}
      lineCap="round"
      lineJoin="round"
    />
  );
};

export default Relationship;
