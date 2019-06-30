import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./Screens/HomeScreen";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './Screens/HomeScreen';
import SteelBeamCalcScreen from './Screens/SteelBeamCalcScreen';
import BeamCalcScreen from './Screens/BeamCalcScreen';

const MainNavigator = createStackNavigator(
  //FIRST ARGUMENT: screens we want to switch to
    {
  Home: {screen:HomeScreen},
  BeamCalc: {screen: BeamCalcScreen},
  SteelBeamCalc: {screen: SteelBeamCalcScreen} 
  }, 
  //SECOND ARGUMENT - what the default Navigation bar at the top of the phone should look like.
  {
    defaultNavigationOptions:{
      headerTintColor: "#000",
      headerStyle: {
        backgroundColor: "#EAF0F1"
      },
      headerTitleStyle: {
        color: "#000"
      }
    }
  });
  
  //we then call on the createAppContainer method and the argument is the object we created just earlier. 
  const App = createAppContainer(MainNavigator);
  export default App;