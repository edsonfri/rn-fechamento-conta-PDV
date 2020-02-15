import App from '../App'
import Comprovante from './screens/Comprovante'

import { createStackNavigator } from 'react-navigation';


const Routes = createStackNavigator({
	App: { screen: App, navigationOptions: { header: null } },
	Comprovante: { screen: Comprovante, navigationOptions: {title: 'PAGAMENTO REALIZADO COM SUCESSO'} }
}, {
	initialRouteName: 'App'
})

export default Routes;