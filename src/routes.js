import { createStackNavigator } from 'react-navigation';

import Main from './pages/main';//Importa a pagina main
import Product from './pages/product';//Importa a pagina main

export default createStackNavigator({

  Main,
  Product
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#DA552F'
    },
    headerTintColor: '#FFF',
  }
});