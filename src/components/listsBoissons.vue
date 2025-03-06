<script setup lang="ts">
import { boissonsListe } from '../scripts/listsBoissons'
import dupliquer from './dupliquerProduit.vue'
import modifier from './modifierProduit.vue'
import supprimer from './supprimerProduit.vue'
import rupture from './ruptureProduit.vue'
</script>

<template>
    <div class="accordion" id="afficher">
        <div class="accordion-item" v-for="boisson of boissonsListe">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + boisson.id" aria-expanded="false" :aria-controls="'#' + boisson.id">
                    {{ boisson.nom }} - {{ boisson.quantite }} en stock
                </button>
            </h2>
            <div :id="String(boisson.id)" class="accordion-collapse collapse hide" data-bs-parent="#afficher">
                <div class="accordion-body">
                    <button class="btn btn-primary btn-lg">
                        Modifier le produit
                        <modifier />
                    </button>
                    <button class="btn btn-primary btn-lg">
                        Dupliquer le produit
                        <dupliquer />
                    </button>
                    <button class="btn btn-primary btn-lg">
                        Supprimer le produit
                        <supprimer />
                    </button>
                    <p>nom: {{ boisson.nom }}</p>
                    <p>description: {{ boisson.description }}</p>
                    <p>prix: {{ boisson.prix }}$</p>
                </div>
            </div>
        </div>
    </div>
</template>
