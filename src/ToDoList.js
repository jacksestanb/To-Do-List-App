import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";

function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== '') {
            setTasks(t => [...t, newTask]);
            setNewTask('');
        }
    }

    function deleteTask(index) {

        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks);

    }

    function moveTaskUp(index) {
        
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {

        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }

    return (
        <div>
            <div className="to-do-list">
                <label for="To-do">Whats on your to-do list today!</label>
                <textarea
                    name="To-do"
                    id="To-do"
                    placeholder="type here..."
                    value={newTask}
                    onChange={handleInputChange}>
                </textarea>

                <button
                    className="add-button"
                    onClick={addTask}

                >Add Task</button>
            </div>

            <ol>
                {tasks.map((tasks, index) =>
                    <li key={index}>
                        <span className="text">{tasks}</span>
                        <button
                            className="delete-button"
                            onClick={() => deleteTask(index)}>
                            delete
                        </button>
                        <button
                            className="move-up-button"
                            onClick={() => moveTaskUp(index)}>
                            move up
                        </button>
                        <button
                            className="move-down-button"
                            onClick={() => moveTaskDown(index)}>
                            move down
                        </button>
                    </li>
                )}
            </ol>
        </div>
    )
}

export default ToDoList;