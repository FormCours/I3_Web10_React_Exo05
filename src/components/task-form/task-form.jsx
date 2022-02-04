import style from './task-form.module.css';
import classNames from 'classnames';

const TaskForm = (props) => {

    return (<>
        <h2>Nouvelle taches</h2>
        <form className={style.formTask}>
            <div className={classNames(style.inputUser, style.inputName)}>
                <label htmlFor='nom'>Nom</label>
                <input type='text' id='nom'/>
            </div>
            <div className={classNames(style.inputUser, style.inputDesc)}>
                <label htmlFor='desc'>Description</label>
                <textarea id='desc' />
            </div>
            <div className={classNames(style.inputUser, style.inputPrio)}>
                <label htmlFor='prio'>Priorité</label>
                <select id='prio'>
                    <option value='high'>Urgent</option>
                    <option value='normal'>Normal</option>
                    <option value='low'>Basse</option>
                </select>
            </div>
            <div className={style.actionSubmit}> 
                <button type='submit'>Ajouter</button>
            </div>
        </form>
    </>)
}