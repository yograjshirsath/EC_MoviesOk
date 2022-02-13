import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import CustomSidebarMenu from '../Components/CustomSidebarMenu';
import NavigationDrawerHeader from '../Components/NavigationDrawerHeader';
import ProfileScreen from './ProfileScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import { MovieDetail } from './MovieDetail';
import { connect } from 'react-redux';
//import MenuIcon from '@mui/icons-material/Menu';

const Stack = createStackNavigator(); 
const Drawer = createDrawerNavigator();

function homeScreenStack({navigation},props) {

  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'MoviesOk',
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#021424', 
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:25,
            textAlign:'center',
          },
        }} />
    </Stack.Navigator>
  );
}

const profileScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#021424', 
        },
        headerTintColor: '#021424',
        headerTitleStyle: {
          fontWeight: 'bold', 
        },
      }}>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: 'MoviesOK', 
        }}
      />
    </Stack.Navigator>
  );
};

const loginScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#021424', 
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold', 
        },
      }}>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          title: 'MoviesOK', 
        }}
      />
    </Stack.Navigator>
  );
};

const registerScreenStack = ({navigation},props) => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#021424', 
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold', 
        },
      }}>
      <Stack.Screen
        name="SettingsScreen"
        component={RegisterScreen}
        options={{
          title: 'MoviesOK', 
        }}
      />
    </Stack.Navigator>
  );
};


const DrawerNavigatorRoutes = (props) => {

  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#fff',
        color: '#fff',
        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: '#fff',
        },
      }}
      screenOptions={{headerShown: false}}
      drawerContent={CustomSidebarMenu(props.authData)}>
      <Drawer.Screen
        name="homeScreenStack"
        options={{drawerLabel: 'Home'}}
        component={homeScreenStack}
      />
      {props.authData.isAuth &&
        <Drawer.Screen
        name="profileScreenStack"
        options={{drawerLabel: 'Profile'}}
        component={profileScreenStack}
      />
      }
       {!props.authData.isAuth &&     
       <Drawer.Screen
        name="LOGIN"
        options={{drawerLabel: 'Login'}}
        component={loginScreenStack}
      />
    }
      {!props.authData.isAuth &&
      <Drawer.Screen
        name="registerScreenStack"
        options={{drawerLabel: 'Register'}}
        component={registerScreenStack}
      />
    }
    {props.authData.isAuth &&
        <Drawer.Screen
        name="LogoutScreenStack"
        options={{drawerLabel: 'Logout'}}
        component={profileScreenStack}
      />
      } 
    </Drawer.Navigator>
  );
};


const mapStateToProps=(state)=>{
  return{
    authData:state.auth
  }
}


export default connect (mapStateToProps)(DrawerNavigatorRoutes);