Montant Lucas ( Pas d'angular en entreprise ) 

=======================
# Partie EXAM TRADUCTION :
=======================

Traduction fonctionnelle avec la configuration : 
ng serve --configuration=en
langue par défaut francais
Probleme bouton changement de language : probleme de version des dépendances 

Exigences :

Utilisez le module Angular i18n pour fournir des fichiers de traduction pour différentes langues. Incluez des traductions pour au moins deux langues.  DONE

Utilisez le pipe Angular translate pour afficher les messages traduits dans l'interface utilisateur de l'application. Utilisez le pipe dans plusieurs composants différents.

Mettez en place une logique pour détecter automatiquement la langue préférée de l'utilisateur à partir de son navigateur. Si la langue préférée de l'utilisateur ne correspond à aucune langue prise en charge par l'application, utilisez la langue par défaut.



Permettez à l'utilisateur de changer la langue de l'interface utilisateur à l'aide d'un menu déroulant ou d'un autre élément d'interface utilisateur approprié. Lorsque l'utilisateur change de langue, l'application doit afficher tous les messages dans la nouvelle langue sélectionnée.

Ajoutez des fichiers de traduction pour les erreurs courantes, telles que les erreurs de validation de formulaire, et affichez les messages d'erreur traduits dans l'interface utilisateur. Erreur traduite DONE

Utilisez des directives de texte pour gérer le texte qui doit être traduit à partir du HTML, des balises d'attributs ou d'autres balises personnalisées.

Bonus: Implémentez des tests unitaires pour les différents composants et services impliqués dans l'internationalisation.


# Projet de gestion de notes de frais. Lucas Montant (Pas d'Angular en entreprise)

Le projet utilise Angular, tailwinds, FireBase RealTime Database ainsi que la connexion avec google de FireBase.

# Prérequis : Assurez-vous d'avoir les logiciels suivants installés sur votre machine :

Node.js (https://nodejs.org/en/download/)
Angular CLI (installez-le en exécutant 'npm install -g @angular/cli' )

# Lancement du projet :
 Exécutez la commande 'ng serve' dans le terminal pour démarrer le serveur de développement. Ouvrez un navigateur et accédez à l'adresse http://localhost:4200/ pour voir le projet en action. La commande 'npm start' fonctionne également.

# Installation des dépendances :
 Ouvrez un terminal et accédez au répertoire du projet. Exécutez la commande 'npm install' pour installer toutes les dépendances du projet.

# Affichage des notes de frais :
 La page principale affiche la liste des notes de frais récupérées depuis la base de données en temps réel. Chaque note de frais est représentée par un composant qui montre les informations pertinentes telles que le nom, le montant et le statut.

# Ajout de notes de frais :
 Les utilisateurs peuvent ajouter de nouvelles notes de frais en remplissant un formulaire avec les informations nécessaires (nom, montant et statut). Des validateurs de formulaires sont utilisés pour s'assurer que les données saisies sont correctes.

# Modification du statut des notes de frais : 
Les notes de frais ayant le statut "en attente" peuvent être mises à jour pour passer au statut "terminé" en cliquant sur un bouton.

# Suppression des notes de frais :
#Les utilisateurs peuvent supprimer des notes de frais en cliquant sur un bouton avec une croix rouge.

# Authentification avec Google :
 Les utilisateurs peuvent se connecter à l'application en utilisant leur compte Google. Le service d'authentification gère la connexion et la déconnexion des utilisateurs.

# Gestion de l'état de connexion dans la barre de navigation :
 La barre de navigation affiche un bouton "Se connecter" lorsque l'utilisateur n'est pas connecté. Une fois connecté, le bouton est remplacé par la photo de profil de l'utilisateur, un click sur la photo permet de se déconnecter.

# Protection des routes : (Pas encore implémenté)
 Les routes de l'application sont protégées afin que seuls les utilisateurs connectés puissent accéder aux fonctionnalités liées aux notes de frais.

Ce projet offre ainsi une solution complète pour gérer les notes de frais, avec des fonctionnalités d'authentification et de gestion des données.


