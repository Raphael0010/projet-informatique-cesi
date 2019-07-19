# Projet Informatique 

## Supervision en temps réel et configuration du switch

Utilisation d'un serveur [express](https://expressjs.com/fr/) + [socket.io](https://socket.io/)


Le repo du server socket.IO : [ici](https://github.com/Raphael0010/projet-informatique-cesi)
* NodeJs 10.X
* React 16.X
* Yarn

## Installation 

* On met met le contenu du dossier build dans un serveur web     
( Apache/Httpd )
* On clone le [repo server](https://github.com/Raphael0010/projet-informatique-cesi-server)
* On installe les dépendances avec yarn, on fait : ```yarn``` ( normalement le dossier node_modules est présent ( erreur de ma pars )))
* On lance le script server.js : ```node server.js```

## Compilation

Si on souhaite recompiler les sources :
* On fait ```yarn && yarn build```
* Et on suit -> "Installation" 

## /!\ Attention
 * Le serveur socket.IO écoute sur le port 3030 de localhost
 * Ne pas oublier d'installer les dépendances ```yarn``` si on souhaite re compiler les sources

## Groupe
* Raphael M.
* Julien P.
* Maxime B.
* Cyril H.
* Alexis M.

## License
[MIT](https://choosealicense.com/licenses/mit/)
