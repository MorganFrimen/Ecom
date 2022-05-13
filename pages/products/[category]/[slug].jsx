import { SingleProductQuery } from '../../../queries/SingleProductQueries'
import getData from '../../../queries/getData'
import Head from 'next/head'
import ReactHtmlParser from 'react-html-parser'

const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL

export default function ProductPage({ product }) {
  return (
    <section className="max-w-2x1 mx-auto py-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-4">
      <Head>
        <title>E-commerce-Site | {product.product_name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-row">
        <div className="w-32 flex-1">
          <img
            className="w-full object-cover object-center group-hover:opacity-75"
            src={`${assetsUrl}/${product.product_image.id}?width=500`}
          />
        </div>
        <div className="mt-2 w-32 flex-1 md:ml-4">
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">
            {product.product_name}
          </h1>
          <h2>{ReactHtmlParser(product.product_description)}</h2>
        </div>
      </div>
    </section>
  )
}

export const getServerSideProps = async (ctx) => {
  const { slug } = ctx.query
  const data = await getData(SingleProductQuery, 'products', {
    product_slug: slug,
  })
  return {
    props: {
      product: data[0],
    },
  }
}
