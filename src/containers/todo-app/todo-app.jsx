import { nanoid } from 'nanoid';
import TaskForm from '../../components/task-form/task-form';

const TodoApp = () => {

    const handleNewTask = (data) => {
        const newTask = { 
            ...data,
            id: nanoid(),
            isFinish: false
        };

        console.log(newTask);
    }

    return (
        <main>
            <TaskForm onNewTask={handleNewTask} />

            Liste taches !!!  
        </main>
    );
}

export default TodoApp;