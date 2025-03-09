<script setup lang="ts">
import { type boissons } from '../scripts/types'
import formulaire from './formulaire.vue'

const props = defineProps<{ boissonsListe: boissons[] }>()
const emit = defineEmits(['update:boissonListe'])

function ajouterProduit(produit: boissons) {
  const nouvelleListe = [...props.boissonsListe, produit]
  console.log('liste mises a jour - 1')
  emit('update:boissonListe', nouvelleListe)
}
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
            <formulaire @update:nouvelleboisson="ajouterProduit" />
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
