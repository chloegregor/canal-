


README

Stack Technique

  React 19 & TypeScript
  Vite.js
  Tailwind CSS (v4)
  React Router Dom (v7) : Gestion d'un routage dynamique
  Swiper.js : Intégration de carrousels
  Recharts : Utilisé pour modéliser visuellement les indicateurs sur la partie Administration.
  Faker.js : Pour générer un jeu de données de 60 films réalistes et dynamiques afin de tester l'application en conditions quasi-réelles.



Difficultés rencontrées :


1- J'ai eu du mal a intégrer le swiper dans un des composants du Dashboard pour swiper les nouveautés ajoutées, après avoir passé trop de temps sur le problème (image disproportionnées) j'ai décidé de me passer du composant Swiper pour ça, et j'ai fait un composant flex-scroll, car la seule solution trouvée annulait l'aspect "déroulant en dehors de l'écran" des Swipers de l'interface streaming.

2- Utilisant Rechart.js pour la première, j'ai eu quelques difficultés à trouver comment modifier les composants afin que tous les elements soient visibiles et pas caché par un overflow-hidden embarqué dans Recharts.



Point à développer:


1.  faire de la page "details" la même chose que sur canal+, c'est a dire une modale si on y arrive via un lien sur le site, ou une page a part entiere si on y arrive via un url direct.

2. "modeliser des "séries", des "saisons" et des "épisodes" et conditonner l'affichage de la page détails avec la possibilité de naviguer dans les saisons et les épisodes. J'ai fait une ebauche avec le modele "Content" qui possède le type soit "film" soit "serie" mais dans les faits, il n'y a que des films.

3. Continuer de préciser le design, trouver une typo.

4. développer une barre de recherche basé sur les titres et les réals

5. mettre en place un  bouton hamburger pour anticiper l'augmentation de la taille des catégories dnas la partie admin sur mobile.



installation :

git clone https://github.com/chloegregor/canal-
cd canal-

npm install

npm run dev

Merci de m'avoir lue !


Bonne fin de semaine,
 Chloé
