import React from 'react';
import { Text, Alert } from 'react-native';

export default function MyAlert( title, msg, fnCancel = () => { }, fnOk = () => { } ) {
  return (
    Alert.alert(
      `${title}: `,
      `${msg}`,
      [
        { text: 'Cancel', fnCancel },
        { text: 'Ok', fnOk },
      ], { cancelable: true }

    )
  );
}
    
    // <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />