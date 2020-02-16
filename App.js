import React, { Component } from 'react'
import {
	StyleSheet,
	View,
	Text,
	TouchableHighlight
} from 'react-native'

import ButtonComponent from './src/components/Button'
import Display from './src/components/Display'
import { Pages } from 'react-native-pages'
import LinearGradient from "react-native-linear-gradient"
import SvgUri from 'react-native-svg-uri'

const initialState = {
	displayValue: '0',
	clearDisplay: false,
	operation: null,
	values: [0, 0],
	current: 0,
}

class App extends Component {
	state = { ...initialState }

	render() {
		return (
			<LinearGradient
				colors={["#771CBB", "#BD62CE"]}
				style={{ flex: 1 }}
				start={{ x: 0, y: 0 }}
				end={{ x: 0, y: 1 }}
			>
				<View style={styles.container}>
					<View style={{ flex: 1 }} >
						<Display value={this.state.displayValue} />
					</View>

					<View style={styles.buttonsContainer}>
						<View style={styles.buttonInLine}>
							<ButtonComponent label='1' onClick={this.addDigit} />
							<ButtonComponent label='2' onClick={this.addDigit} />
							<ButtonComponent label='3' onClick={this.addDigit} />
						</View>
						<View style={styles.buttonInLine}>
							<ButtonComponent label='4' onClick={this.addDigit} />
							<ButtonComponent label='5' onClick={this.addDigit} />
							<ButtonComponent label='6' onClick={this.addDigit} />
						</View>
						<View style={styles.buttonInLine}>
							<ButtonComponent label='7' onClick={this.addDigit} />
							<ButtonComponent label='8' onClick={this.addDigit} />
							<ButtonComponent label='9' onClick={this.addDigit} />
						</View>
						<View style={styles.buttonInLine}>
							<Text style={styles.text2}>   </Text>

							<ButtonComponent label='0' onClick={this.addDigit} />
							<ButtonComponent label='<' onClick={this.clearMemory} />
						</View>
					</View>
					<View style={{ flex: 1, paddingLeft: 35, paddingRight: 35 }} >
						<Pages containerStyle={{ height: '80%', width: '100%', backgroundColor: '#fff', borderTopLeftRadius: 20, borderTopRightRadius: 20 }} indicatorColor={'#771CBB'}>
							<View style={{ height: '100%', width: '100%', flexDirection: 'row', alignSelf: 'center', paddingTop: 25, justifyContent: 'center' }} >
								<View style={{alignItems: 'center', alignContent: 'center'}}>
									<TouchableHighlight style={styles.button} onPress={() => this.props.navigation.navigate('Comprovante', { displayValue: this.state.displayValue, payment: 'Dinheiro' })} >
										<SvgUri width={40} height={40} source={require('./assets/Icones/ic_money.svg')} />
									</TouchableHighlight>
									<Text style={styles.text}>DINHEIRO</Text>
								</View>
								<View style={{alignItems: 'center', alignContent: 'center'}}> 
									<TouchableHighlight style={styles.button} onPress={() => this.props.navigation.navigate('Comprovante', { displayValue: this.state.displayValue, payment: 'Débito' })} >
										<SvgUri width={40} height={40} source={require('./assets/Icones/ic_debit.svg')} />
									</TouchableHighlight>
									<Text style={styles.text}>DÉBITO</Text>
								</View>
								<View style={{alignItems: 'center', alignContent: 'center'}}>
									<TouchableHighlight style={styles.button} onPress={() => this.props.navigation.navigate('Comprovante', { displayValue: this.state.displayValue, payment: 'Crédito' })} >
										<SvgUri width={40} height={40} source={require('./assets/Icones/ic_credit.svg')} />
									</TouchableHighlight>
									<Text style={styles.text}>CRÉDITO</Text>
								</View>
							</View>
							<View style={{ height: '100%', width: '100%', flexDirection: 'row', alignItems: 'center', alignContent: 'center', justifyContent: 'center'}} >
								
								<View style={{alignItems: 'center', alignContent: 'center'}}>
									<TouchableHighlight style={styles.button} onPress={() => this.props.navigation.navigate('Comprovante', { displayValue: this.state.displayValue, payment: 'V.R' })} >
										<SvgUri width={40} height={40} source={require('./assets/Icones/ic_vr.svg')} />
									</TouchableHighlight>
									<Text style={styles.text}>V.R</Text>
								</View>
								<View style={{alignItems: 'center', alignContent: 'center'}}>
									<TouchableHighlight style={styles.button} onPress={() => this.props.navigation.navigate('Comprovante', { displayValue: this.state.displayValue, payment: 'CUPOM' })} >
										<SvgUri width={40} height={40} source={require('./assets/Icones/ic_cupom.svg')} />
									</TouchableHighlight>
									<Text style={styles.text}>CUPOM</Text>
								</View>
							</View>

						</Pages>
					</View>

				</View>
			</LinearGradient>
		);
	}

	addDigit = n => {
		const clearDisplay = this.state.displayValue === 'R$ 0,00' || this.state.clearDisplay
		const currentValue = clearDisplay ? '' : this.state.displayValue
		const displayValue = currentValue + n

		this.setState({ displayValue })
	}

	clearMemory = () => {
		this.setState({ ...initialState })
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between'
	},
	buttonsContainer: {
		paddingLeft: 35,
		paddingRight: 35,
		flex: 2.8,
		width: '100%',
		height: '150%',
	},
	buttonInLine: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: "space-around"
	},
	button: {
        width: 40,
        height: 40,
        borderRadius: 100/2,
		backgroundColor: 'transparent',
		
    },
	text: {
		color: 'black',
		fontFamily: 'DIN Condensed Bold',
		fontSize: 20,
		padding: 15,
		
	},
	text2: {
		color: 'black',
		fontSize: 20,
		alignSelf: 'center',
		padding: 30,
		fontFamily: 'DIN Condensed Bold',
	}

});

export default App;
