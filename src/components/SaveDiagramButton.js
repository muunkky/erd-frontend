// src/components/SaveDiagramButton.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewDiagram } from '../redux/slices/diagramsSlice';

const SaveDiagramButton = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const diagramData = useSelector(state => state); // Adjust as needed

  const handleSave = () => {
    if (name.trim() === '') {
      alert('Please enter a diagram name.');
      return;
    }
    dispatch(createNewDiagram({ name, data: diagramData }));
    setName('');
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Diagram Name"
      />
      <button onClick={handleSave}>Save Diagram</button>
    </div>
  );
};

export default SaveDiagramButton;
