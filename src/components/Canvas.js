// Add import statements
import { useDispatch, useSelector } from 'react-redux';
import {
  startCreatingRelationship,
  updateCreatingRelationship,
  finishCreatingRelationship,
  cancelCreatingRelationship,
} from '../redux/slices/relationshipsSlice';

const Canvas = () => {
  const dispatch = useDispatch();
  const entities = useSelector(state => state.entities);
  const relationships = useSelector(state => state.relationships.relationships);
  const creating = useSelector(state => state.relationships.creating);

  const handleMouseMove = e => {
    if (creating) {
      const stage = e.target.getStage();
      const pointerPosition = stage.getPointerPosition();
      dispatch(updateCreatingRelationship(pointerPosition));
    }
  };

  const handleMouseUp = e => {
    if (creating) {
      const stage = e.target.getStage();
      const pointerPosition = stage.getPointerPosition();
      // Determine if pointer is over another entity
      // If so, dispatch finishCreatingRelationship with endEntityId
      // Else, cancel
      // This requires hit detection logic
    }
  };

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <Layer>
        {/* Existing Relationships and Entities */}
        {relationships.map(rel => (
          <Relationship key={rel.id} data={rel} />
        ))}
        {entities.map(entity => (
          <Entity key={entity.id} data={entity} />
        ))}
        {/* Temporary Relationship Line */}
        {creating && (
          <Line
            points={[
              startEntityPosition.x,
              startEntityPosition.y,
              creating.currentPosition.x,
              creating.currentPosition.y,
            ]}
            stroke="#f00"
            strokeWidth={2}
            dash={[4, 4]}
          />
        )}
      </Layer>
    </Stage>
  );
};
