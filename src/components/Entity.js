// src/components/Entity.js
import React, { useState } from 'react';
import { Rect, Text, Group } from 'react-konva';
import { useDispatch } from 'react-redux';
import { updateEntity } from '../redux/slices/entitiesSlice';

const Entity = ({ data }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(data.name);

  const handleDragEnd = e => {
    dispatch(updateEntity({ id: data.id, position: { x: e.target.x(), y: e.target.y() } }));
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNameBlur = () => {
    dispatch(updateEntity({ id: data.id, name }));
    setIsEditing(false);
  };

  return (
    <Group
      x={data.position.x}
      y={data.position.y}
      draggable
      onDragEnd={handleDragEnd}
      onDblClick={handleDoubleClick}
    >
      <Rect width={150} height={50} fill="#f0f0f0" stroke="#000" strokeWidth={1} cornerRadius={5} />
      {isEditing ? (
        <textarea
          value={name}
          onChange={handleNameChange}
          onBlur={handleNameBlur}
          style={{
            position: 'absolute',
            top: data.position.y,
            left: data.position.x,
            width: '140px',
            height: '40px',
            fontSize: '16px',
          }}
          autoFocus
        />
      ) : (
        <Text text={data.name} fontSize={16} padding={10} />
      )}
    </Group>
  );
};

export default Entity;
