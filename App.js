import 'react-native-gesture-handler';
import { connect } from 'react-redux';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './drawerScreens/SplashScreen';
import LoginScreen from './drawerScreens/LoginScreen';
import RegisterScreen from './drawerScreens/RegisterScreen';
import DrawerNavigationRoutes from './drawerScreens/DrawerNavigatorRoutes';
 import { Provider } from 'react-redux';
 import configureStore,{persistor} from './store';
import { PersistGate } from 'redux-persist/integration/react';
 const store=configureStore;
 //const Stack = createStackNavigator();

const App = () => {
    return(
     <Provider store={store}> 
     <PersistGate persistor={persistor}>
       <NavigationContainer>
       <DrawerNavigationRoutes/>
      </NavigationContainer>
      </PersistGate>
      </Provider> 
    )
};

export default App;