import PropTypes from 'prop-types';

const TaskListItem = (props) => {

    return (
        <div>
            <div>
                <h3>Nom...</h3>
                <p>Description...</p>
            </div>
            <div>
                <button>Terminer</button>
                <button>Supprimer</button>
            </div>
        </div>
    )
}

TaskListItem.defaultProps = {
    onFinish: () => {},
    onDelete: () => {}
}

TaskListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    isFinish: PropTypes.bool.isRequired,
    onFinish: PropTypes.func,
    onDelete: PropTypes.func
}

export default TaskListItem;