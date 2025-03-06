<script setup lang="ts">
import ajouter from "./ajouterProduit.vue";
import chercher from "./chercherProduit.vue";
import exporter from "./exporterCSVProduit.vue";
import liste from "./listsBoissons.vue"
</script>

<template>
  <div class="vh-100 d-flex flex-column justify-content-center align-items-center bg-dark text-light">
    <header class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-auto">
          <img src="../assets/logo.png" alt="Logo" id="logo" />
        </div>
        <div class="col">
          <h1>Les boissons du renard</h1>
        </div>
      </div>
    </header>

    <main class="container mt-4">
      <div class="row g-2 align-items-stretch">
        <div class="col-10">
          <ajouter />
        </div>
        <div class="col-2">
          <exporter />
        </div>
      </div>

      <div class="mt-4 col-10">
        <chercher />
      </div>

      <div class="mt-2 col-12">
        <liste />
      </div>
    </main>

    <footer class="mt-auto">
      <p>allo</p>
    </footer>
  </div>
</template>

<style scoped>
#logo {
  height: 120px;
}
</style>
