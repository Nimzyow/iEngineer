import React from 'react';
import { Keyboard, StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Alert, Animation, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Card } from "native-base";

export default class HomeScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        };

        const steelBeam = {
            name: "152x152x37kg",
            thicknessMax: 11.5,
            designStrength: 275,
            //sectionDepth is between filelts
            sectionDepth: 123.6,
            sectionWidth: 154.4,
            
        }

    }
//the below will add a header, whose properties, ike fontsize, color etc... can be controlled in the App.js
    static navigationOptions = {
      title: "iEngineer"
    }

  render() {
  return (
        <View style={styles.container}>      
           <Text>Beam Object</Text>   
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
