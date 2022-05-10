import Head from 'next/head'
import { useQuery } from 'react-query'
import { getProductQuery } from '../queries/queries'
import ProductCard from '../components/ProductCard'

const Home = () => {
  const {
    status,
    data: products,
    isSuccess,
  } = useQuery('products', async () => await getProductQuery())

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        {isSuccess &&
          products.map((product) => (
            <ProductCard
              product_name={product.product_name}
              image={product.product_image.id}
              price={product.price}
              category={product.products_category[0].categories_id.category_name}
              key={product.id}
            />
          ))}
      </main>
    </div>
  )
}

export default Home
