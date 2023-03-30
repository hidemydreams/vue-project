<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{ label: string; modelValue: any }>()
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <v-text-field v-model="value" :label="label"></v-text-field>
</template>

<style scoped></style>
