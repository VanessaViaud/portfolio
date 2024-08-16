# Booki

Sophie Bluel, architecte d'intérieur, a mandaté l'agence pour développer son site portofolio. Ma mission était de poursuivre cette conception -sur la base du Backend et du Frontend statique déjà réalisés- en créant la partie dynamique du site en Javascript.

## Les défis du projet :

- Générer dynamiquement l'affichage de sa galerie de projets: pour cela, j'ai utilisé JavaScript pour effectuer des appels API avec la méthode fetch, pour envoyer une requête HTTP à cette API, récupérer les données des projets, les parcourir avec une boucle en JavaScript et créer les éléments HTML correspondants.
- Intégrer une page de connexion pour permettre à Sophie Bluel de s'authentifier et ajouter de nouveaux projets : gérer l'authentification utilisateur en envoyant les données de connexion à un serveur et en stockant un token d'authentification localement si la connexion est réussie.
- Ajouter de nouveaux projets à la base de données : récupérer les éléments du formulaire, écouter le bouton de valider pour lancer la fonction d'ajout (tout en commençant par vérifier que tous les champs sont remplis que l'image ne dépasse pas 4Mo), emballer les données dans un objet FormData, puis les envoyer au serveur via une requête HTTP POST avec le token d'authentification récupéré du localStorage.

## Compétences utilisées :

- Javascript
- Connexion API

## Lien vers le dépôt GitHub :

[SophieBluel - GitHub](https://github.com/VanessaViaud/SophieBluel)