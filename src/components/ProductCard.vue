<script setup lang="ts">
import type { Product } from '@/types'
import { onMounted } from 'vue'

const props = defineProps<{ product: Product }>()
</script>

<template>
  <router-link :to="{ name: 'product', params: { id: props.product.id } }">
    <v-card>
      <h1>Name: {{ product.name }}</h1>
      <p>Category: {{ product.category }}</p>
    </v-card>
  </router-link>
</template>

<style scoped></style>
