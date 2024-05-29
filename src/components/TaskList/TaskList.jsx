import clsx from 'clsx';
import style from './TaskList.module.scss';
import { useId, useState } from 'react';

// Composant qui represente un element de la liste
const TaskItem = ({ id, name, desc, priority, isDone, onDelete, onFinish }) => {

    return (
        <article className={clsx(style.task, isDone && style.finish)}>
            <div className={style.info}>
                <p>{name} {priority === 'high' && <span className={style.urgent}></span>}</p>
                <p>{desc}</p>
            </div>
            <div className={style.action}>
                <button onClick={() => onFinish(id)} disabled={isDone}>Terminer</button>
                <button onClick={() => onDelete(id)}>Supprimer</button>
            </div>
        </article>
    );
};

// Composant qui represente la liste
const TaskList = ({
    tasks = [],                 //! Props "tasks" pour obtenir la liste des taches du parent (Le nom peut être dif)
    onTaskDelete = () => { },    //! Props "onTaskDelete" pour informé la parent qu'on souhaite supp la tache (Par default : NOOP)
    onTaskFinish = () => { }, //! props pour informer le parent qu'on souhaite finir une tâche
}) => {

    const checkboxId = useId();
    const [taskFilter, setTaskFilter] = useState({
        high: true,
        normal: true,
        low: true
    });

    const handleFilterAll = () => {

        if (taskFilter.high && taskFilter.normal && taskFilter.low) {
            // Si tout est coché => Décoche tout
            setTaskFilter({ high: false, normal: false, low: false });
        }
        else {
            // Sinon tout coché
            setTaskFilter({ high: true, normal: true, low: true });
        }
    };

    const handleFilter = (e) => {

        const checkboxName = e.target.name; // high / normal / low (Attribut "name" des balise)

        setTaskFilter(taskF => ({
            ...taskF,   // Copie des valeurs actuelle du state
            [checkboxName]: !taskF[checkboxName] // Modification de la valeur ciblé par le "name" de la checkbox
            //! NB : Utilisation de l'operateur d'acces [] pour manipuler les propriétés du state via le nom de la checkbox
        }));
    };

    
    //! Filtre de la liste, si necessaire
    let tasksWithFilter;
    if(taskFilter.high && taskFilter.normal && taskFilter.low){
        // Pas d'application des filtres
        tasksWithFilter = tasks;
    }
    else {
        // Application des filtres        
        tasksWithFilter= tasks.filter(elem => (taskFilter.high && elem.priority === 'high')
                                            || (taskFilter.normal && elem.priority === 'normal')
                                            || (taskFilter.low && elem.priority === 'low'));
    }

    return (
        <>
            <div>
                <input type="checkbox" id={checkboxId + '-all'}
                    onChange={handleFilterAll} checked={taskFilter.high && taskFilter.normal && taskFilter.low} />
                <label htmlFor={checkboxId + '-all'}>Tous</label>

                <input type="checkbox" id={checkboxId + '-high'}
                    name="high" onChange={handleFilter} checked={taskFilter.high} />
                <label htmlFor={checkboxId + '-high'}>Urgent</label>

                <input type="checkbox" id={checkboxId + '-normal'}
                    name="normal" onChange={handleFilter} checked={taskFilter.normal} />
                <label htmlFor={checkboxId + '-normal'}>Normal</label>

                <input type="checkbox" id={checkboxId + '-low'}
                    name="low" onChange={handleFilter} checked={taskFilter.low} />
                <label htmlFor={checkboxId + '-low'}>Basse</label>
            </div>
            <section className={style["task-list"]}>
                {tasksWithFilter.map(
                    (task) => <TaskItem {...task} key={task.id} onDelete={onTaskDelete} onFinish={onTaskFinish} />
                )}
            </section>
        </>
    );
};

export default TaskList;