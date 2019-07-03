import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import moment from "moment"
import { ListItem } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale


export default function HistoryItem() {
  const list = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    },
  ]
 return(

   <ListItem
      Component={TouchableScale}
       friction={90} //
       tension={100} // These props are passed to the parent component (here TouchableScale)
       activeScale={0.9} //
      //  linearGradientProps={{
      //    colors: ['#FF9800', '#F44336'],
      //    start: [1, 0],
      //    end: [0.2, 0],
      //  }}
       title={<TicItem/>}
       leftIcon={{ name:'check-circle',}}
       pad={0}
      //  bottomDivider={true}
     containerStyle={{ backgroundColor:'#81d4fa', borderRadius:10}}
   />
 ) 
}
function TicItem() {
  return(
    <View style={{flexDirection:'row'}} >
      <Players/>
      <Winner/>
      <WinnigDate/>
    </View>
  )
}
function Players(){
  return(
    <View style={{ flex: 2 }} >
      <Text style={[styles.commonText, styles.title, { borderBottomWidth: 1 }]}>Players</Text>
      <View style={styles.content}>
        <Text style={styles.commonText}>Jon as X</Text>
        <Text style={styles.commonText}>Vs</Text>
        <Text style={styles.commonText}>Gerardo as 0</Text>
      </View>
    </View>
  )
}
function Winner(){
  return(
    <View style={{ flex: 2 }}>
      <Text style={[styles.commonText, styles.title,
        { borderLeftWidth:1, borderRightWidth:1,borderBottomWidth:1} ]}>Winner</Text>
      <View style={[styles.content,{borderLeftWidth:1, borderRightWidth: 1}]}>
        <Text style={[styles.commonText,  ]}>Gerardo, 0</Text>
      </View>
    </View>
  )
}
function WinnigDate(){
  return(
    <View style={{flex:2}} >
      <Text style={[styles.commonText, styles.title, { borderBottomWidth: 1}]}>Date</Text>
      <View style={styles.content}>
        <Text style={[styles.commonText, {textAlign:'auto'}]}>{moment().calendar()}</Text>
      </View>
    </View>
  )
}

styles = StyleSheet.create({
  title: { color: 'white', borderColor: 'white', fontWeight: 'bold', textAlign: 'center' },
  content: { justifyContent: 'center', flex: 1, borderColor: 'white' },
  commonText: {
    paddingLeft: 10,
    textAlign: 'center',
  }
})