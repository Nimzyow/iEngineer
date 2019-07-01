import React from 'react';
import { Keyboard, StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Alert, Animation } from 'react-native';
import { Button } from "native-base";
import FloatingLabelInput from "./../assets/Scripts/FloatingScript";
import ReactionCalc from '../assets/Scripts/ReactionCalc';

var reactionA, reactionB, beamSpan;

export default class SteelBeamCalcScreen extends React.Component {
    constructor(props){
        super(props);
        this.state={

            beamSpan: " ", span: "",

            loadUnits: " ", loadUnitsText: "",

            uDLValue: " ", uDL: "",

            pointValue: " ", pointValueSpan: " ", numberOfPointLoads: " ",

            partialUDL: "", partialUDLStart: "", partialUDLEnd: "",

            reactionA, reactionB,
            
            reactionTextA: " ", reactionTextB: " "
            
            //the value below is for floating text only.
            //value: "",   
        }
    obj = new ReactionCalc();
    }

    callFunction = () => {
        obj.beamCalculation();
    }

beamCalculation = () => {
    
    //console.log("beam span is " + this.state.beamSpan);
    //console.log("UDL is " + this.state.uDLValue);
        var span = this.state.beamSpan;
        var uDL = this.state.uDLValue;
        var pointValue = this.state.pointValue;
        var pointValueSpan = this.state.pointValueSpan;
        var partialUDL = this.state.partialUDL;
        var partialUDLStart = this.state.partialUDLStart;
        var partialUDLEnd = this.state.partialUDLEnd;
        var loadUnitsText = "KN";
        var reactionA;
        var reactionB;

        if (span === " " || span === ""){
            this.setState({beamSpan: 0})
            span = 0;
            //span = this.state.beamSpan;
        }
        if (uDL === " " || uDL === ""){
            this.setState({uDLValue: 0});
            uDL = 0;
        }
        if (pointValue === " " || pointValue === ""){
            this.setState({pointValue: 0});
            pointValue = 0;
        }
        if (pointValueSpan === " " || pointValueSpan === ""){
            this.setState({pointValueSpan: 0});
            pointValueSpan = 0;
        }
        if (partialUDL === " " || partialUDL === ""){
            this.setState({partialUDL: 0});
            partialUDL = 0;
        }
        if (partialUDLStart === " " || partialUDLStart === ""){
            this.setState({partialUDLStart: 0});
            partialUDLStart = 0;
            console.log("partialUDLStart = " + partialUDLStart);
        }
        if (partialUDLEnd === " " || partialUDLEnd === ""){
            this.setState({partialUDLEnd: 0});
            partialUDLEnd = 0;
        }
    
        //console.log("beam span is " + span);
       // console.log("UDL is " + uDL);

        //as long as someone enters a beam span, we will be able to go with the calcualtion. otherwise, an alert will pop up to enter span.
        if (span !== " " || 0){
           // console.log("first if");
            if (pointValueSpan < span){
               // console.log("Second if");
              //  console.log("partialUDLEnd is " + partialUDLEnd + "partialUDLStart is " + partialUDLStart)
            if ((partialUDLEnd - partialUDLStart) <= span){
               // console.log("Third if");
                //if only a UDL value is entered and beam span, we will do a simple UDL reaction calc.
        
                // **********************UDL*************************
                console.log("we are at the udl calc point");
                var convertUDLToPoint = uDL * span;
                reactionB = (convertUDLToPoint*(span / 2))/(span);
                reactionA = reactionB;
                console.log("UDL RB = " + reactionB);
                console.log("UDL RA = " + reactionA);
                // **********************POINT LOAD *************************
        
                if (pointValue > 0){       
                        reactionB = reactionB + (pointValueSpan * pointValue)/span;
                        reactionA = reactionA + (pointValue - reactionB);
                        console.log("Point RB = " + reactionB + "Point RA" + reactionA + " point Load = " + pointValue);
                        /*reactionTextA = "RA = " + reactionA + loadUnitsText;
                        reactionTextB = "RB = " + reactionB + loadUnitsText;
        
                        this.setState({
                            reactionTextA,
                            reactionTextB
                        });*/
                    } 

                    //if only a Partial UDL value is entered and beam span, we will do a simple UDL reaction calc.
        
                    // **********************PARTIAL UDL ONLY*************************
                    if(partialUDL > 0){
                    if ( partialUDLStart < partialUDLEnd){
                        
                            if (partialUDLStart >= 0 && partialUDLEnd > 0){
                                //TODO: Enter formula to perform the partial UDL load only here.
        
                                } else if (partialUDL === 0 && (partialUDLStart >= 0 || partialUDLEnd > 0)){
                                    Alert.alert("you have specified partial UDL span but no partial UDL");
                                    } else if (partialUDL > 0  && (partialUDLEnd === 0 || partialUDLEnd > " " || partialUDLStart === " ")){
                                        Alert.alert("Fix Partial UDL dimensions. End of Partial UDL must be greater than 0 and start of partial UDL must be 0 or greater");
                                    }
                                        
                                            } else if (partialUDLStart >= partialUDLEnd){
                                                Alert.alert("Start of partial UDL must be less than end of partial UDL");
                                            }
                                        }
         

            reactionTextA = "RA = " + reactionA + loadUnitsText;
            reactionTextB = "RB = " + reactionB + loadUnitsText;
            console.log("Do we get to set all state? YES!")
            
            this.setState({
                reactionTextA,
                reactionTextB
            });

            /*
            this.setState({
            ...this.state
            });  */                      
                
                } else if ((partialUDLEnd - partialUDLStart) > beamSpan){
                    Alert.alert("partial UDL length cannot be greater than beam length")
                }                        
        
            } else if (pointValueSpan > span) {
                Alert.alert("Point Load placed outside of Beam");

                }
                                                                
        }
        else {
            Alert.alert("Please enter beam span")
        }
    } 

//the handle text change below is for floating text 
//handleTextChange = (newText) => this.setState({value: newText});

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
