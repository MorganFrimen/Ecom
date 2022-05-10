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