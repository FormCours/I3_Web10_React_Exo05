import { nanoid } from 'nanoid';
import { useState } from 'react';
import TaskForm from '../../components/task-form/task-form';
import TaskList from '../../components/task-list/task-list';

const TodoApp = () => {

    // Définition d'un state pour contenir la liste des taches
    const [tasks, setTasks] = useState([]);

    const handleNewTask = (data) => {
        const newTask = {
            ...data,
            id: nanoid(),
            isFinish: false
        };

        // Ajouter la nouvelle tache dans la liste des taches
        setTasks(taskElements => [newTask, ...taskElements]);
    };

    return (
        <main>
            <TaskForm onNewTask={handleNewTask} />

            <TaskList datas={tasks} />
        </main>
    );
};

export default TodoApp;