<script setup lang="ts">
import { type boissons } from '../scripts/types'

const props = defineProps<{ boissonsListe: boissons[] }>()

function exporterCSV() {
  const boissons = props.boissonsListe
    .map(
      boisson =>
        `${boisson.id},"${boisson.nom}","${boisson.description}",${boisson.prix},${boisson.quantite}`
    )
    .join('\n')

  const blob = new Blob([boissons], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)

  const lien = document.createElement('a')
  lien.href = url
  lien.download = 'boissons.csv'
  document.body.appendChild(lien)
  lien.click()
  document.body.removeChild(lien)
}
</script>

<template>
  <button class="btn btn-primary btn-lg" @click="exporterCSV">
    Exporter vers CSV
  </button>
</template>
