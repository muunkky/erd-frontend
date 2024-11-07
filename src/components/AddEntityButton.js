// src/components/AddEntityButton.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addEntity } from '../redux/slices/entitiesSlice';
import { v4 as uuidv4 } from 'uuid';

const AddEntityButton = () => {
  const dispatch = useDispatch();

  const handleAddEntity = () => {
    const newEntity = {
      id: uuidv4(),
      name: 'New Entity',
      properties: [],
      position: { x: 100, y: 100 },
    };
    dispatch(addEntity(newEntity));
  };

  return <button onClick={handleAddEntity}>Add Entity</button>;
};

export default AddEntityButton;
