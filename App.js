import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./Screens/HomeScreen";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './Screens/HomeScreen';
const MainNavigator = createStackNavigator(
  //FIRST ARGUMENT: screens we want to switch to
    {
  Home: {screen:HomeScreen} 
  }, 
  //SECOND ARGUMENT - what the default Navigation bar at the top of the phone should look like.
  {
    defaultNavigationOptions:{
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#EAF0F1"
      },
      headerTitleStyle: {
        color: "#FFF"
      }
    }
  });
  
  //we then call on the createAppContainer method and the argument is the object we created just earlier. 
  const App = createAppContainer(MainNavigator);
  export default App;