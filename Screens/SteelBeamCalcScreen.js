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
            span: "",
            partialUDL: "",
            partialUDLStart: "",
            partialUDLEnd: ""
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
    
    // **********************UDL ONLY*************************

        if (uDL > 0 && (pointValue === 0 || pointValue === " ") && (pointValueSpan === 0 || pointValueSpan === " ") && (partialUDL === 0 || partialUDL === " " ) && (partialUDLEnd === 0 || partialUDLEnd === " " || partialUDLStart === " ")){
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

        //if only a UDL value is entered and beam span, we will do a simple UDL reaction calc.
    
    // **********************POINT LOAD ONLY*************************

        if (pointValue > 0 && (uDL === 0 || uDL === " ") && (partialUDL === 0 || partialUDL === " " ) && (partialUDLEnd === 0 || partialUDLEnd === " " || partialUDLStart === " ")){
            if (pointValueSpan > 0) {
                reactionB = (pointValueSpan * pointValue)/span;
                reactionA = (pointValue - reactionB);
                console.log("RB = " + reactionB + " point value = " + pointValue);
                reactionTextA = "RA = " + reactionA + loadUnitsText;
                reactionTextB = "RB = " + reactionB + loadUnitsText;

                this.setState({
                    reactionTextA,
                    reactionTextB
                });
            } else if (pointValueSpan === 0 || pointValueSpan === " "){
                Alert.alert("Please Enter Span for Point Load")
            }}
        
            //if only a Partial UDL value is entered and beam span, we will do a simple UDL reaction calc.

            // **********************PARTIAL UDL ONLY*************************
            
            if (partialUDL > 0 && partialUDLStart < partialUDLEnd){
                if ((partialUDLEnd - partialUDLStart) <= beamSpan){
                    if (partialUDL > 0 && partialUDLStart >= 0 && partialUDLEnd > 0 && (uDL === 0 || uDL === " ") && (pointValue === 0 || pointValue === " ") && (pointValueSpan === 0 || pointValueSpan === " ")){
                        //TODO: Enter formula to perform the partial UDL load only here.

                        } else if ((partialUDL === 0 || partialUDL === " " ) && (partialUDLStart >= 0 || partialUDLEnd > 0)){
                            Alert.alert("you have specified partial UDL span but no partial UDL");
                            } else if (partialUDL > 0  && (partialUDLEnd === 0 || partialUDLEnd > " " || partialUDLStart === " ")){
                                Alert.alert("Fix Partial UDL dimensions. End of Partial UDL must be greater than 0 and start of partial UDL must be 0 or greater");
                            }
                                } else if ((partialUDLEnd - partialUDLStart) > beamSpan){
                                Alert.alert("partial UDL length cannot be greater than beam length")
                                }
                                    } else if (partialUDL > 0 && partialUDLStart > partialUDLEnd){
                                        Alert.alert("Start of partial UDL must be less than end of partial UDL");
                                    }
     
    
    
    
    
    
    }
    else {
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
                    onChangeText={(pointValue) => this.setState({pointValue: pointValue})}
                    keyboardType={'numeric'}/>

            <Text style={{fontSize: 14, color: "#000"}}>
                Enter Point Load Span
            </Text>
                <TextInput
                    style={styles.inputContainer}
                    placeholder="Enter Point Load Span from left support"
                    onChangeText={(pointValueSpan) => this.setState({pointValueSpan: pointValueSpan})}
                    keyboardType={'numeric'}/>
            
            <Text style={{fontSize: 14, color: "#000"}}>
                Enter Partial UDL
            </Text>
                <TextInput
                    style={styles.inputContainer}
                    placeholder="Enter Partial UDL"
                    onChangeText={(partialUDL) => this.setState({partialUDL: partialUDL})}
                    keyboardType={'numeric'}/>
            
            <Text style={{fontSize: 14, color: "#000"}}>
                Position from RA to start of Partial UDL
            </Text>
                <TextInput
                    style={styles.inputContainer}
                    placeholder="Enter Position to Partial UDL start"
                    onChangeText={(partialUDLStart) => this.setState({partialUDLStart: partialUDLStart})}
                    keyboardType={'numeric'}/>

            <Text style={{fontSize: 14, color: "#000"}}>
                Position from RA to end of Partial UDL
            </Text>
                <TextInput
                    style={styles.inputContainer}
                    placeholder="Enter Position to Partial UDL end"
                    onChangeText={(partialUDLEnd) => this.setState({partialUDLEnd: partialUDLEnd})}
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
