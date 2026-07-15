import { films } from "./content";

const sliced_films = films.slice(0,5)
export const top5_films = sliced_films.map((f) => ({img:f.thumbnail, title:f.title}))


export const lastAdded =  films.slice(6,20)

export const genresPie = [
  { name: 'Action', x: 18 },
  { name: 'Comédie', x: 15 },
  { name: 'Drame', x: 12 },
  { name: 'Science-fiction', x: 10 },
  { name: 'Thriller', x: 10 },
  { name: 'Aventure', x: 9 },
  { name: 'Animation', x: 8 },
  { name: 'Animé', x: 7 },
  { name: 'Romance', x: 5 },
  { name: 'Horreur', x: 4 },
  { name: 'Humour', x: 2 }
];




export const genresBar = [
  { name: 'Science-fiction', vues: 20500 },
  { name: 'Horreur', vues: 19500 },
  { name: 'Romance', vues: 12600 },
];





export const SubscribersLine = [
  { date: 'Jan', abonnes: 4500 },
  { date: 'Fév', abonnes: 5100 },
  { date: 'Mar', abonnes: 5900 },
  { date: 'Avr', abonnes: 6400 },
  { date: 'Mai', abonnes: 7200 },
  { date: 'Juin', abonnes: 8254 },
];



export const subscriptionFlowData = [
  { date: 'Jan', abonnes: 1200, desabonnements: 150 },
  { date: 'Fév', abonnes: 1450, desabonnements: 180 },
  { date: 'Mar', abonnes: 1100, desabonnements: 210 },
  { date: 'Avr', abonnes: 1680, desabonnements: 190 },
  { date: 'Mai', abonnes: 1950, desabonnements: 250 },
  { date: 'Juin',abonnes: 2100, desabonnements: 220 },
];




export const geoDistributionData = [
  { name: 'France', x: 45 },
  { name: 'Belgique', x: 20 },
  { name: 'Canada', x: 15 },
  { name: 'Suisse', x: 12 },
  { name: 'Autres', x: 8 }
];
