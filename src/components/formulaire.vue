<script setup lang="ts">
function validate() {
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
}

function reinitialiserErreur() {
  erreur_nom;
  erreur_description;
  erreur_prix;
}

function preremplirChamps(nom, description, prix) {}
</script>

<template>
  <div class="container">
    <form @submit.prevent="validate">
      <div class="row">
        <div class="col" id="nom">
          <label for="nom">Nom du produit: </label>
          <input type="text" name="nom" id="nom" v-model="nom"/>
          <p id="erreur_nom">Le nom n'est pas valide!</p>
        </div>
        <div class="col" id="prix">
          <label for="prix">Prix du produit: </label>
          <input type="text" name="prix" id="prix" />
          <p id="erreur_prix">Le prix est obligatoir!</p>
        </div>
      </div>
      <div class="row">
        <div class="col" id="description">
          <label for="description">Description du produit: </label>
          <input type="text" name="description" id="description" />
          <p id="erreur_description">La description est obligatoir!</p>
        </div>
      </div>
    </form>
  </div>
</template>
