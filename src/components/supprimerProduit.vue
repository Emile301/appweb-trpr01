<script setup lang="ts">
import { ref } from "vue";

const affichage = ref("none");

function confirmation() {
  affichage.value = "flex";
}

function annuler() {
  affichage.value = "none";
}

function supprimer() {
    
    affichage.value = "none";
}
</script>

<template>
  <button class="btn btn-primary btn-lg" @click="confirmation()">
    Supprimer le produit
  </button>

  <div
    id="fullscreenAlert"
    class="fullscreen-alert"
    :style="{ display: affichage }"
  >
    <div class="alert alert-warning ">
      <p><strong>Attention !</strong> Voulez-vous vraiment supprimer cet item?</p>
      <button class="btn btn-primary btn-lg" @click="supprimer()">Supprimer</button>
      <button class="btn btn-primary btn-lg" @click="annuler()">annuler</button>
    </div>
  </div>
</template>

<style scoped>
.fullscreen-alert {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.66);
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 1050;
}
</style>
