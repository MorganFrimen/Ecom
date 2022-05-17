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
      avalibale_color{
        product_colors_id{
          id
          color_value
          color_name
        }
      }
      avalibal_sizes{
        product_sizes_id{
          id
          long_title
          short_title
        }
      }
      show_sizes
      show_colors
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
