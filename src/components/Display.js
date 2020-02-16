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

export default  props => { 
    const value = Number(props.value)
    console.log(value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
    
    const valueForm = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    
    return (
    <View style={styles.display}>
        <Text style={styles.displayValue}
            numberOfLines={1}>{valueForm}</Text>
        <Text style={styles.displayValuePagar}
            numberOfLines={1}>TOTAL A PAGAR</Text>
    </View>
    )
}