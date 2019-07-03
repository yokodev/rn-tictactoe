import React, {useState }from "react"
import { View, StyleSheet, Text,Alert } from "react-native"
import Square from './Square'
import PlayerInfo from '../components/PlayerInfo'
import { calculateWinner } from '../utils/Functions'

import { useNavigation, useNavigationParam, } from 'react-navigation-hooks'

export default function Board(props) {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isXnext, setIsXnext] = useState(true)
  const [gameOver, setGameOver] = useState(false)
  const players = useNavigationParam('players')

  const resetGame = ()=>{
    console.log('antes  ',squares)
    setSquares(Array(9).fill(null))
    setIsXnext(true)
    console.log('despues  ',squares)
    // setGameOver(false)
  }
  
  const handleClick = (i)=>{
    let nextSquares = [...squares]
    nextSquares[i]= 'x' 
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    nextSquares[i] = isXnext ? 'X' : '0'
    setIsXnext(!isXnext)
    setSquares(nextSquares)
  }
  const winner = calculateWinner(squares)
  let status
  if (winner) {
    status = `Winner: ${winner}`
    Alert.alert(
      'Winner',
      `The winner is ${winner === 0 ? players.o: players.x}`,
      [
        {text:'Save and Exit', onPress:()=> console.log('Save game')},
        {text: 'Rematch', onPress: ()=>resetGame(),style:'cancel'},
      ],
      {cancelable: false},
    )
    // resetGame()
  } else {
    status = `Next player: ${isXnext ? players.x : players.o}`;
  }

  const renderSquare =(i)=> {
    return <Square style={styles.square} value={squares[i]}  onPress={()=>{handleClick(i)}} />;
  }

  return (
    <View style={styles.gameBoard}>
      <Text>{status}</Text>
      <View style={styles.playerStatus}> 
        <PlayerInfo playerName={players.x} iconOption='x' turn={isXnext ? true : false} />
        <PlayerInfo playerName={players.o} iconOption='0' turn={isXnext ? false : true}/>
      </View>
      <View style={styles.boardRow}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </View>
      <View style={styles.boardRow}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </View>
      <View style={styles.boardRow}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  boardRow: {
    flex:1,
    flexDirection:'row',
    backgroundColor: 'red',
  },
  game: {
  },
  gameBoard: {
    flex:1,
    padding:40,
  },
  playerStatus:{
    padding:5,
    flexDirection: 'row',
  },
  gameInfo: {
  }
})