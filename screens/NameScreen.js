import React from 'react'
import {View, Text } from 'react-native'
import { useNavigation } from 'react-navigation-hooks'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Input, Button } from 'react-native-elements'


export default function NameScreen(){
  const {navigate} =useNavigation()

  return (
    <View>
      <Text>Welcome to Gengis</Text>
      <Input
        placeholder="Enter the name of the first player"
        errorStyle={{ color: 'red' }}
        errorMessage="Need to be something"
      />
      <Button title="Go to TicTac" onPress={() => navigate('Tictac')} />
      <Button title="Go to Names" onPress={() => navigate('Home')} />
    </View>
  )
}



