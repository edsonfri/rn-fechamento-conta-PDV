import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    TouchableHighlight
  } from 'react-native'
  import SvgUri from 'react-native-svg-uri'
  import LinearGradient from "react-native-linear-gradient"

  class Comprovante extends Component {

    constructor(){
        super()
        this.state = {
            date: '',
        }
    }

    formatValue = value => {
        const val = Number(value)
        return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    componentDidMount() {
        var that = this;
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        
        that.setState({
          date:
            date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
        });
      }

    render() {
        return (

            <LinearGradient
                colors={["#14D1AF", "#C071D5"]}
                style={{ flex: 1 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }} >
                <View style={styles.container}>
                    <ImageBackground source={require('../../assets/Images/Recibo_background.png')} style={styles.image}>
                        <Text style={styles.textComprovanteTop}></Text>
                        <SvgUri width={120} height={120} source={require('../../assets/Icones/ic_logo.svg')} />
                        <Text style={styles.textComprovanteBold}>Eyemobile Tecnologia LTDA</Text>
                        <Text style={styles.textComprovante}>Rua Airton Roberto de Oliveira Número 64</Text>
                        <Text style={styles.textTotalBold}>{this.formatValue(this.props.navigation.state.params.displayValue)}</Text>
                        <Text style={styles.textComprovante}>{this.props.navigation.state.params.payment}</Text>
                        <Text style={styles.textComprovante}>{this.state.date}</Text>
                    </ImageBackground>
                </View>
                <View style={styles.containerButton}>
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
        flexDirection: "column",
        paddingTop: 50,
    
    },
    containerButton: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
        paddingTop: 200,
    
    },
    image: {
        flex: 1,
        height: 400,
        width: 240,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column"
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
        fontSize: 13,
        alignSelf: 'center',
        padding: 10,
        fontFamily: 'Tahoma',
        textAlign: 'center'
    },
    textComprovanteBold: {
        color: 'black',
        fontSize: 13,
        alignSelf: 'center',
        fontFamily: 'Tahoma Bold'
        
    },
    textComprovanteTop: {
        paddingTop: 170,
        color: 'black',
        fontSize: 13,
        alignSelf: 'center',
        padding: 10,
        fontFamily: 'Tahoma Bold'
    },
    textTotalBold: {
        paddingTop: 50,
        color: 'black',
        fontSize: 23,
        alignSelf: 'center',
        padding: 10,
        fontFamily: 'Tahoma Bold'
    }
})

export default Comprovante