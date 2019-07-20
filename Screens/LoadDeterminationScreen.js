import React from 'react';
import { Image ,Keyboard, StyleSheet, Text, View, Switch ,TextInput, TouchableWithoutFeedback, TouchableOpacity, Alert, Animation, ScrollView } from 'react-native';
import { Button, Card } from "native-base";

export default class LoadDeterminationScreen extends React.Component {
    constructor (props){
        super(props);
        this.state={
            toggleWallSwitch: true,
            toggleFloorSwitch: false,
            toggleRoofSwitch: false
        }
    }

//the below will add a header, whose properties, ike fontsize, color etc... can be controlled in the App.js
    static navigationOptions = {
      title: "Beam Checker"
    }
//Below function will toggle the switch for wall
//value is a boolean which will be sent when toggle switch is pressed. It automatically sends a true or false value which is why we send the argument, value
    toggleSwitchWall = (value) => {
        this.setState({toggleWallSwitch: value});
        console.log("Wall switch is: " + value);
    }
//Below function will toggle the switch for Floor
    toggleSwitchFloor = (value) => {
        this.setState({toggleFloorSwitch: value});
        console.log("Floor switch is: " + value)
    }
//Below function will toggle the switch for roof
    toggleSwitchRoof = (value) => {
        this.setState({toggleRoofSwitch: value});
        console.log("Roof switch is: " + value)
    }

  render() {
  return (
    <View style={styles.container}>
        <View style={styles.toggleContainer}>
            <Text style={styles.textToggle}>
                Is the beam carrying a wall?</Text>
                {/* The below switch component REQUIRES two callbacks, onValueChange and value. The onValueChange callback will call the toggleSwitchWall function which will change the value of the toggleWallSwitch state. The togglewallSwitch state is the value (a boolean) that the switch renders.  */}
            <Switch style={styles.Switch}
            onValueChange = {this.toggleSwitchWall}
            value={this.state.toggleWallSwitch}
            />
        </View>

        {/* Conditional rendering in the below curly braces. */}
        {
            //the below works because in JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false. Therefore, if the condition is true, the element right after && will appear in the output. If it is false, React will ignore and skip it.
            this.state.toggleWallSwitch &&
            <View>
                <View>
                    <Text>
                        Please select wall type
                    </Text>
                </View>
                <View style={{flexDirection:"row", justifyContent:"space-around"}} >
                    <TouchableOpacity
                    onPress={() => {}}
                    >
                        <Image style={styles.imageContainer}
                        source= {require("../assets/Images/cavity_brick_block.png")} />
                        <Text>Cavity Wall</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => {}}
                    >
                        <Image style={styles.imageContainer}
                        source= {require("../assets/Images/cavity_block_block.png")} />     
                        <Text>Solid Wall</Text>
                    </TouchableOpacity>      
                </View>
            </View>
        }

        <View style={styles.toggleContainer}>
            <Text style={styles.textToggle}>
                Is the beam carrying a floor?
            </Text>
                <Switch style={styles.Switch}
                onValueChange = {this.toggleSwitchFloor}
                value={this.state.toggleFloorSwitch}
                />
        </View>
        <View style={styles.toggleContainer}>
            <Text style={styles.textToggle}>
                Is the beam carrying a Roof?
            </Text>
                <Switch style={styles.Switch}
                onValueChange = {this.toggleSwitchRoof}
                value={this.state.toggleRoofSwitch}
                />
        </View>
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
  toggleContainer: {
    marginTop:15,
    flexDirection:"row",
    //borderWidth:1,
    justifyContent: "space-between"
    //alignItems:"flex-end",

  },
  Switch:{
      //marginTop: 12
  },
  textToggle:{
      //justifyContent:"center"
      //border:1
      marginTop: 4,
      fontSize:19,
      fontFamily: 'Arial Hebrew'
  },
  imageContainer: {
    resizeMode:"contain", 
    width: 100, 
    height: 300,
    borderWidth: 1,
    marginTop:40,
    marginBottom: 40
  }
});
