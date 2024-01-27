import React, {useState} from 'react';
import {arrayMoveImmutable} from 'array-move';

export default function ToDoList() {

    const [tasks, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    }

    const addTask = () => {
        setTask(t => ([...t, newTask]));
    }

    const removeTask = (index) => {
        setTask(tasks.filter((_,i) => i !== index));
    }

    const moveTaskUp = (index) => {
        setTask(t => arrayMoveImmutable(t, index, index - 1));
    }

    const moveTaskDown = (index) => {
        setTask(t => arrayMoveImmutable(t, index, index + 1));
    }

    return (
        <div className='to-do-list'>
            <h1>To Do List</h1>
            
            <div className='input-container'>
                <input type="text"  
                        placeholder='Enter a task...'
                        value={newTask}
                        onChange={handleInputChange}/>
                <button className="add-button" 
                        onClick={addTask}>Add</button>
            </div>

            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button 
                            className='remove-button'
                            onClick={() => removeTask(index)}>
                            Remove
                        </button>
                        <button 
                            className='move-button'
                            onClick={() => moveTaskUp(index)}>
                            👆
                        </button>
                        <button
                            className='move-button'
                            onClick={() => moveTaskDown(index)}>
                            👇
                        </button>
                    </li>
                )}
            </ol>
        </div>
  );
}
