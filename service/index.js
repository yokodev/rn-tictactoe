//https://stackoverflow.com/questions/53219113/where-can-i-make-api-call-with-hooks-in-react

// const API_URL ='https://yokodev-snacks.herokuapp.com'
// const API_URL ='172.17.0.1:3000'
const API_URL ='http://192.168.5.30'

/**
 *
 * @param {*} {orderBy, name}
 * @returns  an array of products
 */
export const getAllProducts =()=>{
  return fetch(`${API_URL}:3000/products`)
    .then(results => results.json())
    .then(data => data)
    // .catch(err=>{
    //   return Promise.reject(err)
    // })
  }
  