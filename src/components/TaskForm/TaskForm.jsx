import style from './TaskForm.module.scss';
import { useId, useState, useRef } from 'react';

// Le composant "TaskForm"
const TaskForm = ({
    onTaskSubmit = () => {}  //! Props "event" avec une NOOP par defaut
}) => {

    // Génération d'un id pour l'accessibilité du formulaire
    const formId = useId();

    // State pour les éléments du formulaire
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [priority, setPriority] = useState('normal');

    // Utilisation d'une "ref" pour interagir avec une balise (Access impératif)
    //  - Necessite de le lier avec la balise -> « ref={inputRef} »
    //  - Il est possible d'interagir avec la balise via la propriété "current"
    const inputRef = useRef();

    // Gestion du submit du formlaire
    const handleFormSubmit = (e) => {

        // Désactivation du comportement par defaut du navigateur
        e.preventDefault();

        // Les données a envoyer
        const data = {
            name,
            desc,
            priority
        }

        // Envoyer les données au composant parent via la props "onTaskSubmit"
        onTaskSubmit(data);

        // Cleanup du formulaire
        setName('');
        setDesc('');
        setPriority('normal');

        // Placer le focus sur l'input "name"
        inputRef.current.focus();

    }

    // Rendu
    return (
        <form className={style['form-task']} onSubmit={handleFormSubmit}>

            <label htmlFor={formId+'-name'}>Nom</label>
            <input id={formId+'-name'} type="text" required
                ref={inputRef}
                value={name} onChange={e => setName(e.target.value)} />

            <label htmlFor={formId+'-desc'}>Description</label>
            <textarea id={formId+'-desc'}
                value={desc} onChange={e => setDesc(e.target.value)} />

            <label htmlFor={formId+'-prio'}>Priorité</label>
            <select id={formId+'-prio'} required
                value={priority} onChange={e => setPriority(e.target.value)}>
                <option value='low'>Basse</option>
                <option value='normal'>Normal</option>
                <option value='high'>Urgent</option>
            </select>

            <button type="submit">Ajouter</button>

        </form>
    );
};

export default TaskForm;