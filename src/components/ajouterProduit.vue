<script setup lang="ts">
import { ref } from 'vue'
import { boissonsListe } from '../scripts/listsBoissons'
import { type boissons } from '../scripts/types'

let nom = ref('')
let description = ref('')
let prix = ref('')

function ajouterProduit(event: Event) {
  event.preventDefault()
  if (validate()) boissonsListe.push(creerNouvelleBoisson())
}

function validate(): boolean {
  reinitialiserErreur()
  console.log('erreur')
  /*
  let erreurCount = 0;
  reinitialiserErreur();
  if (nom.trim() == "") {
    erreurCount++;
    erreur_nom;
  }
  if (description.trim() == "") {
    erreurCount++;
    erruer_description;
  }
  if (prix.trim() == "") {
    erreurCount++;
    erreur_prix;
  }
    */
  return true
}

function creerNouvelleBoisson(): boissons {
  console.log('boisson créer')
  return {
    id: Date.now(), //Génération id aléatoire automatique fait avec l'aide de Chapt-GPT
    nom: nom.value,
    description: description.value,
    prix: Number(prix.value),
    quantite: 0
  }
}

function reinitialiserErreur() {
  /*
  erreur_nom;
  erreur_description;
  erreur_prix;
  */
}
/*
export function dupliquer(boisson: boissons) {
  nom = ref(boisson.nom.toString());
  description = ref(boisson.description.toString());
  prix = ref(boisson.prix.toString());
}
  */
</script>

<template>
  <div class="accordion" id="ajouter">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#add"
        >
          Ajouter un produit
        </button>
      </h2>
      <div
        id="add"
        class="accordion-collapse collapse hide"
        data-bs-parent="#ajouter"
      >
        <div class="accordion-body">
          <div class="container">
            <form @submit="ajouterProduit">
              <div class="row">
                <div class="col" id="nom">
                  <label for="nom">Nom du produit: </label>
                  <input type="text" name="nom" id="nom" v-model="nom" />
                  <p id="erreur_nom">Le nom n'est pas valide!</p>
                </div>
                <div class="col" id="prix">
                  <label for="prix">Prix du produit: </label>
                  <input type="text" name="prix" id="prix" v-model="prix" />
                  <p id="erreur_prix">Le prix est obligatoir!</p>
                </div>
              </div>
              <div class="row">
                <div class="col" id="description">
                  <label for="description">Description du produit: </label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    v-model="description"
                  />
                  <p id="erreur_description">La description est obligatoir!</p>
                </div>
              </div>
              <div class="row">
                <div class="col" id="submit">
                  <button class="btn btn-primary btn-lg" type="submit">
                    Ajouter
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!--Annimation pour fermeture et ouverture des accordion fait avec l'aide de Chat-GPT-->
<style scoped>
.accordion-collapse {
  transition: height 0.2s ease-out, opacity 0.2s ease-out;
}
</style>
