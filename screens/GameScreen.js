import React, {useState} from "react"
import {
  Text,
  View, Button
} from 'react-native';
import {useNavigation} from 'react-navigation-hooks'

export default function GameScreen() {
  const {navigate} =useNavigation()
  const [count, setCount]= useState(0)
  return (
    <View>
      <Text >Get started by opening</Text>
      <Text >Contando {count}</Text>
      <Button title="increment" onPress={() => setCount(count + 1)} />
      <Button title="Decrement" onPress={() => setCount(count - 1)} />
      <Button title="Go to TicTac" onPress={() => navigate('Tictac')} />
      <Button title="Go to Names" onPress={() => navigate('Names')} />
    </View>
  )
}
