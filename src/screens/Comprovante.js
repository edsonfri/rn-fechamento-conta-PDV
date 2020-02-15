import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Dimensions,
      Image,
      Button,
      TouchableHighlight
  } from 'react-native'

  import LinearGradient from "react-native-linear-gradient"

  class Comprovante extends Component {

    constructor(){
        super()
    }

    render() {
        console.log('teste: ' + this.props.navigation.state.params.displayValue)
        console.log('pagamento: ' + this.props.navigation.state.params.payment)
        return (

            <LinearGradient
                colors={["#14D1AF", "#C071D5"]}
                style={{ flex: 1 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }} >

                <View style={styles.container}>
                    <Text style={styles.textComprovanteBold}>Eyemobile Tecnologia LTDA</Text>
                    <Text style={styles.textComprovante}>Rua Airton Roberto de Oliveira Número 64</Text>
                    <Text style={styles.textComprovanteBold}>{this.props.navigation.state.params.displayValue}</Text>
                    <Text style={styles.textComprovante}>{this.props.navigation.state.params.payment}</Text>
                    {/**<Image source={require('../../assets/Images/Recibo_background.png')}
                        style={styles.image}>
                        
                    </Image>**/}
                </View>
                <View style={styles.container}>
                <TouchableHighlight style={styles.button}>
                    <Text style={styles.text}>Confirmar</Text>
                    
                </TouchableHighlight>
                </View>

            </LinearGradient>
        )
           
    }

  }

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column"
    },
    image: {
        height: 400,
        width: 400,
        resizeMode: 'contain',
    },
    button: {
        backgroundColor: '#14D1AF',
        borderRadius: 80,
        borderColor: '#fff',  
        width: 200,
    },
    text: {
        color: '#fff',
        fontSize: 25,
        alignSelf: 'center',
        padding: 10,
        fontFamily: 'DIN Condensed Bold',
    },
    textComprovante: {
        color: 'black',
        fontSize: 20,
        alignSelf: 'center',
        padding: 10,
        fontFamily: 'Tahoma'
        
    },
    textComprovanteBold: {
        color: 'black',
        fontSize: 20,
        alignSelf: 'center',
        padding: 10,
        fontFamily: 'Tahoma Bold'
        
    }
})

  export default Comprovante