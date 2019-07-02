import React, {useState} from "react"
import { Input, Text, Button, Overlay } from 'react-native-elements';
import { View, KeyboardAvoidingView } from 'react-native';
import {useNavigation} from 'react-navigation-hooks'

export default function GameScreen() {
  const {navigate} =useNavigation()
  const [visible, setVisible]= useState(true)
  return (
    <View style={{flex:1}}>
      <Overlay isVisible={visible} height="auto" >
        <View>
          <Text style={{fontWeight:'bold'}}>Welcome to Gengis....</Text>
          <Text>In the following inputs type in the name of the players.</Text>
          <Text>One for X and one for 0 </Text>
          <Text>Good Luck!!! </Text>
          <Button title='Got it!' containerStyle={{padding:10}} onPress={() => setVisible(false)} />
        </View>
      </Overlay>
      <View style={{alignItems:'center', padding:10 }}>
        <Text h2 >Welcome to Gengis</Text>
      </View>
      <View style={{ padding: 40 }}>
        <Input
          label={'Player X'}
          placeholder='Name of the first player'
          errorStyle={{ color: 'red' }}
          errorMessage="Input can't be empty!"
          shake={true}
        />
        <Input
          label={'Player 0'}
          placeholder='Name of the second player'
          errorStyle={{ color: 'red' }}
          errorMessage="Input can't be empty!"
          shake={true}
        />
        <Button title="Submit" onPress={()=>navigate('Tictac')} />
        </View>
    </View>
  )
}
