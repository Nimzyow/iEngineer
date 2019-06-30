import React from 'react';
import { Keyboard, StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Alert, Animation } from 'react-native';
import { Button } from "native-base";
import FloatingLabelInput from "./../assets/Scripts/FloatingScript";
import ReactionCalc from '../assets/Scripts/ReactionCalc';


var reactionA, reactionB, uDL, span, loadUnits, loadUnitsText, pointValue, pointValueSpan;




export default class SteelBeamCalcScreen extends React.Component {
    constructor(props){
        super(props);
        this.state={
            reactionA,
            reactionB,
            reactionTextA: " ",
            reactionTextB: " ",
            uDLValue: " ",
            beamSpan: " ",
            loadUnits: " ",
            pointValue: " ",
            pointValueSpan: " ",
            numberOfPointLoads: " ",
            value: "",
            loadUnitsText: "",
            uDL: "",
            span: ""
        }

    }

beamCalculation = () => {
    console.log("beam span is " + this.state.beamSpan);
    uDL = this.state.uDLValue;
    span = this.state.beamSpan;
    loadUnitsText = "KN";
    pointValue = this.state.pointValue;
    pointValueSpan = this.state.pointValueSpan;
    //as long as someone enters a beam span, we will be able to go with the calcualtion. otherwise, an alert will pop up to enter span.
    if (span !== " " || 0){

    //if only a UDL value is entered and beam span, we will do a simple UDL reaction calc.
        if (uDL > 0 && (pointValue === 0 || pointValue === " ") && (pointValueSpan === 0 || pointValueSpan === " ")){
            var convertUDLToPoint = uDL * span;
            reactionB = (convertUDLToPoint*(span / 2))/(span);
            reactionA = reactionB;
            reactionTextA = "RA = " + reactionA + loadUnitsText;
            reactionTextB = "RB = " + reactionB + loadUnitsText;

            this.setState({
                reactionTextA,
                reactionTextB
            });
        } 
        if (pointValue > 0 && uDL === 0){
            if (pointValueSpan > 0) {
                reactionB = (pointValueSpan * pointValue)/span;
                
            } else if (pointValueSpan === 0 || pointValueSpan === " "){

            }}

    } else {
        Alert.alert("Please enter beam span")
    }


    } 


handleTextChange = (newText) => this.setState({value: newText});

  render() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Calculation of a simply supported beam with a UDL load.</Text>      
        </View>  
            <Text style={{fontSize: 14, color: "#000"}}>Enter Beam Span</Text>
            

            <TextInput 
                style={styles.inputContainer}
                placeholder="Tap here to enter beam span"
                onChangeText={(beamSpan) =>  this.setState({beamSpan: beamSpan})}
                keyboardType={'numeric'}/>


            <Text style={{fontSize: 14, color: "#000"}}>
                Enter UDL
            </Text>
                <TextInput 
                    style={styles.inputContainer}
                    placeholder="Tap here to enter UDL"
                    onChangeText={(uDLValue) => this.setState({uDLValue: uDLValue})}
                    keyboardType={'numeric'}/>

            <Text style={{fontSize: 14, color: "#000"}}>
                Enter Point Load
            </Text>
                <TextInput
                    style={styles.inputContainer}
                    placeholder="Enter Point Load"
                    onChangeText={(pointValue) => this.state.pointValue}
                    keyboardType={'numeric'}/>

            <Text style={{fontSize: 14, color: "#000"}}>
                Enter Point Load Span
            </Text>
                <TextInput
                    style={styles.inputContainer}
                    placeholder="Enter Point Load Span from left support"
                    onChangeText={(pointValueSpan) => this.state.pointValueSpan}
                    keyboardType={'numeric'}/>

            {/*
            <FloatingLabelInput style={{marginTop: 100}}
                label = "Enter Beam Load"
                value = {this.state.value}
            onChangeText = {this.handleTextChange}/>*/}
        
            {/* ---------Display of Reaction results below----------- */}
            <Text style={{fontSize: 20, padding: 10}}>{this.state.reactionTextA}</Text>
            <Text style={{fontSize: 20, padding: 10}}>{this.state.reactionTextB}</Text>
        
            
            {/* ---------Button to calculate Reaction ----------- */}
        <View style={styles.button}>
            <Button 
                style={styles.text} 
                block success
                onPress={() => {
                this.beamCalculation()
                }}>
                    <Text style={{fontSize: 20}}>Calculate Reactions</Text>
            </Button>       
        </View>
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
