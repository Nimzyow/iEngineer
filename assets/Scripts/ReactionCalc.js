import React from 'react';
import { 
    Keyboard,
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableWithoutFeedback,
    Alert, Animation } from 'react-native';
import { Button } from "native-base";

var reactionA, reactionB, uDL, span, loadUnits, loadUnitsText, pointValue, pointValueSpan;

class ReactionCalc extends React.Component{
    constructor(props){
        super(props);
        this.state = {
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

        };
    }

    simSupBeamReaction = () => {

        uDL = this.state.uDLValue;
        span = this.state.beamSpan;
        pointValue = this.state.pointValue;
        pointValueSpan= this.state.pointValueSpan;
        loadUnitsText = this.state.loadUnits;
    
    
        //------------------------------------------------------
        //-----------------REACTION CALCULATION-----------------
        //------------------------------------------------------
    
        /*
         * ------------IF UDL ONLY----------
         */
    if(span > 0){
    
    if (uDL > 0 && (pointValue === 0 || pointValue === " " )) {
        reactionA = (uDL * span)/2;
        reactionB = reactionA;
        loadUnitsText = "KN";
        reactionTextA = "Reaction A = " + reactionA + loadUnitsText;
        reactionTextB = "Reaction B = " + reactionB + loadUnitsText;
    
        this.setState({
            reactionA,
            reactionB,
            loadUnits,
            reactionTextA,
            reactionTextB  
        });
    }
    
        /*
         * ---------IF POINT LOAD ONLY----------
         */
    
    if (pointValue > 0 && pointValueSpan > 0 && (uDL === 0 || uDL === " ")){
    //point load formula
        reactionB = (pointValue * pointValueSpan)/span;
        reactionA = pointValue - reactionB;
        loadUnitsText = "KN";
        reactionTextA = "Reaction A = " + reactionA + loadUnitsText;
        reactionTextB = "Reaction B = " + reactionB + loadUnitsText;
    
        this.setState({
            reactionA,
            reactionB,
            loadUnits,
            reactionTextA,
            reactionTextB  
        });
    } else if (pointValue > 0 && (pointValueSpan === 0 || pointValueSpan === " ")){
        Alert.alert("You entered a Point load but not span.");
    } else if (pointValueSpan > 0 && (pointValue === 0 || pointValue === " ")){
        Alert.alert("You entered a Point load span but no point load");
    }
    
    
        /*
         * ---------IF MULTIPLE POINT LOAD ONLY----------
         */
    
    
        /**
         * ---------IF POINT LOAD AND UDL LOAD-------
         */
    
        if (uDL > 0 && pointValue > 0) {
            if(pointValueSpan > 0){
                var reactionBUDL;
                var reactionBPoint;
                var reactionAUDL;
                var reactionAPoint;
                //work out UDL Reaction first
                reactionBUDL = (uDL * span)/2;
                reactionAUDL = reactionBUDL;
                //work out Point Load reaction and add to UDL Reaction.
                reactionBPoint = (pointValue * pointValueSpan) / span;
                reactionAPoint = (pointValue - reactionBPoint);
                reactionA = (reactionAUDL + reactionAPoint);
                reactionB = (reactionBUDL + reactionBPoint);
                loadUnitsText = "KN";
                reactionTextA = "Reaction A = " + reactionA + loadUnitsText;
                reactionTextB = "Reaction B = " + reactionB + loadUnitsText;
        
                this.setState({
                    reactionA,
                    reactionB,
                    loadUnits,
                    reactionTextA,
                    reactionTextB  
                });
            } else if (pointValueSpan === 0 || pointValueSpan === " "){
                Alert.alert("please enter Point Load span");
            }
        }
    
    
    
        /**
        * ----------Partial UDL LOAD------------
        */
        this.forceUpdate();
    } else if (span === 0 || span === " ") {
        Alert.alert("Please enter span");
    }
    //TODO: Calculation of a point load only method REACTION

//TODO: Calculation of a point and udl mixed method REACTION
    }

    render() {
        return( 
            <View>
                
            </View>

        );
    }
};

export default ReactionCalc;