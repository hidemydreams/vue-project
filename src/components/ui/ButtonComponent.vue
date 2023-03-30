<script setup lang="ts">
const props = defineProps<{ text: string }>()
</script>

<template>
  <v-btn width="100%" color="indigo-darken-3"> {{ text }} </v-btn>
</template>

<style scoped></style>
