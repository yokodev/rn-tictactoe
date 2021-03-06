import React, { useState } from "react"
import { View, StyleSheet, Text, Button } from "react-native"
import { Icon } from 'react-native-elements'

export default function PlayerInfo({playerName, iconOption, turn}){
  return (
    <View style={[styles.container, turn && styles.up]}>
      <Text style={styles.playerInfo}>{playerName}</Text>
      {iconOption === 'x'? 
        <Icon iconStyle={styles.icon}
          name='alpha-x-circle' type='material-community' />
        :
        <Icon iconStyle={styles.icon}
          name='numeric-0-circle' type='material-community' />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  up:{
    backgroundColor: '#ff8a80'
  },
  container: {
    backgroundColor:'white',
    flex:1,
    padding:2,
    borderWidth:2,
    borderColor: 'grey',
  },
  containerFocus: {
    backgroundColor:'darksalmon',
    flex:1,
    padding:2,
    borderWidth:2,
    borderColor: 'grey',
  },
  playerInfo: {
    textAlign:'center',
    fontWeight:'bold'
  },
  icon: {},
  
})