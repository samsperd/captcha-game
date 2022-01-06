import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = props => {
    return (
        <TouchableOpacity
        style={{...styles.button, ...props.style}}
    >
        <Text>
            { props.children }
        </Text>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
        borderRadius: 10,
    },
})

export default Button;
