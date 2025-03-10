<script setup lang="ts">
import { defineEmits, ref } from 'vue'
import { type boissons } from '../scripts/types'

const props = defineProps<{ boisson: boissons; boissonsListe: boissons[] }>()
const emit = defineEmits(['update:boissonListe'])

const affichage = ref('none')

const nom = ref(props.boisson.nom)
const description = ref(props.boisson.description)
const prix = ref(props.boisson.prix)
const quantite = ref(props.boisson.quantite)

const erreurNom = ref('')
const erreurDescription = ref('')
const erreurPrix = ref('')
const erreurQuantite = ref('')

function emitChangement() {
  if (validate()) {
    affichage.value = 'none'
    const indexAModifier = props.boissonsListe.findIndex(
      boisson => boisson.id === props.boisson.id
    )
    if (indexAModifier !== -1) {
      const nouvelleListe = [...props.boissonsListe]

      nouvelleListe[indexAModifier] = {
        ...nouvelleListe[indexAModifier],
        nom: String(nom.value),
        description: String(description.value),
        prix: Number(prix.value),
        quantite: Number(quantite.value)
      }
      emit('update:boissonListe', nouvelleListe)
    }
  }
}

function afficherForm() {
  affichage.value = 'flex'
}

function annuler() {
  affichage.value = 'none'
  nom.value = props.boisson.nom
  description.value = props.boisson.description
  prix.value = props.boisson.prix
  quantite.value = props.boisson.quantite
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

  if (isNaN(Number(quantite.value)) || Number(quantite.value) < 0) {
    erreurQuantite.value = "La quantité n'est pas valide."
    valide = false
  }

  return valide
}

function reinitialiserErreur() {
  erreurNom.value = ''
  erreurDescription.value = ''
  erreurPrix.value = ''
  erreurQuantite.value = ''
}
</script>

<template>
  <button class="btn btn-primary btn-lg btn-spacing" @click="afficherForm()">
    Modifier le produit
  </button>

  <div
    id="fullscreenAlert"
    class="fullscreen-alert"
    :style="{ display: affichage }"
  >
    <div class="alert alert-warning">
      <div class="container">
        <form @submit="emitChangement">
            <div>
                <h2>Modifier le produit</h2>
            </div>
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
            <div class="col" id="description">
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
              <label for="description">quantité: </label>
              <input
                type="number"
                class="form-control"
                :class="{ 'is-invalid': erreurQuantite }"
                name="quantite"
                id="quantite"
                v-model="quantite"
              />
              <div class="invalid-feedback">{{ erreurQuantite }}</div>
            </div>
            <div class="col">
              <button
                class="btn btn-success btn-lg btn-spacing"
                type="button"
                @click="emitChangement()"
              >
                modifier
              </button>
            </div>
            <div class="col">
              <button
                class="btn btn-primary btn-lg btn-spacing"
                type="button"
                @click="annuler()"
              >
                annuler
              </button>
            </div>
          </div>
        </form>
      </div>
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
  margin-top: 10px;
}
</style>
