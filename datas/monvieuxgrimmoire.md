# Mon Vieux Grimmoire

Mon Vieux Grimmoire est un site de référencement et de notation de livres imaginé par une chaîne de librairies. Ma mission était de m'associé au développeur Frontend qui a obtenu ce projet pour réaliser le Backend du site.

## Les défis du projet :

- Créer un serveur web : utiliser le framework Express.js pour Node.js qui fournit les outils et méthodes pour géner les requêtes et réponses HTTP.
- Créer une base de données pour les livres et les utilisateurs : connecter le Backend du site à Mongo DB de manière sécurisée.
- Sécuriser les mots de passe des utilisateurs dans la base de données : ajouter un cryptage avec bcrypt et enregistrer dans la base de données les seuls hash de ces derniers.
- Gérer l'authentification des utilisateurs qui peuvent ajouter des ouvrages, les modifier voire les supprimer : ajouter un middleware d'authentification avec jwt de jsonwebtoken.
- Optimiser le stockage des images téléchargées au titre des couvertures de livres : implémenter un middleware dédié avec multer et sharp, respectivement pour gérer le téléchargement et stockage des images puis leur compresser et/ou redimensionner.


## Compétences utilisées :

- Node
- Express
- Mongo DB Atlas
- bcrypt

## Lien vers le dépôt GitHub :

[Booki - GitHub](https://github.com/VanessaViaud/MonVieuxGrimmoireBackend)