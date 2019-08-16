import React from "react"
import {View,StyleSheet,Text } from "react-native"
import { Button, ListItem } from 'react-native-elements'

export default function ProductItem({title, price }) {
  return (
    <ListItem
          // leftAvatar={{ source: { uri: l.avatar_url } }}
          title={title}
          // subtitle={l.subtitle}
          chevron={true}
          rightTitle={`$${price}`}
        />
  )
}

const styles = StyleSheet.create({
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  }
})
