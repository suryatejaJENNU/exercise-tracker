import React, { useState } from 'react';
import './AddExerciseForm.css';

const ExerciseForm = ({ exercise, onSave, onClose }) => {
  const [editedExercise, setEditedExercise] = useState(exercise);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedExercise({ ...editedExercise, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedExercise);
    onClose();
  };

  return (
    <div>
      <h2>Edit Exercise</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="name">Exercise Name:</label>
          <input type="text" id="name" name="name" value={editedExercise.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <input type="text" id="category" name="category" value={editedExercise.category} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="focus">Focus:</label>
          <input type="text" id="focus" name="focus" value={editedExercise.focus} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="createdBy">Created by:</label>
          <input type="text" id="createdBy" name="createdBy" value={editedExercise.createdBy} onChange={handleChange} />
        </div>
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default ExerciseForm;
