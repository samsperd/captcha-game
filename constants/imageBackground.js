import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

const Background = props => {
    return (
        <ImageBackground 
        source={require('../assets/image_background1.jpg')}
        style={styles.imgBackground} 
    >
        { props.children }
    </ImageBackground>
    );
}

const styles = StyleSheet.create({
    imgBackground: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'flex-end',
    }
})

export default Background;
