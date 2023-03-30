<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink class="link" to="/">Home</RouterLink>
      <RouterLink class="link" to="/products">Products</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.link {
  margin-right: 8px;
}
</style>
