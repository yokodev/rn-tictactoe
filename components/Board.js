import React, {useState }from "react"
import { View, StyleSheet, Text, Button } from "react-native"
import Square from './Square'
import PlayerInfo from '../components/PlayerInfo'
import { calculateWinner } from '../utils/Functions'

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isXnext, setIsXnext] = useState(true)
  const [gameOver, setGameOver] = useState(false)

  const handleClick = (i)=>{
    console.log('squares: ',squares)
    let nextSquares = [...squares]
    nextSquares[i]= 'x' 
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    nextSquares[i] = isXnext ? 'x' : 'o'
    setIsXnext(!isXnext)
    setSquares(nextSquares)
    
    console.log('DESPUES squares: ',squares)
  }
  const winner = calculateWinner(squares)
  let status
  if (winner) {
    status = `Winner: ${winner}`
  } else {
    status = `Next player: ${isXnext ? 'X' : 'O'}`;
  }

  const renderSquare =(i)=> {
    return <Square style={styles.square} value={squares[i]}  onPress={()=>{handleClick(i)}} />;
  }


  // const status = 'Next player: X';

  return (
    <View style={styles.gameBoard}>
      <Text>{status}</Text>
      <View style={styles.playerStatus}> 
        <PlayerInfo playerName="Jesus" iconOption='x' />
        <PlayerInfo playerName="Gerardo" iconOption='0' />
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