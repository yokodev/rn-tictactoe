import React, {useState, useEffect} from 'react';
import { ScrollView, StyleSheet,Text, View } from 'react-native';

import { SearchBar } from 'react-native-elements'
import ProductList from '../components/products/ProductList'
import { getAllProducts } from '../service'


export default function ProductHomeScreen() {
  const [count, setCount] = useState(0)
  const [search, setSearch]= useState('')
  let [products, setProducts ]= useState([])

  const updateSearch = search => setSearch(search)

  useEffect(()=>{
    setProducts([...getAllProducts()])
    console.log(products)
  },[])
  
  return (
    <>
      <SearchBar
        placeholder="Search for Products"
        onChangeText={updateSearch}
        value={search}
      />
      <ProductList products={products} />
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  }
});