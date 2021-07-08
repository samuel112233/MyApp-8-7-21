import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import IntroScreen from './screens/IntroScreen';
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen'
import { AppTabNavigator } from './Components/AppTabNavigator';
 
export default class App extends React.Component{
  render(){
    return(
     <AppContainer/>
     <AppTabNavigator/>

    )
  }
}
const AppNavigator = createSwitchNavigator({
  Intro:{screen:IntroScreen},
  SignUp:{screen:SignUpScreen},
  LogIn:{screen:LoginScreen},
  Home:{screen:HomeScreen},
  BottomTab:{screen:AppTabNavigator}
})
const AppContainer = createAppContainer(AppNavigator)
