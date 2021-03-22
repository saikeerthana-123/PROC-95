import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import {createAppContainer, createSwitchNavigator, StackRouter} from 'react-navigation';
import AppScreen from './screens/OceanScreen';
import WelcomeScreen from './screens/HomeScreen';

export default class App extends React.Component {
  render(){
  return (
     <AppContainer/> );
    }  
  }
  var appNavigator = createSwitchNavigator({
      WelcomeScreen:WelcomeScreen,
      AppScreen:AppScreen
  })
  /*const r = StackRouter({
    WelcomeScreen: {
      WelcomeScreen:WelcomeScreen,
      AppScreen:AppScreen
    },
  }, {
    headerMode: 'none'  
  })*/
  
  const AppContainer = createAppContainer(appNavigator)
  //const Navigator = createNavigator(r)(BubbleTransition)