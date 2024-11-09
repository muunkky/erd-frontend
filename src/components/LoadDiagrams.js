// src/components/LoadDiagrams.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDiagrams } from '../redux/slices/diagramsSlice';

const LoadDiagrams = () => {
  const dispatch = useDispatch();
  const diagrams = useSelector(state => state.diagrams.items);
  const status = useSelector(state => state.diagrams.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchDiagrams());
    }
  }, [status, dispatch]);

  return (
    <div>
      <h2>Your Diagrams</h2>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && (
        <ul>
          {diagrams.map(diag => (
            <li key={diag.id}>{diag.name}</li>
          ))}
        </ul>
      )}
      {status === 'failed' && <p>Error loading diagrams.</p>}
    </div>
  );
};

export default LoadDiagrams;
