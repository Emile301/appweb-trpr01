<script setup lang="ts">
import { ref } from "vue";
import { boissonsListe } from "../scripts/listsBoissons";
import { type boissons } from "../scripts/types";

const nom = ref("");
const description = ref("");
const prix = ref("");

function ajouterProduit(event: Event) {
  boissonsListe.push(creerNouvelleBoisson());
  validate(event);
}

function validate(event: Event) {
  //event.preventDefault();
  console.log("erreur");
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
}

function creerNouvelleBoisson(): boissons {
  console.log("boisson créer");
  return {
    id: Date.now(), //Génération id aléatoire automatique fait avec l'aide de Chapt-GPT
    nom: nom.value,
    description: description.value,
    prix: Number(prix.value),
    quantite: 0,
  };
}
/*
function reinitialiserErreur() {
  erreur_nom;
  erreur_description;
  erreur_prix;
}

function preremplirChamps(nom, description, prix) {}
*/
</script>

<template>
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
          <button class="btn btn-primary btn-lg" type="submit">Ajouter</button>
        </div>
      </div>
    </form>
  </div>
</template>
