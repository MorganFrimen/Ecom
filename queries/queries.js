import fetchData from '../halpers/fetchData'
import {
  ProductQuery,
  CategoriesQuery,
  FiltersProductsQuery,
} from './HomepageQueries'

export const getProductQuery = async () => {
  const data = await fetchData(ProductQuery, {
    variables: {},
  })
  return data.data.products
}

export const getCategoriesQuery = async () => {
  const data = await fetchData(CategoriesQuery, {
    variables: {},
  })
  return data.data.categories
}

export const getFiltersProductsQuery = async (categories) => {
  const data = await fetchData(FiltersProductsQuery, {
    variables: { categories },
  })
  return data.data.categories
}
