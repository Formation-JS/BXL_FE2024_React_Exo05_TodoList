import { useRef, useState } from "react";
import TaskForm from "../../components/TaskForm/TaskForm";
import TaskList from "../../components/TaskList/TaskList";


const TodoList = () => {

    // State avec les taches (par defaut, une liste vide)
    const [tasks, setTasks] = useState([]); 
    
    // Variable pour mémorisé le précedent id des taches (hors state => car fonctionnement interne)
    // - Utilisation d'une ref pour créer une persistance de donnée
    const taskId = useRef(0);

    // Gestion des données reçu depuis le formulaire
    const handleNewTask = (newTask) => {
        // console.log('newTask', newTask);

        // Créer une tache avec les valeurs du formulaire et l'id
        const task = {
            ...newTask, // Permet de copier TOUTES les valeurs de "newTask" dans "task"
            id: taskId.current,
            isDone: false
        };

        // Incrementation de l'id des tache (mémorisé par la ref)
        taskId.current++ ;

        // Ajouter la tache dans la liste des taches
        setTasks(prevTasks => [...prevTasks, task]);

     };

    return (
        <>
            <h2>Ajouter une tache</h2>
            <TaskForm onTaskSubmit={handleNewTask} />

            <h2>Liste des taches</h2>
            <TaskList tasks={tasks} />
        </>
    );
}

export default TodoList;