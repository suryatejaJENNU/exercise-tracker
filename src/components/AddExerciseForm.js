import React, { useState } from 'react';
import './AddExerciseForm.css';

const AddExerciseForm = ({ onAdd, onClose }) => {
  const [newExercise, setNewExercise] = useState({ name: '', category: '', focus: '', createdBy: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewExercise({ ...newExercise, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(newExercise);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="form-group">
  <label for="name" class="label">Exercise Name:</label>
  <input type="text" id="name" name="name" value={newExercise.name} onChange={handleChange} required />
</div>
<div class="form-group">
  <label for="category" class="label">Category:</label>
  <input type="text" id="category" name="category" value={newExercise.category} onChange={handleChange} required />
</div>
<div class="form-group">
  <label for="focus" class="label">Focus:</label>
  <input type="text" id="focus" name="focus" value={newExercise.focus} onChange={handleChange} required />
</div>
<div class="form-group">
  <label for="createdBy" class="label">Created By:</label>
  <input type="text" id="createdBy" name="createdBy" value={newExercise.createdBy} onChange={handleChange} required />
</div>

      <button type="submit">Add Exercise</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
};

export default AddExerciseForm;
