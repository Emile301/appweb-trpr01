<script setup lang="ts">
import { ref } from 'vue'
import { type boissons } from '../scripts/types'

const emit = defineEmits(['update:nouvelleboisson'])

const nom = ref('')
const description = ref('')
const prix = ref('')

const erreurNom = ref('')
const erreurDescription = ref('')
const erreurPrix = ref('')

function emitBoisson() {
  if (validate()) {
    emit('update:nouvelleboisson', creerNouvelleBoisson())
    nom.value = ''
    description.value = ''
    prix.value = ''
  }
}

function validate(): boolean {
  reinitialiserErreur()
  let valide = true

  if (nom.value.trim() === '') {
    erreurNom.value = 'Le nom est requis.'
    valide = false
  }

  if (description.value.trim() === '') {
    erreurDescription.value = 'La description est requise.'
    valide = false
  }

  if (isNaN(Number(prix.value)) || Number(prix.value) <= 0) {
    erreurPrix.value = "Le prix n'est pas valide."
    valide = false
  }

  return valide
}

function creerNouvelleBoisson(): boissons {
  return {
    id: Date.now(), //Génération id aléatoire automatique fait avec l'aide de Chapt-GPT
    nom: nom.value,
    description: description.value,
    prix: Number(prix.value),
    quantite: 0
  }
}

function reinitialiserErreur() {
  erreurNom.value = ''
  erreurDescription.value = ''
  erreurPrix.value = ''
}
</script>

<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col" id="nom">
          <label for="nom" class="form-label">Nom du produit: </label>
          <input
            type="text"
            class="form-control"
            :class="{ 'is-invalid': erreurNom }"
            name="nom"
            id="nom"
            v-model="nom"
          />
          <div class="invalid-feedback">{{ erreurNom }}</div>
        </div>

        <div class="col" id="prix">
          <label for="prix" class="form-label">Prix du produit: </label>
          <input
            type="number"
            class="form-control"
            :class="{ 'is-invalid': erreurPrix }"
            name="prix"
            id="prix"
            v-model="prix"
          />
          <div class="invalid-feedback">{{ erreurPrix }}</div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label for="description">Description du produit: </label>
          <input
            type="text"
            class="form-control"
            :class="{ 'is-invalid': erreurDescription }"
            name="description"
            id="description"
            v-model="description"
          />
          <div class="invalid-feedback">{{ erreurDescription }}</div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <button
            class="btn btn-success btn-lg btn-spacing"
            type="button"
            @click="emitBoisson()"
          >
            Ajouter
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
.btn-spacing {
  margin-top: 10px;
}
</style>
