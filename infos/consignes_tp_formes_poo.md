# TP Encapsulation, héritage et polymorphisme
___
## Partie 1 Mise en place

1. Transformer la classe abstraite Forme en interface. [OK]

2. Adapter les classe filles suivantes : Triangle, Carré, Cercle et Rectangle. [OK]

3. Ajouter les attributs dans les classes filles. [OK]

4. Mettre les getteurs et les setteurs dans les classes filles suivantes ci-dessus. [OK]

5. Enfin, remplissez les différentes méthodes aire et périmètre dans chacune de ses classes. [OK]
___
## Partie 2 : Mise en pratique

- Faire 3 objets de type Forme/IForme pour ensuite les construire à l'aide d'un constructeur de Carre, de Rectangle et de Cercle. [OK]

- Sur les 3 objets, appeler et logger les méthodes aire() et perimetre(). [OK]

- Expliquer ce qu'il se passe dynamiquement, à l’exécution du programme. [KO]
___
## Partie 3 : Généralisation

- Refaire les mêmes étapes de la partie 1 puis 2 pour les classes Losange, Parallelogramme, PentagoneR (régulier) et Quadrilatère. [OK]
___
## Partie 4 : Manipulation des objets et des classes

- Faite une variable static "nbrNomClasse" qui compte pour chaque classe le nombre d'instance de chaque classe. Ajouter l'incrémentation de cette variable dans le constructeur.

- Pour chaque classe, faite une méthode statique qui calcule la somme des aires et des périmètres des formes passées en argument.