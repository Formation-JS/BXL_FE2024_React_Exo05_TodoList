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

     // Gestion de la suppression d'une element via un event de la "TaskList"
     const handleDeleteTask = (taskId) => {
        
        //? V1 - Utilisation du 'splice' (Version un peu long a ecrire, mais ça fonctionne bien :p)
        /*
        setTasks(tasks => {
            // Copie des données
            const copy = structuredClone(tasks);

            // Supprimer l'element dans la copie
            const indexTarget = copy.findIndex(elem => elem.id === taskId);
            copy.splice(indexTarget, 1);

            // Renvoyé la copie modifié
            return copy;
        });
        */

        //? V2 - Utilisation du 'toSpliced'
        /*
        setTasks(tasks => tasks.toSpliced(tasks.findIndex(elem => elem.id === taskId), 1));
        */

        //? V3 - Utilisation du 'filter'
        setTasks(tasks => tasks.filter(elem => elem.id !== taskId));
     }

     // Gestion de la validation d'une element via un event de la "TaskList"
     const handleFinishTask = (taskId) => {

         //? V1 - Récuperation d'un élément et validation de celui-ci
         /*
        setTasks( tasks => {
            // Copie des données
            const copy = structuredClone(tasks);

            // Modifier de l'element ciblé
            const targetTask = copy.find(elem => elem.id === taskId)
            targetTask.isDone = true

            // Renvoyé la copie modifié
            return copy
        });¨
        */

        // V2 - Utilisation de la fonction "map"
        setTasks(tasks => tasks.map(elem => (elem.id !== taskId) ? elem : { ...elem, isDone : true }));
     }

    return (
        <>
            <h2>Ajouter une tache</h2>
            <TaskForm onTaskSubmit={handleNewTask} />

            <h2>Liste des taches</h2>
            <TaskList tasks={tasks} onTaskDelete={handleDeleteTask} onTaskFinish={handleFinishTask}/>
        </>
    );
}

export default TodoList;