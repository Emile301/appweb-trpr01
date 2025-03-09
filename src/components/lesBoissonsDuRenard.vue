<script setup lang="ts">
import ajouter from './ajouterProduit.vue'
import chercher from './chercherProduit.vue'
import exporter from './exporterCSVProduit.vue'
import liste from './listsBoissons.vue'

import { ref } from 'vue'

import { boissonsListe } from '../scripts/listsBoissons'
import { type boissons } from '../scripts/types'

const listeBoissons = ref([...boissonsListe])

function updateListeBoissons(nouvelleListe: boissons[]) {
  console.log("liste mises à jour")
  listeBoissons.value = nouvelleListe
}
</script>

<template>
  <div
    class="vh-100 d-flex flex-column justify-content-center align-items-center bg-dark text-light"
  >
    <header class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-auto">
          <img src="../assets/logo.png" alt="Logo" id="logo" onclick="location.reload()"/>
        </div>
        <div class="col">
          <h1>Les boissons du renard</h1>
        </div>
      </div>
    </header>

    <main class="container mt-4">
      <div class="row g-2 align-items-stretch">
        <div class="col-10">
          <ajouter
            :boissonsListe="listeBoissons"
            @update:boissonListe="updateListeBoissons"
          />
        </div>
        <div class="col-2">
          <exporter :boissonsListe="listeBoissons" />
        </div>
      </div>

      <div class="mt-4 col-10">
        <chercher :boissonsListe="listeBoissons" />
      </div>

      <div class="mt-2 col-12">
        <liste
          :boissonsListe="listeBoissons"
          @update:boissonListe="updateListeBoissons"
        />
      </div>
    </main>

    <footer class="mt-auto">
      <p>allo</p>
    </footer>
  </div>
</template>

<style scoped>
#logo {
  height: 120px;
}
</style>
