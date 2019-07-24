//https://stackoverflow.com/questions/53219113/where-can-i-make-api-call-with-hooks-in-react

const API_URL ='https://yokodev-snacks.herokuapp.com'

/**
 *
 * @param {*} {orderBy, name}
 * @returns  an array of products
 */
export const getAllProducts =()=>{
  return fetch(`${API_URL}/products`)
    .then(results => results.json())
    .then(data => data)
  }
  