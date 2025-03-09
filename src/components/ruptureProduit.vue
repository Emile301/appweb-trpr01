<script setup lang="ts">
import { type boissons } from '../scripts/types'
import { ref } from 'vue'

const props = defineProps<{ boisson: boissons }>()

const affichage = ref('none')

if (props.boisson.quantite == 0) affichage.value = 'block'

function fermer() {
  affichage.value = 'none'
}
</script>

<template>
  <div
    class="toast show position-fixed bottom-0 end-0 m-3 bg-danger text-white"
    role="alert"
    :style="{ display: affichage }"
  >
    <div class="toast-header">
      <strong class="me-auto">Attention!</strong>
      <button type="button" class="btn-close" @click="fermer()"></button>
    </div>
    <div class="toast-body">
      Le produit: "{{ props.boisson.nom }}" est en rupture de stock
    </div>
  </div>
</template>

<style scoped>
.toast {
  min-width: 250px;
  z-index: 1049;
}
</style>
