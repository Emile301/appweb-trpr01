<script setup lang="ts">
import { type boissons } from '../scripts/types'
import { defineEmits, ref } from 'vue'

const props = defineProps<{ boisson: boissons; boissonsListe: boissons[] }>()
const emit = defineEmits(['update:boissonListe'])

const affichage = ref('none')

function confirmation() {
  affichage.value = 'flex'
}

function annuler() {
  affichage.value = 'none'
}

function supprimer() {
  affichage.value = 'none'
  const indexASupprimer = props.boissonsListe.findIndex(
    b => b.id === props.boisson.id
  )

  if (indexASupprimer !== -1) {
    const nouvelleListe = [...props.boissonsListe]
    nouvelleListe.splice(indexASupprimer, 1)
    emit('update:boissonListe', nouvelleListe)
  }
}
</script>

<template>
  <button class="btn btn-primary btn-lg btn-spacing" @click="confirmation()">
    Supprimer le produit
  </button>

  <div
    id="fullscreenAlert"
    class="fullscreen-alert"
    :style="{ display: affichage }"
  >
    <div class="alert alert-warning">
      <p>
        <strong>Attention !</strong> Voulez-vous vraiment supprimer cet item?
      </p>
      <button class="btn btn-primary btn-lg btn-spacing" @click="supprimer()">
        Supprimer
      </button>
      <button class="btn btn-primary btn-lg btn-spacing" @click="annuler()">
        annuler
      </button>
    </div>
  </div>
</template>

<!--Alerte fait avec l'aide de Chat-GPT-->
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
.btn-spacing {
  margin-left: 10px;
}
</style>
