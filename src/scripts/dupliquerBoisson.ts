import { boissonsListe } from './listsBoissons'
import { type boissons } from './types'

export function dupliquer (boisson: boissons) {
  boissonsListe.push(dupliquerBoisson(boisson))
  console.log('Boisson dupliqué')
}

function dupliquerBoisson (boisson: boissons): boissons {
  console.log('boisson créer')
  return {
    id: Date.now(), //Génération id aléatoire automatique fait avec l'aide de Chapt-GPT
    nom: boisson.nom,
    description: boisson.description,
    prix: boisson.prix,
    quantite: boisson.quantite
  }
}
