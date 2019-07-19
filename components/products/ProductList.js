import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import { ListItem, SearchBar } from 'react-native-elements'
import ProductItem from './ProductItem'



export default function ProductList({products}) {
  const [count, setCount] = useState(0)
  return (
    <ScrollView style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {products.map((l, i) => (
        <ProductItem
          key={l._id}
          title={l.name}
          price={l.price}
        />
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center'
  },
  contentContainer: {
    paddingTop: 30
  },
})


