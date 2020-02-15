import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
    button: {
        width: 70,
        height: 70,
        borderRadius: 100/2,
        backgroundColor: 'transparent',
        borderColor: '#fff',  
        borderWidth: 1,
    },
    text: {
        color: '#fff',
        fontSize: 30,
        alignSelf: 'center',
        padding: 10,
    }

})

export default props => {
    const stylesButton = [styles.button]

    return (
        <TouchableHighlight style={styles.button} onPress={() => props.onClick(props.label)}>
            <Text style={styles.text}>{props.label}</Text>
        </TouchableHighlight>
    )
}