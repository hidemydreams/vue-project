<script setup lang="ts">
import { reactive, onUpdated } from 'vue'
import InputField from './ui/InputField.vue'
import ButtonComponent from './ui/ButtonComponent.vue'
import { addProduct } from '@/api/products'
import type { NewProductData } from '@/types'

const newProductData = reactive<NewProductData>({
  name: '',
  price: 0,
  category: '',
  description: '',
  brand: '',
  quantity: 0
})

const emit = defineEmits(['fetch-products'])

const createProduct = async () => {
  await addProduct(newProductData)
  emit('fetch-products')
}

onUpdated(() => {
  console.log('update', newProductData)
})

console.log(newProductData, 'data')
</script>

<template>
  <form class="form">
    <div class="inputs">
      <InputField v-model="newProductData.name" label="Product name" />
      <InputField v-model="newProductData.price" label="Price" />
      <InputField v-model="newProductData.description" label="Description" />
      <InputField v-model="newProductData.brand" label="Brand" />
      <InputField v-model="newProductData.category" label="Category" />
      <InputField v-model="newProductData.quantity" label="Quantity" />
    </div>
    <ButtonComponent @click="createProduct" text="Submit" />
  </form>
</template>

<style scoped>
.inputs {
}

.form {
  max-width: 400px;
}
</style>
