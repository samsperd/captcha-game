import { 
    StyleSheet, 
    Text, 
    SafeAreaView, 
    StatusBar, 
    TouchableWithoutFeedback, 
    Keyboard, 
    View 
} 
from 'react-native';
import { useState } from 'react';
import Background from './constants/imageBackground';
import Card from './components/Card';
import Button from './components/button';

const arrayShuffle = (o) => {
    for(let j, x, i = o.length; 
        i; 
        j = parseInt(Math.random() * i),
        x = o[--i],
        o[i] = o[j],
        o[j] = x);
        return o;
}


export default function App() {

    const buttons = [];

    for (let index = 1; index < 10; index++) {
        buttons.push(<Button style={styles.buttonSize} >    { index }   </Button>);
        
    }
    buttons.push(
        <Button style={styles.buttonSize}>
            0
        </Button>
    );

    let shuf;

    shuf = arrayShuffle(buttons);



    return ( 
        <TouchableWithoutFeedback 
      onPress = {() => Keyboard.dismiss() }
      >
            
            <SafeAreaView style = { styles.container } >
                <Background>
                    <View style={styles.topContainer}>
                        <Card style={styles.topScreen}>
                            <Text>
                                Top Screen
                            </Text>
                        </Card>
                    </View>
                    {/* <Card style={styles.cardContain}> */}
                    <View style={styles.cardContain}>
                        { 
                         shuf
                        }
                    </View>
                </Background>
            </SafeAreaView>

        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    cardContain: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        // backgroundColor: 'orange',
        flex: 1
    },
    buttonSize: {
        width: 100,
        margin: 7,
    },
    topContainer: {
        flex: 1,
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    topScreen: {
        width: 350,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center'
    }
});