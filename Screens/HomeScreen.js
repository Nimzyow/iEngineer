import React from 'react';
import { Keyboard, StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Alert, Animation, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Card } from "native-base";
import HomeCards from "../assets/Components/HomeComponents/HomeCards";

export default class HomeScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
    }
//the below will add a header, whose properties, ike fontsize, color etc... can be controlled in the App.js
    static navigationOptions = {
      title: "iEngineer"
    }

    navigateToHandler = (nav) => {
      this.props.navigation.navigate(nav)
    }

  render() {
  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            <HomeCards 
              navigateTo={() => {this.navigateToHandler("BeamCalc")}}
              cardName="Beam Calc"
            />
            <HomeCards 
              navigateTo={() => {this.navigateToHandler("LoadDetermination")}}
              cardName="Beam Checker"
            />
            <HomeCards 
              navigateTo={() => {this.navigateToHandler("LoadDetermination")}}
              cardName="Beam Checker"
            />
            <HomeCards 
              navigateTo={() => {}}
              cardName="Something Else"
            />
            <HomeCards 
              navigateTo={() => {}}
              cardName="Really Something Else"
            />   
        </View>
    </TouchableWithoutFeedback>
    <View style={styles.empty}></View>
    </ScrollView>
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
