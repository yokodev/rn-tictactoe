/*
https://react-native-training.github.io/react-native-elements/blog/2018/12/13/react-native-web.html#0-initial-step
https://react-native-training.github.io/react-native-elements/docs/input.html#shake
https://facebook.github.io/react-native/docs/textinput
https://facebook.github.io/react-native/docs/handling-text-input
https://facebook.github.io/react-native/docs/keyboardavoidingview

*/ 
import React, { useState } from 'react'
import { Input, Text, Button, Overlay } from 'react-native-elements'
import { View, KeyboardAvoidingView, ScrollView } from 'react-native'
import { useNavigation } from 'react-navigation-hooks'
import { Formik } from 'formik'

export default function GameScreen(props) {
  
  const { navigate } = useNavigation()
  const [visible, setVisible] = useState(true)
  let [players, setPlayers] = useState({ x: '', o: '' })
  const [error, setError] = useState(true)

  const checkInputs = () => {
    if (players.x.trim().length > 0 && players.o.trim().length > 0) {
      setError(false)
      return navigate('Tictac', { players })
    } else {
      setError(true)
    }
  }
  const handleSubmit = ()=>{
    alert (`hello submit`)
  }
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled >
      <ScrollView>
        <View style={{ flex: 1 }}>
          <Overlay isVisible={visible} height="auto">
            <View>
              <Text style={{ fontWeight: 'bold' }}>Welcome to Gengis....</Text>
              <Text>
                In the following inputs type in the name of the players.
              </Text>
              <Text>One for X and one for 0 </Text>
              <Text>Good Luck!!! </Text>
              <Button
                title="Got it!"
                containerStyle={{ padding: 10 }}
                onPress={() => setVisible(false)}
              />
            </View>
          </Overlay>
          <View style={{ alignItems: 'center', padding: 10 }}>
            <Text h2>Welcome to Gengis</Text>
          </View>
          <Formik initialValues={{'x':'', 'o':''}} onSubmit={values =>alert(values)}>
            <View style={{ padding: 40 }}>
              <Input leftIcon={{ name: 'alpha-x-circle', type: 'material-community' }}
                autoFocus={true}
                placeholder="First player"
                errorStyle={{ color: 'red' }}
                errorMessage={"Input can't be empty!" }
                shake={true}
                // name="x"
                // onChangeText={text => setPlayers({ ...players, x: text })}
                // value={players.x}
                onChangeText={props.handleChange('x')}
                onBlur={props.handleBlur('x')}
                value={props.values.x}
              />
              <Input leftIcon={{ name: 'numeric-0-circle', type: 'material-community' }}
                placeholder="Second player"
                errorStyle={{ color: 'red' }}
                errorMessage={"Input can't be empty!"}
                shake={true}
                // onChangeText={text => setPlayers({ ...players, o: text })}
                onChangeText={props.handleChange('o')}
                onBlur={props.handleBlur('o')}
                value={props.values.o}
                // value={players.o}
              />
              <Button title="Submit" onPress={props.handleSubmit} />
              {/* <Button title="Submit" onPress={() => checkInputs()} /> */}
              {/* <Button title="Submit" onPress={()=>alert(players.x,players.o)} /> */}
            </View>
          </Formik>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
