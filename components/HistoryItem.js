import React, { useState } from 'react';
import { StyleSheet, Text, View, } from 'react-native';

import { ListItem } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import { format } from 'date-fns'

export default function HistoryItem({item},key) {
 return(
   <ListItem
      key={key}
      Component={TouchableScale}
       friction={90} //
       tension={100} // These props are passed to the parent component (here TouchableScale)
       activeScale={0.9} //
       title={<TicItem item={item} />}
       leftIcon={{ name:'check-circle',}}
       pad={0}
       bottomDivider={true}
     containerStyle={{ backgroundColor:'#81d4fa', borderRadius:5}}
   />
 ) 

function TicItem({item}) {
  return(
    <View style={{flexDirection:'row'}} >
      <Players players={item.players}/>
      <Winner winner={item.winner}/>
      <WinnigDate date={item.date}/>
    </View>
  )
}
function Players({players}){
  return(
    <View style={{ flex: 2 }} >
      <Text style={[styles.commonText, styles.title, { borderBottomWidth: 1 }]}>Players</Text>
      <View style={styles.content}>
        <Text style={styles.commonText}>{players.x}</Text>
        <Text style={styles.commonText}>Vs</Text>
        <Text style={styles.commonText}>{players.o}</Text>
      </View>
    </View>
  )
}
function Winner({winner}){
  return(
    <View style={{ flex: 2 }}>
      <Text style={[styles.commonText, styles.title,
        { borderLeftWidth:1, borderRightWidth:1,borderBottomWidth:1} ]}>Winner</Text>
      <View style={[styles.content,{borderLeftWidth:1, borderRightWidth: 1}]}>
        <Text style={[styles.commonText,  ]}>{winner}</Text>
      </View>
    </View>
  )
}
function WinnigDate({date}){
  const dAte = format(new Date(), 'MMM/D/YYYY')
  return(
    <View style={{flex:2}} >
      <Text style={[styles.commonText, styles.title, { borderBottomWidth: 1}]}>Date</Text>
      <View style={styles.content}>
        <Text style={[styles.commonText, {textAlign:'auto'}]}>{date}</Text>
      </View>
    </View>
  )
}
}
styles = StyleSheet.create({
  title: { color: 'white', borderColor: 'white', fontWeight: 'bold', textAlign: 'center' },
  content: { justifyContent: 'center', flex: 1, borderColor: 'white' },
  commonText: {
    paddingLeft: 10,
    textAlign: 'center',
  }
})