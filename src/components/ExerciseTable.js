import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import ExerciseForm from './ExerciseForm';
import AddExerciseForm from './AddExerciseForm';
import './ExerciseTable.css';

const ExerciseTable = () => {
  const [exercises, setExercises] = useState([
    { id: uuidv4(), name: 'Push-ups', category: 'Strength', focus: 'Upper body', createdBy: 'John Doe' },
    { id: uuidv4(), name: 'Running', category: 'Cardio', focus: 'Full body', createdBy: 'Jane Smith' },
    { id: uuidv4(), name: 'Squats', category: 'Strength', focus: 'Lower body', createdBy: 'Jack Johnson' },
    { id: uuidv4(), name: 'Cycling', category: 'Cardio', focus: 'Legs', createdBy: 'Emily Brown' },
    { id: uuidv4(), name: 'Pull-ups', category: 'Strength', focus: 'Back', createdBy: 'Michael Davis' },
    { id: uuidv4(), name: 'Swimming', category: 'Cardio', focus: 'Full body', createdBy: 'Sophia Wilson' },
    { id: uuidv4(), name: 'Plank', category: 'Strength', focus: 'Core', createdBy: 'Andrew Thompson' },
    { id: uuidv4(), name: 'Jumping Jacks', category: 'Cardio', focus: 'Full body', createdBy: 'Olivia Lee' },
    { id: uuidv4(), name: 'Bicep Curls', category: 'Strength', focus: 'Arms', createdBy: 'David Martinez' },
    { id: uuidv4(), name: 'Dumbbell Lunges', category: 'Strength', focus: 'Legs', createdBy: 'Ethan Lewis' },
    { id: uuidv4(), name: 'Pilates', category: 'Flexibility', focus: 'Core', createdBy: 'Madison Moore' }
  ]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleDelete = (id) => {
    setExercises(exercises.filter(exercise => exercise.id !== id));
  };

  const handleEdit = (id) => {
    const selected = exercises.find(exercise => exercise.id === id);
    setSelectedExercise(selected);
    setShowEditForm(true);
  };

  const handleSave = (editedExercise) => {
    const updatedExercises = exercises.map(exercise =>
      exercise.id === editedExercise.id ? editedExercise : exercise
    );
    setExercises(updatedExercises);
    setShowEditForm(false);
  };

  const handleAdd = (newExercise) => {
    const newExerciseWithId = { ...newExercise, id: uuidv4() };
    setExercises([newExerciseWithId, ...exercises]);
  };

  return (
    <div className="exercise-table-container">
      <button className="add-button" onClick={() => setShowAddForm(true)}>
        Add Exercise
      </button>
      {showAddForm && (
        <AddExerciseForm
          onAdd={handleAdd}
          onClose={() => setShowAddForm(false)}
        />
      )}
      {showEditForm && (
        <ExerciseForm
          exercise={selectedExercise}
          onSave={handleSave}
          onClose={() => setShowEditForm(false)}
        />
      )}
      <table className="exercise-table">
        <thead>
          <tr>
            <th>Exercise Name</th>
            <th>Category</th>
            <th>Focus</th>
            <th>Created by</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map(exercise => (
            <tr key={exercise.id}>
              <td>{exercise.name}</td>
              <td>{exercise.category}</td>
              <td>{exercise.focus}</td>
              <td>{exercise.createdBy}</td>
              <td>
                <button className="action-button  edit-button" onClick={() => handleEdit(exercise.id)}>
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className="action-button  delete-button" onClick={() => handleDelete(exercise.id)}>
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExerciseTable;
