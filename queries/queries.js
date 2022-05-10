import fetchData from '../halpers/fetchData'
import {ProductQuery} from './HomepageQueries'


export const getProductQuery = async () => {
  const data = await fetchData( 
      ProductQuery,
    {
      variables: {},
    }
  )
  return data.data.products
}