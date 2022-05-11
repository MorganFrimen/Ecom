export const ProductQuery = `
  query{
    products{
      id
      product_name
      price
      product_image{
        id
      }
      products_category{
        categories_id{
          id
          category_name
        }
      }
    }
  }
  `

export const CategoriesQuery = `
  query{
    categories{
      id
      category_name
    }
  }
  `
export const FiltersProductsQuery = `
query ($categories: [Float]) {
  products (filter:{products_category:{categories_id: {id: {_in: $categories }}}}) {
    product_name
    price
    product_image{
      id
    }
    products_category{
      categories_id{
        id
        category_name
      }
    }
  }
}
`
