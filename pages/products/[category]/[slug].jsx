import { SingleProductQuery } from '../../../queries/SingleProductQueries'
import getData from '../../../queries/getData'
import Head from 'next/head'
import ReactHtmlParser from 'react-html-parser'

const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL

export default function ProductPage({ product }) {
  console.log(product)
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
          <div>
            {ReactHtmlParser(product.product_description)}
            {product.show_colors && (
              <div className="mt-4">
                <p className="mb-4 font-bold"> Choose a color</p>
                <div className="flex">
                  {product.avalibale_color.map((color) => (
                    <div key={color.product_colors_id}>
                      <label className="inline-flex cursor-pointer items-center">
                        <input
                          type="radio"
                          value={color.product_colors_id}
                          className="peer absolute mr-2 h-0 w-0 opacity-0"
                          name="color"
                        />
                        <span
                          className="mr-2 h-8 w-8 rounded-2xl border-2 border-white peer-checked:shadow-[0_0_0_2px_rgba(204,204,204)]"
                          style={{
                            background: color.product_colors_id.color_value,
                          }}
                        ></span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {product.show_sizes && (
              <div className="mt-4">
                <p className="mb-4 font-bold"> Choose a size</p>
                <div className="flex">
                  {product.avalibal_sizes.map((size) => (
                    <div key={size.product_size_id}>
                      <label className="inline-flex cursor-pointer items-center">
                        <input
                          type="radio"
                          value={size.product_size_id}
                          className="peer absolute mr-2 h-0 w-0 opacity-0"
                          name="color"
                        />
                        <span className="mr-2 flex h-8 w-8 items-center justify-center rounded border-2 border-gray-300 peer-checked:border-black peer-checked:bg-black peer-checked:text-white">
                          {size.product_sizes_id.short_title}
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
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
