import Link from 'next/link'
const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL

export default function ProductCard({
  image,
  product_name,
  price,
  category,
  slug,
}) {
  return (
    <Link href={`/products/${category.slug}/${slug}`}>
      <a href="#" className="group">
        <div>
          <img
            className="w-full object-cover object-center group-hover:opacity-75"
            src={`${assetsUrl}/${image}?width=385&height=385`}
            alt="Sunset in the mountains"
          />
        </div>
        <div className="px-6 py-4">
          <h3 className=" mt-0 text-sm text-gray-700">
            {product_name}
            <span className="mb-0 ml-2 inline-block rounded-3xl bg-gray-200 px-2 py-1 text-xs text-gray-500">
              {category.category_name}
            </span>
          </h3>
          <p className="mt-1 text-lg font-medium text-gray-900">${price}</p>
        </div>
      </a>
    </Link>
  )
}
