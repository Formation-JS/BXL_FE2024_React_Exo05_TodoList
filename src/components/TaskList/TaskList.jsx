import clsx from 'clsx';
import style from './TaskList.module.scss';

// Composant qui represente un element de la liste
const TaskItem = ({ id, name, desc, priority, isDone, onDelete, onFinish}) => {

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

    return (
        <section className={style["task-list"]}>
            {tasks.map(
                (task) => <TaskItem {...task} key={task.id} onDelete={onTaskDelete} onFinish={onTaskFinish}/>
            )}
        </section>
    );
};

export default TaskList;