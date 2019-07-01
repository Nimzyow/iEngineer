import React from 'react';
import { Keyboard,StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Alert, Animation } from 'react-native';
import { Button } from "native-base";


var reactionA, reactionB, uDL, span, loadUnits, loadUnitsText, pointValue, pointValueSpan;

export default class ReactionCalc extends React.Component{

    beamCalculation = () => {

        console.log("beam span is " + this.state.beamSpan);
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
            span === 0;
        }
        if (uDL === " " || uDL === ""){
            uDL === 0;
        }
        if (pointValue === " " || pointValue === ""){
            pointValue === 0;
        }
        if (pointValueSpan === " " || pointValueSpan === ""){
            pointValueSpan === 0;
        }
        if (partialUDL === " " || partialUDL === ""){
            partialUDL === 0;
        }
        if (partialUDLStart === " " || partialUDLStart === ""){
            partialUDLStart === 0;
        }
        if (partialUDLEnd === " " || partialUDLEnd === ""){
            partialUDLEnd === 0;
        }
    
        //as long as someone enters a beam span, we will be able to go with the calcualtion. otherwise, an alert will pop up to enter span.
        if (span !== " " || 0){
            
            if (pointValueSpan < span){
            if ((partialUDLEnd - partialUDLStart) <= beamSpan){
                //if only a UDL value is entered and beam span, we will do a simple UDL reaction calc.
        
                // **********************UDL*************************

                var convertUDLToPoint = uDL * span;
                reactionB = (convertUDLToPoint*(span / 2))/(span);
                reactionA = reactionB;
            
                // **********************POINT LOAD *************************
        
                if (pointValue > 0){       
                        reactionB = reactionB + (pointValueSpan * pointValue)/span;
                        reactionA = reactionA + (pointValue - reactionB);
                        /*console.log("RB = " + reactionB + " point value = " + pointValue);
                        reactionTextA = "RA = " + reactionA + loadUnitsText;
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
         



            this.setState({
            ...this.state
            });                        
                
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

    render() {
        return( 
            <View></View>
        );
    }
};



