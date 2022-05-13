export const SingleProductQuery = `
query ($product_slug: String) {
    products (filter: {slug:{_eq: $product_slug }}) {
      id
      product_name
      price
      slug
    	product_description
      product_image{
        id
      }
      products_category{
        categories_id{
          id
          category_name
          slug
        }
      }
    }
  }
`
