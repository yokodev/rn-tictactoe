// import { uuidv1 } from 'uuid/v1'
const uuidv1 = require('uuid/v1')
import { format } from 'date-fns'
import { AsyncStorage } from 'react-native';

// import { useAsyncStorage } from '@react-native-community/async-storage';

export const STOREKEY='myStoreKeY!'
// const { getItem, setItem, mergeItem, removeItem } = useAsyncStorage('STOREKEY')

export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export function getID(){
  const generated = uuidv1()
  return generated
}

export function getmeArecord({players }, winner){
  
  let newItem ={
    id:getID(),
    players:{
      x:players.x,
      o:players.o
    },
    winner:winner,
    date : format(new Date(), 'yyyy-MMM-dd:HH:mm')
    }
  return newItem
}

// export const writeItemToStorage = async newValue => {
//   await setItem(newValue);
//   // setValue(newValue);
//   return newValue
// }

// const readItemFromStorage = async () => {
//   const item = await getItem();
//   // setValue(item);
//   return item
// }