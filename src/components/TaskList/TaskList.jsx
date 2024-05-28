import clsx from 'clsx';
import style from './TaskList.module.scss';

// Composant qui represente un element de la liste
const TaskItem = ({id, name, desc, priority, isDone}) => {

    return (
        <article className={clsx(style.task, isDone && style.finish)}>
            <div className={style.info}>
                <p>{name} {priority === 'high' && <span className={style.urgent}></span>}</p>
                <p>{desc}</p>
            </div>
            <div className={style.action}>
                <button disabled={isDone}>Terminer</button>
                <button>Supprimer</button>
            </div>
        </article>
    );
};

// Composant qui represente la liste
const TaskList = ({
    tasks = [] //! Props "tasks" pour obtenir la liste des taches du parent (Le nom peut être dif)
}) => {

    return (
        <section className={style["task-list"]}>
            {tasks.map(
                (task) => <TaskItem {...task} key={task.id} />
            )}
        </section>
    );
};

export default TaskList;