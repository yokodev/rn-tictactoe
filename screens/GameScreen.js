import React, {useState} from "react"
import { Input, Text, Button, Overlay } from 'react-native-elements';
import { View, KeyboardAvoidingView, ScrollView } from 'react-native';
import {useNavigation} from 'react-navigation-hooks'

export default function GameScreen() {
  const {navigate} =useNavigation()
  const [visible, setVisible]= useState(true)
  let   [players, setPlayers]= useState({x:'',o:''})
  const [error, setError]= useState(true)

const checkInputs = ()=>{
  if (players.x.trim().length > 0 && players.o.trim().length > 0  ){
    setError(false); 
    console.log('entro FAK'); 
    return navigate('Tictac', { players })
  }else{
    setError(true); console.log('FAK')
  }
}
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <Overlay isVisible={visible} height="auto" >
          <View>
            <Text style={{ fontWeight: 'bold' }}>Welcome to Gengis....</Text>
            <Text>In the following inputs type in the name of the players.</Text>
            <Text>One for X and one for 0 </Text>
            <Text>Good Luck!!! </Text>
            <Button title='Got it!' containerStyle={{ padding: 10 }} onPress={() => setVisible(false)} />
          </View>
        </Overlay>
        <View style={{ alignItems: 'center', padding: 10 }}>
          <Text h2 >Welcome to Gengis</Text>
        </View>
        <View style={{ padding: 40 }}>
          <Input
            leftIcon={{ name: 'alpha-x-circle', type: 'material-community' }}
            placeholder='First player'
            errorStyle={{ color: 'red' }}
            errorMessage={error ? "Input can't be empty!":null}
            shake={error  ? true : false}
            name='x'
            onChangeText={(text) => setPlayers({ ...players, x: text })}
            value={players.x}
          />
          <Input
            leftIcon={{ name: 'numeric-0-circle', type: 'material-community' }}
            placeholder='Second player'
            errorStyle={{ color: 'red' }}
            errorMessage={error ? "Input can't be empty!":null}
            shake={error ? true : false}
            name='o'
            onChangeText={(text) => setPlayers({ ...players, o: text })}
            value={players.o}
          />
          <Button title="Submit" onPress={() =>checkInputs()} />
          {/* <Button title="Submit" onPress={()=>alert(players.x,players.o)} /> */}
        </View>
      </View>
    </ScrollView>
  )
}
