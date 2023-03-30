<script setup lang="ts">
import { getProducts } from '@/api/products'
import AddProductForm from '@/components/AddProductForm.vue'
import ProductCard from '@/components/ProductCard.vue'
import type { Product } from '@/types'
import { onMounted, reactive } from 'vue'

const state = reactive({ products: [] as Product[] })

const fetchProducts = async () => {
  const products = await getProducts()
  state.products = products
}

onMounted(async () => {
  await fetchProducts()
})
</script>

<template>
  <main>
    <AddProductForm @fetch-products="fetchProducts" />

    <div>
      <ProductCard
        class="product-wrapper"
        v-for="product in state.products"
        :product="product"
        :key="product.id"
      />
    </div>
  </main>
</template>

<style>
.product-wrapper {
  margin-bottom: 10px;
}
</style>
