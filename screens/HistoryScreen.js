import React, {useState, useEffect} from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import HistoryItem from '../components/HistoryItem'
// import { readItemFromStorage } from '../utils/Functions'
// import { useAsyncStorage } from '@react-native-community/async-storage';
import { AsyncStorage } from 'react-native';

export default function HistoryScreen() {
  const [value, setValue] = useState('value');
  // const [list, setList] = useAsyncStorage('@storage_key');
  // const [list, setList] = useState([])

  // useEffect(() => {
  //   setList(readItemFromStorage())
  // }, []);
  const list= [
    {
      id: 2343,
      players:{
        x:'Jon',
        o: 'Gerardo',
      },
      winner:'Gerardo',
      date:'Jul,4,2019'
    },
    {
      id: 25,
      players: {
        x: 'Jesus',
        o: 'Andres',
      },
      winner: 'Jesus',
      date: 'Jun,14,2019'
    },
    {
      id:23,
      players: {
        x: 'Tony',
        o: 'Cristian',
      },
      winner: 'Cristian',
      date: 'May,2,2019'
    },
  ]

  return (
    <ScrollView style={styles.container}>
      {
        list.map((item,i)=><HistoryItem item={item} key={i}/>)
      }
      {/* <HistoryItem /> */}
    </ScrollView>
  );
}

HistoryScreen.navigationOptions = {
  title: 'History',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
