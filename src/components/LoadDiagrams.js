// src/components/LoadDiagrams.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDiagrams } from '../redux/slices/diagramsSlice';

const LoadDiagrams = () => {
  const dispatch = useDispatch();
  const diagrams = useSelector(state => state.diagrams.items);

  useEffect(() => {
    dispatch(fetchDiagrams());
  }, [dispatch]);

  return (
    <div>
      <h2>Your Diagrams</h2>
      <ul>
        {diagrams.map(diag => (
          <li key={diag.id}>{diag.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default LoadDiagrams;
