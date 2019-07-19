import React from 'react';
import { Keyboard, StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, TouchableOpacity, Alert, Animation, ScrollView } from 'react-native';
import { Button, Card } from "native-base";

export default class SBWallCheckScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }
//the below will add a header, whose properties, ike fontsize, color etc... can be controlled in the App.js
    static navigationOptions = {
      title: "iEngineer"
    }
  render() {
  return (
    <View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Text>Is the beam carrying an external wall?</Text>
        <Text>Yes   NO</Text>
        <Text>Cavity    Solid Wall</Text>
        <Text> Block and Brick/Block and Block      Solid   Brick     Block</Text>
    </TouchableWithoutFeedback>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: "flex-start"
    //justifyContent: 'center',
  },
  cardContainer: {
    height: 230
  },
  cardText: {
    fontSize: 18,
    paddingTop:20
  },
  empty: {
    height: 500
  },
  header: {
    marginTop: 10,
    marginBottom:10
    
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  spanText: {
      flex: 1,
    //borderWidth: 2,
    marginTop: 20,
    alignItems: "flex-start",
    //width: Dimensions.get('window').width,
  },
  button: {
    flex: 1,
    justifyContent: "flex-start",
   // borderWidth: 2,
    marginBottom: 36
  },
  text: {
      margin: 3,
      padding: 20
  },
  inputContainer: {
    height: 26,
    fontSize: 20, 
    color: 'gray', 
    borderBottomWidth:1, 
    padding: 3
  }
  
});
