<script setup lang="ts">
import { type boissons } from '../scripts/types'
//import { dupliquer } from './ajouterProduit.vue'
import modifier from './modifierProduit.vue'
import supprimer from './supprimerProduit.vue'
import rupture from './ruptureProduit.vue'

const props = defineProps<{ boissonsListe: boissons[] }>()

const emit = defineEmits(['update:boissonListe'])

function updateListeBoissons(nouvelleListe: boissons[]) {
  emit('update:boissonListe', nouvelleListe)
}
</script>

<template>
  <div class="accordion" id="afficher">
    <div class="accordion-item" v-for="boisson of props.boissonsListe">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="'#' + boisson.id"
          aria-expanded="false"
          :aria-controls="'#' + boisson.id"
        >
          {{ boisson.nom }} - {{ boisson.quantite }} en stock
        </button>
      </h2>
      <div
        :id="String(boisson.id)"
        class="accordion-collapse collapse hide"
        data-bs-parent="#afficher"
      >
        <div class="accordion-body">
          <button class="btn btn-primary btn-lg">
            Modifier le produit
            <modifier />
          </button>
          <!--<button class="btn btn-primary btn-lg" @click="dupliquer(boisson)">Dupliquer le produit</button>-->
          <supprimer
            :boisson="boisson"
            :boissonsListe="props.boissonsListe"
            @update:boissonListe="updateListeBoissons"
          />

          <p>nom: {{ boisson.nom }}</p>
          <p>description: {{ boisson.description }}</p>
          <p>prix: {{ boisson.prix }}$</p>
        </div>
      </div>
    </div>
  </div>
  <rupture />
</template>

<!--Annimation pour fermeture et ouverture des accordion fait l'aide de Chat-GPT-->
<style scoped>
.accordion-collapse {
  transition: height 0.2s ease-out;
}
</style>
