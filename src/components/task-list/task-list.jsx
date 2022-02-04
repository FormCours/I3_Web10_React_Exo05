import PropTypes from 'prop-types';
import TaskListItem from './task-list-item';

const TaskList = (props) => {

    // Utilisation de la fonction "map" pour transformer l'array JS en array de JSX
    const tasksJSX = props.datas.map(
        // Utilisation du composant "item" précédement créé.
        task => <TaskListItem {...task} key={task.id} />
    );

    return (
        <div>
            <h2>La liste des taches</h2>
            <div>
                {tasksJSX}
            </div>
        </div>
    );
}

TaskList.defaultProps = {
    datas: []
};

TaskList.propTypes = {
    datas: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
        // Permet de définir que l'array doit contenir au minimum l'id
    }))
}

export default TaskList;