import React from 'react';
import { Keyboard, StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Alert, Animation } from 'react-native';
import { Button, Card } from "native-base";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class BeamCalcScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
    }

    static navigationOptions = {
        title: "Beam Calculation type"
    }

  render() {
  return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            <TouchableOpacity
            onPress={() => {
                this.props.navigation.navigate("SteelBeamCalc")
            }}
            >
                <Card style={styles.cardContainer}>
                    <Text style={styles.cardText}>
                        Steel Beam Calculation
                    </Text>
               </Card>
            </TouchableOpacity> 
            <TouchableOpacity>
                <Card style={styles.cardContainer}>
                    <Text style={styles.cardText}>
                        Timber Beam Calculation
                    </Text>
                </Card>
            </TouchableOpacity>
            <TouchableOpacity>
                <Card style={styles.cardContainer}>
                    <Text style={styles.cardText}>
                        Concrete Beam Calculation
                    </Text>
                </Card>
            </TouchableOpacity> 
        </View>
    </TouchableWithoutFeedback>
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
