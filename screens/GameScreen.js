import React, { useState } from 'react'
import { Input, Text, Button, Overlay } from 'react-native-elements'
import { View, KeyboardAvoidingView, ScrollView } from 'react-native'
import { useNavigation } from 'react-navigation-hooks'
import { Formik } from 'formik'
import * as yup from 'yup'

const playersSchema = yup.object().shape({
  x: yup.string().required().label('X'),
  o: yup.string().required().label('0'),

})

export default function GameScreen(props) {
  
  const { navigate } = useNavigation()
  const [visible, setVisible] = useState(true)

  const handleSubmit = (values)=>{
    const players = { x: values.x ,o : values.o}
    navigate('Tictac', { players })
  }

  return (
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
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
        <View style={{ flex: 1 }}>
          <View style={{ alignItems: 'center', padding: 10 }}>
            <Text h2>Welcome to Gengis</Text>
          </View>
          <View style={{ padding: 40 }}>
            <Formik
              initialValues={{ x: '', o: '' }}
              onSubmit={values => handleSubmit(values)}
              validationSchema={playersSchema}
            >
              {formProps => (
                <React.Fragment>
                  <Input
                    leftIcon={{ name: 'alpha-x-circle', type: 'material-community' }}
                    autoFocus={true}
                    placeholder="First player"
                    errorStyle={{ color: 'red' }}
                    errorMessage={formProps.errors.x}
                    // shake={formProps.errors ? true : false}
                    onChangeText={formProps.handleChange('x')}
                  />
                  <Input leftIcon={{ name: 'numeric-0-circle', type: 'material-community' }}
                    placeholder="Second player"
                    errorStyle={{ color: 'red' }}
                    errorMessage={formProps.errors.o}
                    shake={formProps.errors ? true : false}
                    onChangeText={formProps.handleChange('o')}
                  />
                  <Button title="Submit" onPress={formProps.handleSubmit} />
                </React.Fragment>
              )}
            </Formik>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}
