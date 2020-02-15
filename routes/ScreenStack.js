import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import App from '../App'
import Comprovante from '../src/screens/Comprovante'

const screens = {
    App: {
        screen: App,        
        navigationOptions: ({ navigation }) => ({
            title: null,
            headerShown: false,
          }),
    },
    Comprovante:{
        screen: Comprovante,
        
        navigationOptions: ({ navigation }) => ({
            title: 'PAGAMENTO REALIZADO COM SUCESSO',
            headerStyle: { backgroundColor: '#14D1AF'},
            headerTitleStyle: { fontSize: 20, color: '#fff', fontFamily: 'DIN Condensed Bold'},
            headerTitleAlign: 'center',
          }),
          
        
    }
}

const ScreenStack = createStackNavigator(screens)

export default createAppContainer(ScreenStack)