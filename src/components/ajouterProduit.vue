<script setup lang="ts">
import formulaire from "./formulaire.vue";
</script>

<template>
    <div class="accordion" id="ajouter">
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#add">
                <img src="">
                Ajouter un produit
            </button>
        </h2>
        <div id="add" class="accordion-collapse collapse hide" data-bs-parent="#ajouter">
            <div class="accordion-body">
                <formulaire />
            </div>
        </div>
    </div>
    </div>
</template>