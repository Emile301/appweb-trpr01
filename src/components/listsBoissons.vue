<script setup lang="ts">
import { type boissons } from '../scripts/types'
import dupliquer from './dupliquerProduit.vue'
import modifier from './modifierProduit.vue'
import supprimer from './supprimerProduit.vue'
import rupture from './ruptureProduit.vue'

const props = defineProps<{ boissonsListe: boissons[] }>()

const emit = defineEmits(['update:boissonListe'])

function updateListeBoissons(nouvelleListe: boissons[]) {
  emit('update:boissonListe', nouvelleListe)
}

function quantiteCouleur(quantite: number) {
  if (quantite === 0) return 'text-danger'
  if (quantite >= 1 && quantite <= 5) return 'text-warning'
  return 'text-success'
}
</script>

<template>
  <div class="accordion" id="afficher">
    <div class="accordion-item" v-for="boisson of props.boissonsListe">
      <rupture :boisson="boisson" />
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="'#' + boisson.id"
          aria-expanded="false"
          :aria-controls="'#' + boisson.id"
        >
          {{ boisson.nom }} - &nbsp;
          <span :class="quantiteCouleur(Number(boisson.quantite))">
            {{ boisson.quantite }}
          </span>
          &nbsp;en stock
          <!--Espace rajouté avec Chat-GPT-->
        </button>
      </h2>
      <div
        :id="String(boisson.id)"
        class="accordion-collapse collapse hide"
        data-bs-parent="#afficher"
      >
        <div class="accordion-body">
          <dupliquer
            :boisson="boisson"
            :boissonsListe="props.boissonsListe"
            @update:boissonListe="updateListeBoissons"
          />
          <modifier
            :boisson="boisson"
            :boissonsListe="props.boissonsListe"
            @update:boissonListe="updateListeBoissons"
          />
          <supprimer
            :boisson="boisson"
            :boissonsListe="props.boissonsListe"
            @update:boissonListe="updateListeBoissons"
          />
          <div>
            <p>
              nom: <strong> {{ boisson.nom }} </strong>
            </p>
            <p>
              description: <strong> {{ boisson.description }} </strong>
            </p>
            <p>
              prix: <strong> {{ boisson.prix }} $ </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!--Annimation pour fermeture et ouverture des accordion fait avec l'aide de Chat-GPT-->
<style scoped>
.accordion-collapse {
  transition: height 0.2s ease-out;
}
.btn-spacing {
  margin-left: 10px;
}
</style>
