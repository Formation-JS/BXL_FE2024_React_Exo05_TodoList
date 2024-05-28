import { useId } from 'react';
import style from './TaskForm.module.scss';

const TaskForm = () => {

    // Génération d'un id pour l'accessibilité du formulaire
    const formId = useId();

    // Rendu
    return (
        <form className={style['form-task']}>
            <label htmlFor={formId+'-name'}>Nom</label>
            <input id={formId+'-name'} type="text" />

            <label htmlFor={formId+'-desc'}>Description</label>
            <textarea id={formId+'-desc'} />

            <label htmlFor={formId+'-prio'}>Priorité</label>
            <select id={formId+'-prio'} >
                <option>Basse</option>
                <option>Normal</option>
                <option>Urgent</option>
            </select>

            <button type="submit">Ajouter</button>
        </form>
    );
};

export default TaskForm;