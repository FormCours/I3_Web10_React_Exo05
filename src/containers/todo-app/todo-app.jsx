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

    const handleDeleteTask = (id) => {
        // Mise à jours de la liste des taches
        // -> Via le filter, on obtient la copie de la liste sans l'element ciblé
        setTasks(taskElements => taskElements.filter(t => t.id !== id));

        // ↓ Ecriture de la meme ligne, sans les fonctions lamdba « A l'ancienne ;) »
        // setTasks(function (taskElements) { return taskElements.filter(function (t) { return t.id !== id; }); });  
    };

    return (
        <main>
            <TaskForm onNewTask={handleNewTask} />

            <TaskList datas={tasks}
                onDeleteTask={handleDeleteTask} />
        </main>
    );
};

export default TodoApp;