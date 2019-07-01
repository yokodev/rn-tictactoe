import React from "react"
import {View,StyleSheet,Text } from "react-native"
import { Button } from 'react-native-elements';

export default function Square({ value, onPress }) {
  return (
      <Button 
        title={value ? value : null}
        containerStyle={styles.botonContainer}
        buttonStyle={styles.boton}
        titleStyle={styles.text} 
        type="outline" raised onPress={onPress}/>
  );
}

const styles = StyleSheet.create({
  botonContainer: {
    flex:1,
    padding:1
  },
  boton: {
    flex:1,
  },
  text: {
    fontSize:44,
  }
})
