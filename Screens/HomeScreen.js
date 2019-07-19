import React from 'react';
import { Keyboard, StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Alert, Animation, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Card } from "native-base";
//import { TouchableOpacity } from 'react-native-gesture-handler';

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

  render() {
  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          
            <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("BeamCalc")
            }}
            >
                <Card style={styles.cardContainer}>
                    <Text style={styles.cardText}>
                        Beam Calculation
                    </Text>
               </Card>
            </TouchableOpacity> 
            
            
            <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("LoadDetermination")
            }}
            >
                <Card style={styles.cardContainer}>
                    <Text style={styles.cardText}>
                        Something Else Calculation
                    </Text>
                </Card>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <Card style={styles.cardContainer}>
                    <Text style={styles.cardText}>
                        Really Something Else Calculation
                    </Text>
                </Card>
            </TouchableOpacity>
            <TouchableOpacity>
                <Card style={styles.cardContainer}>
                    <Text style={styles.cardText}>
                        Yet another Calculation
                    </Text>
                </Card>
            </TouchableOpacity>    
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
