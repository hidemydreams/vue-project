import type { NewProductData, Product } from '@/types'
import axios from 'axios'

export const getProducts = async () => {
  const result = await axios.get<Product[]>('http://localhost:3000/products')
  return result.data
}

export const addProduct = async (data: NewProductData): Promise<Product> => {
  const result = await axios.post<Product>('http://localhost:3000/products', data)
  return result.data
}
