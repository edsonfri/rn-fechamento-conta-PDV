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

import ButtonComponent from './src/components/Button'
import Display from './src/components/Display'
import { Pages } from 'react-native-pages'
import LinearGradient from "react-native-linear-gradient"

const initialState = {
   displayValue: 'R$ 0,00',
   clearDisplay: false,
   operation: null,
   values: [0, 0],
   current: 0,
 }

class App extends Component{
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
          <View  style={{ flex: 1}} >
            <Display value={this.state.displayValue} />
         </View>
              
            <View style={styles.buttonsContainer}>
            <View style={styles.buttonInLine}>
               <ButtonComponent label='1' onClick={this.addDigit}/>
               <ButtonComponent label='2' onClick={this.addDigit}/>
               <ButtonComponent label='3' onClick={this.addDigit}/>
          </View>
          <View style={styles.buttonInLine}>
               <ButtonComponent label='4' onClick={this.addDigit}/>
               <ButtonComponent label='5' onClick={this.addDigit}/>
               <ButtonComponent label='6' onClick={this.addDigit}/>
					</View>
					<View style={styles.buttonInLine}>
               <ButtonComponent label='7' onClick={this.addDigit} />
               <ButtonComponent label='8' onClick={this.addDigit}/>
               <ButtonComponent label='9' onClick={this.addDigit}/>
					</View>
					<View style={styles.buttonInLine}>
               <Text style={styles.text}>   </Text>

               <ButtonComponent label='0' onClick={this.addDigit}/>
               <ButtonComponent label='<' onClick={this.clearMemory}/>
               </View>
            </View>
            <View  style={{ flex: 1, paddingLeft: 35, paddingRight: 35}} >
              <Pages containerStyle={{ height:'80%', width:'100%', backgroundColor: '#fff', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}  indicatorColor={'#771CBB'}>
                <View style={{ height:'100%', width:'100%', flexDirection: 'row', alignSelf: 'center',}} >
                  <View>
									
									<Button title='aaaa' onPress={() => this.props.navigation.navigate('Comprovante', {displayValue: this.state.displayValue, payment: 'Dinheiro' })} >
									
										</Button>
                    <Text style={styles.text}>DINHEIRO</Text>
                  </View>
                  <View>
                    <Text style={styles.text}>DÉBITO</Text>
                  </View>
                  <View>
                    <Text style={styles.text}>CRÉDITO</Text>
                  </View>
                </View>
                <View style={{ height:'100%', width:'100%', flexDirection: 'row', alignSelf: 'center',}} >
                    <View>
                      <Text style={styles.text}>V.R</Text>
                    </View>
                    <View>
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
   this.setState({ displayValue,  currentValue})
   
 
}

   clearMemory = () => {
      this.setState({...initialState})
      //this.setState({ displayValue: this.state.currentValue })
    }
  
  
};

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

   text: {
    color: 'black',
    fontSize: 20,
    alignSelf: 'center',
    padding: 30,
    fontFamily: 'DIN Condensed Bold',
    
  }

 });

export default App;
