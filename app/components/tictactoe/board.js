import React, {useState, useEffect} from 'react'; //use useState hook only inside Function Components
import { Button, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Board() {
    const mark_me = 'X';
    const mark_you = 'O';

    const turn_me = 'Me';
    const turn_you = 'You';

    const [mark_1, setMark_1] = useState('*');
    const [mark_2, setMark_2] = useState('*');
    const [mark_3, setMark_3] = useState('*');

    const [mark_4, setMark_4] = useState('*');
    const [mark_5, setMark_5] = useState('*');
    const [mark_6, setMark_6] = useState('*');

    const [mark_7, setMark_7] = useState('*');
    const [mark_8, setMark_8] = useState('*');
    const [mark_9, setMark_9] = useState('*');

    const [turn, setTurn] = useState(turn_me);

    const pressFunction1 = () => {
        if(turn == turn_me){
            setTurn(prevTurn => turn_you);
        }
        else{
            setTurn(prevTurn => turn_me);
        }
        if(turn == turn_me){
            setMark_1(prevMark_1 => mark_me);
        }
        else{
            setMark_1(prevMark_1 => mark_you);
        }
    }

    const pressFunction2 = () => {
        if(turn == turn_me){
            setTurn(prevTurn => turn_you);
        }
        else{
            setTurn(prevTurn => turn_me);
        }
        if(turn == turn_me){
            setMark_2(prevMark_2 => mark_me);
        }
        else{
            setMark_2(prevMark_2 => mark_you);
        }
    }

    const pressFunction3 = () => {
        if(turn == turn_me){
            setTurn(prevTurn => turn_you);
        }
        else{
            setTurn(prevTurn => turn_me);
        }
        if(turn == turn_me){
            setMark_3(prevMark_3 => mark_me);
        }
        else{
            setMark_3(prevMark_3 => mark_you);
        }
    }

    const pressFunction4 = () => {
        if(turn == turn_me){
            setTurn(prevTurn => turn_you);
        }
        else{
            setTurn(prevTurn => turn_me);
        }
        if(turn == turn_me){
            setMark_4(prevMark_4 => mark_me);
        }
        else{
            setMark_4(prevMark_4 => mark_you);
        }
    }

    const pressFunction5 = () => {
        if(turn == turn_me){
            setTurn(prevTurn => turn_you);
        }
        else{
            setTurn(prevTurn => turn_me);
        }
        if(turn == turn_me){
            setMark_5(prevMark_5 => mark_me);
        }
        else{
            setMark_5(prevMark_5 => mark_you);
        }
    }

    const pressFunction6 = () => {
        if(turn == turn_me){
            setTurn(prevTurn => turn_you);
        }
        else{
            setTurn(prevTurn => turn_me);
        }
        if(turn == turn_me){
            setMark_6(prevMark_6 => mark_me);
        }
        else{
            setMark_6(prevMark_6 => mark_you);
        }
    }

    const pressFunction7 = () => {
        if(turn == turn_me){
            setTurn(prevTurn => turn_you);
        }
        else{
            setTurn(prevTurn => turn_me);
        }
        if(turn == turn_me){
            setMark_7(prevMark_7 => mark_me);
        }
        else{
            setMark_7(prevMark_7 => mark_you);
        }
    }

    const pressFunction8 = () => {
        if(turn == turn_me){
            setTurn(prevTurn => turn_you);
        }
        else{
            setTurn(prevTurn => turn_me);
        }
        if(turn == turn_me){
            setMark_8(prevMark_8 => mark_me);
        }
        else{
            setMark_8(prevMark_8 => mark_you);
        }
    }

    const pressFunction9 = () => {
        if(turn == turn_me){
            setTurn(prevTurn => turn_you);
        }
        else{
            setTurn(prevTurn => turn_me);
        }
        if(turn == turn_me){
            setMark_9(prevMark_9 => mark_me);
        }
        else{
            setMark_9(prevMark_9 => mark_you);
        }
    }

    const resetBoard = () => {
        setMark_1(prevMark_1 => '*');
        setMark_2(prevMark_2 => '*');
        setMark_3(prevMark_3 => '*');
        setMark_4(prevMark_4 => '*');
        setMark_5(prevMark_5 => '*');
        setMark_6(prevMark_6 => '*');
        setMark_7(prevMark_7 => '*');
        setMark_8(prevMark_8 => '*');
        setMark_9(prevMark_9 => '*');
    }

    const checkIfDisabled = (chosenMark) => {
        if(chosenMark != '*')
        {
            return true;
        }
    }

    //used this hook to check status of game after each played turn
    useEffect(() => {
        if((mark_1 == mark_you && mark_2 == mark_you && mark_3 ==mark_you)|| 
            (mark_1 == mark_me && mark_2 == mark_me && mark_3 ==mark_me) ||
            (mark_1 == mark_me && mark_5 == mark_me && mark_9 == mark_me) ||
            (mark_1 == mark_you && mark_5 == mark_you && mark_9 == mark_you) ||
            (mark_2 == mark_me && mark_5 == mark_me && mark_8 == mark_me) ||
            (mark_2 == mark_you && mark_5 == mark_you && mark_8 == mark_you) ||
            (mark_1 == mark_me && mark_4 == mark_me && mark_7 == mark_me) ||
            (mark_1 == mark_you && mark_4 == mark_you && mark_7 == mark_you) ||
            (mark_4 == mark_me && mark_5 == mark_me && mark_6 == mark_me) ||
            (mark_4 == mark_you && mark_5 == mark_you && mark_6 == mark_you) ||
            (mark_7 == mark_me && mark_8 == mark_me && mark_9 == mark_me) ||
            (mark_7 == mark_you && mark_8 == mark_you && mark_9 == mark_you) ||
            (mark_3 == mark_me && mark_5 == mark_me && mark_7 == mark_me) ||
            (mark_3 == mark_you && mark_5 == mark_you && mark_7 == mark_you) ||
            (mark_3 == mark_me && mark_6 == mark_me && mark_9 == mark_me) ||
            (mark_3 == mark_you && mark_6 == mark_you && mark_9 == mark_you)){        
            alert(turn + ' won!')
        }
    })

    return(
            <View>
                <Text>This is a Test Tic Tac Toe Game:</Text>
                <Text>Turn: {turn}</Text>
                <View style = {styles.container}>
                    <View style={styles.boardCol}>
                        <TouchableOpacity
                            style={styles.markBtn}
                            onPress={pressFunction1}
                            disabled={checkIfDisabled(mark_1)}
                        >
                            <Text style={styles.markText}>{mark_1}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.markBtn}
                            onPress={pressFunction2}
                            disabled={checkIfDisabled(mark_2)}
                        >
                            <Text style={styles.markText}>{mark_2}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.markBtn}
                            onPress={pressFunction3}
                            disabled={checkIfDisabled(mark_3)}
                        >
                            <Text style={styles.markText}>{mark_3}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.boardCol}>
                        <TouchableOpacity
                            style={styles.markBtn}
                            onPress={pressFunction4}
                            disabled={checkIfDisabled(mark_4)}
                        >
                            <Text style={styles.markText}>{mark_4}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.markBtn}
                            onPress={pressFunction5}
                            disabled={checkIfDisabled(mark_5)}
                        >
                            <Text style={styles.markText}>{mark_5}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.markBtn}
                            onPress={pressFunction6}
                            disabled={checkIfDisabled(mark_6)}
                        >
                            <Text style={styles.markText}>{mark_6}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.boardCol}>
                        <TouchableOpacity
                            style={styles.markBtn}
                            onPress={pressFunction7}
                            disabled={checkIfDisabled(mark_7)}
                        >
                            <Text style={styles.markText}>{mark_7}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.markBtn}
                            onPress={pressFunction8}
                            disabled={checkIfDisabled(mark_8)}
                        >
                            <Text style={styles.markText}>{mark_8}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.markBtn}
                            onPress={pressFunction9}
                            disabled={checkIfDisabled(mark_9)}
                        >
                            <Text style={styles.markText}>{mark_9}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Button title="Reset Board" onPress={resetBoard}/>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f5e0ef',
      alignItems: 'center',
      justifyContent: 'center',
    },
    boardCol:{
        width: '25%',
        height: '18%',
        flexDirection: 'row'
    },
    markBtn: {
        marginRight: '35%',
        marginTop: '35%'
    },
    markText: {
        fontSize: 25,
    }
  });

  //RAF:
  // 1. score
  // 2. review the layout
  // 3. Alert: correct the name of the winner