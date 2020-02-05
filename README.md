# DankMemo
Projet DankMemo pour O'Clock

## Demo

https://dankmemo.cleverapps.io/

## Installation

Pour pouvoir developper en local, il faut avoir installer Docker et docker-compose.
Ensuite, vous pouvez lancer les commandes suivantes :

```bash
docker-compose build
docker-compose up -d
```

Ca donne alors acces a 2 adresses URL :
- API -> http://localhost:8080
- Front -> https://localhost:3000

La partie front demarre un petit serveur web donc a chaque mise a jour du code dans `frontend`, il y aura le resultat deja compile.

## Suggestions d'amelioration

- Il n'y a pas de securite cote API, donc on peut enregistrer des scores en ligne de commande par exemple.
On pourrait faire un systeme de session pour outre passer ca ;

- L'integration du design pour du mobile peut etre ameliore ;

- On peut tricher en retourner les cartes manuellements via la console du navigateur.
