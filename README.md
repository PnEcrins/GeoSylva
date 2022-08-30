# GeoSylva

Projet mviewer de visualisateur cartographique des patrimoines forestiers du Parc national des Ecrins. 


## Installation

### Installez mviewer

Installez mviewer sur la machine qui servira à son déploiement. La procédure est détaillée ici : https://mviewerdoc.readthedocs.io/fr/latest/doc_tech/deploy.html

On distingue mviewer, l’application de visualisation cartographique, de GeoSylva, une instance de mviewer. Vous pourrez déployer autant d’instance que vous souhaitez et les gérer dans des dossiers dédiés.


### Clonez GeoSylva

Clonez le contenu du repository GeoSylva dans le sous dossier apps de mviewer (.../mviewer/apps).
La base de données doit être déployée avec le SQL.


### Indiquez où sont stockées vos données

La configuration du projet (appel des données, projection, emprise etc.) est définie dans le fichier XML.TEMPLATE. En l’état, le XML n’est pas lisible : il faut lui indiquer l’URL où sont stockées les données que vous souhaitez afficher. 
Pour ce faire, un script python a été rédigé : sa fonction est de lire le XML est d’écrire un nouveau fichier qui remplace les occurrences d’une variable entre {{} par une variable d’environnement définie par vos soins. Veillez à vérifier les chemins d’entrée et de sortie indiqués dans ce script. 
- Définissez votre variable d’environnement : export URL_GEOSERVER=mon_url.io
- Lancez votre script python : python3 johnscript.py


### Lancez GeoSylva

Un nouveau fichier de configuration (XML) est désormais créé, où les couches sont appelés depuis l’URL que vous avez indiqué. C’est ce fichier qu’il faut désormais appeler pour lancer votre application. 
