<script setup lang="ts">
import { ref, defineEmits } from 'vue'

const emit = defineEmits(['update:recherche'])
const recherche = ref('')

function chercher () {
  emit('update:recherche', recherche.value.toLowerCase())
}
</script>

<template>
  <input
    v-model="recherche"
    @input="chercher"
    type="text"
    placeholder="Rechercher une boisson..."
    class="form-control"
  />
</template>
