import Head from 'next/head'
import { useQuery } from 'react-query'
import getData from '../queries/getData'
import ProductCard from '../components/ProductCard'
import Filters from '../components/Filters'
import { useState } from 'react'
import {
  CategoriesQuery,
  FiltersProductsQuery,
  ProductQuery,
} from '../queries/HomepageQueries'

async function handleProductFiltering({ queryKey }) {
  const [_] = queryKey
  if (_.length) {
    return await getData(FiltersProductsQuery, 'products', {
      categories: queryKey[0],
    })
  }
  return await getData(ProductQuery, 'products')
}

const Home = () => {
  const [selectedCategories, setSelectedCategories] = useState([])
  const { data: products, isSuccess } = useQuery(
    [selectedCategories],
    handleProductFiltering
  )
  const { data: categories, isSuccess: categoriesSuccess } = useQuery(
    'categories',
    async () => await getData(CategoriesQuery, 'categories')
  )

  const getSelectedCategories = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      )
      return
    }
    setSelectedCategories([...selectedCategories, category])
  }

  return (
    <div className="max-w-2x1 mx-auto py-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-4 ">
      <Head>
        <title>E-commerce-Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2 className="text-2x1 font-extrabold tracking-tight text-gray-900 ">
        Lastet products
      </h2>

      {categoriesSuccess && (
        <Filters
          categories={categories}
          getSelectedCategories={getSelectedCategories}
        />
      )}

      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 ">
        {isSuccess &&
          products.map((product) => (
            <ProductCard
              product_name={product.product_name}
              image={product.product_image.id}
              price={product.price}
              category={product.products_category[0].categories_id}
              key={product.id}
              slug={product.slug}
            />
          ))}
      </div>
    </div>
  )
}

export default Home
