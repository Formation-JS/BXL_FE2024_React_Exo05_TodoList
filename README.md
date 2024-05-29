# Exo 05 - TodoList

## Structure des composants de l'app
![App Structure](./doc/structure.png)

## Méthodologie de travail
- Réaliser la structure de l'app _(Peut toujours évoluer)_
    - Définir les composants
    - Visualiser le flux de donnée (State + communication)
- Coder... 
    - Créer un composant _(Simple)_
    - Ajouter de la logique et/ou les interactions au composant
    - Passer à la fonctionnalité / composant suivant

### Ordre de dev durant la correction
- Composant Header
- Composant TodoList _(Simple)_
    - Structure de base
- Composant TaskForm
    - [Si basé sur un mockup] Adapter le code html en JSX 
    - Ajouter le style _(SCSS)_
    - Gestion du formulaire _(Binding entre le form et le state)_
    - Interaction avec TodoList _(Props "Event" -> Pour envoyé l'element au parent)_
    - (Bonus) Gestion du focus
- Composant TodoList _(State)_
    - Traiter les données envoyé par le formulaire
- Composant TaskList & TaskItem
    - [Si basé sur un mockup] Adapter le code html en JSX 
    - Ajouter le style _(SCSS)_
    - Convertir les données "JS" vers du "JSX"
    - Interaction avec TodoList _(Deux props "Event -> Pour le delete et le finish)_
- Fonctionnalité de filtre des resutlats
    - Analyse et mockup
    - Mise en place du JSX avec un State
    - Appliquer les regles de filtre avec la fonction filter