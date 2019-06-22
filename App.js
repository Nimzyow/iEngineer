import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./Screens/Home";
import { createStackNavigator, createAppContainer } from "react-navigation";
const MainNavigator = createStackNavigator(
  //FIRST ARGUMENT: screens we want to switch to
    {
  Home: {screen:Home} 
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