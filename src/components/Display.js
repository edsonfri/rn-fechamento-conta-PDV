import React from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'

const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    displayValue: {
        fontSize: 60,
        color: '#fff',
        fontFamily: 'DIN Condensed Bold',
    },
    displayValuePagar: {
        fontSize: 20,
        color: '#fff',
        fontFamily: 'DIN Condensed Bold',
    }
})

export default props => 
    <View style={styles.display}>
        <Text style={styles.displayValue}
            numberOfLines={1}>{props.value}</Text>
        <Text style={styles.displayValuePagar}
            numberOfLines={1}>TOTAL A PAGAR</Text>
    </View>