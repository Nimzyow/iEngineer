import React from 'react';
import { Keyboard, StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Alert, Animation } from 'react-native';
import { Button } from "native-base";
import FloatingLabelInput from "./../assets/Scripts/FloatingScript";
import ReactionCalc from '../assets/Scripts/ReactionCalc';

var reactionA, reactionB, beamSpan;
reactionA = 0.00;
reactionB = 0.00;

export default class SteelBeamCalcScreen extends React.Component {
    constructor(props){
        super(props);
        this.state={

            beamSpan: " ", span: "",

            loadUnits: " ", loadUnitsText: "",

            uDLValue: " ", uDL: "",

            pointValue: " ", pointValueSpan: " ", numberOfPointLoads: " ",

            partialUDL: " ", partialUDLStart: " ", partialUDLEnd: " ",

            reactionA: 0.00, reactionB: 0.00,
            
            reactionTextA: " ", reactionTextB: " ",

            ShearForceTextA: " ", ShearForceTextB: " "
            
            //the value below is for floating text only.
            //value: "",   
        }
    obj = new ReactionCalc();
    }

    callFunction = () => {
        obj.beamCalculation();
    }

beamCalculation = () => {
        reactionA = 0.00;
        reactionB = 0.00;
    
    //console.log("UDL is " + this.state.uDLValue);
        var span = this.state.beamSpan;
        
        var uDL = this.state.uDLValue;
        
        var pointValue = this.state.pointValue;
        
        var pointValueSpan = this.state.pointValueSpan;
        
        var partialUDL = this.state.partialUDL;
        
        var partialUDLStart = this.state.partialUDLStart;
        
        var partialUDLEnd = this.state.partialUDLEnd;
        
        var loadUnitsText = this.state.loadUnitsText;

        console.log("beam span is " + this.state.beamSpan);

        if (span === " " || span === ""){
            this.setState({beamSpan: 0})
            span = 0.00;
            //span = this.state.beamSpan;
        }
        if (uDL === " " || uDL === ""){
            this.setState({uDLValue: 0});
            uDL = 0.00;
        }
        if (pointValue === " " || pointValue === ""){
            this.setState({pointValue: 0});
            pointValue = 0.00;
        }
        if (pointValueSpan === " " || pointValueSpan === ""){
            this.setState({pointValueSpan: 0.00});
            pointValueSpan = 0.00;
        }
        if (partialUDL === " " || partialUDL === ""){
            this.setState({partialUDL: 0.00});
            partialUDL = 0.00;
        }
        if (partialUDLStart === " " || partialUDLStart === ""){
            this.setState({partialUDLStart: 0.00});
            partialUDLStart = 0.00;
            //console.log("partialUDLStart = " + partialUDLStart);
        }
        if (partialUDLEnd === " " || partialUDLEnd === ""){
            this.setState({partialUDLEnd: 0.00});
            partialUDLEnd = 0.00;
        }
        
        span = parseFloat(span);
        uDL = parseFloat(uDL);
        pointValue = parseFloat(pointValue);
        pointValueSpan = parseFloat(pointValueSpan);
        partialUDL = parseFloat(partialUDL);
        partialUDLStart = parseFloat(partialUDLStart);
        partialUDLEnd = parseFloat(partialUDLEnd);
        //console.log("beam span is " + span);
       // console.log("UDL is " + uDL);

        //as long as someone enters a beam span, we will be able to go with the calcualtion. otherwise, an alert will pop up to enter span.
        if (span !== " " || 0){
            console.log("first if");
            if (pointValueSpan <= span){
                console.log("Second if");
                console.log("partialUDLEnd is " + partialUDLEnd + "partialUDLStart is " + partialUDLStart)
            if ((partialUDLEnd - partialUDLStart) <= span){
                console.log("Third if");
                //if only a UDL value is entered and beam span, we will do a simple UDL reaction calc.
        
                // **********************UDL*************************
                //console.log("we are at the udl calc point");
                if (uDL > 0){
                var convertUDLToPoint = uDL * span;
                var reactionBUDL = (convertUDLToPoint*(span / 2))/(span);
                var reactionAUDL = reactionBUDL;
                reactionB = reactionBUDL;
                reactionA = reactionAUDL;
                console.log("UDL RB = " + reactionB);
                console.log("UDL RA = " + reactionA);
                }
                // **********************POINT LOAD *************************
        
                if (pointValue > 0){
                        
                        var reactionBPointLoad = (pointValueSpan * pointValue)/span;
                        var reactionAPointLoad = (pointValue - reactionBPointLoad);
                        reactionB = reactionB + reactionBPointLoad;
                        reactionA = reactionA + reactionAPointLoad;
                        console.log("Point RB = " + reactionBPointLoad + " Point RA =" + reactionAPointLoad + " point Load = " + pointValue);
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
                                var convertPUDLtoPoint = partialUDL * (partialUDLEnd - partialUDLStart);
                                var newPointPosition = ((partialUDLEnd - partialUDLStart)/2) +  partialUDLStart;
                                
                                console.log("Reaction B = " + reactionB + " before partial udl");
                                console.log("Reaction A = " + reactionA + " before partial udl");
                                
                                var reactionBPUDL = ((newPointPosition * convertPUDLtoPoint)/span);
                                var reactionAPUDL = (convertPUDLtoPoint - reactionBPUDL);

                                reactionB = reactionB + reactionBPUDL;
                                reactionA = reactionA + reactionAPUDL;
                                
                                console.log("ReactionA = " + reactionA);
        
                                } else if (partialUDL === 0 && (partialUDLStart >= 0 || partialUDLEnd > 0)){
                                    Alert.alert("you have specified partial UDL span but no partial UDL");
                                    } else if (partialUDL > 0  && (partialUDLEnd === 0 || partialUDLEnd > " " || partialUDLStart === " ")){
                                        Alert.alert("Fix Partial UDL dimensions. End of Partial UDL must be greater than 0 and start of partial UDL must be 0 or greater");
                                    }
                                        
                                            } else if (partialUDLStart >= partialUDLEnd){
                                                Alert.alert("Start of partial UDL must be less than end of partial UDL");
                                            }
                                        }
            loadUnitsText = "KN";
            this.setState({
                loadUnitsText
            });
            reactionTextA = "RA = " + reactionA.toFixed(2) + loadUnitsText;
            reactionTextB = "RB = " + reactionB.toFixed(2) + loadUnitsText;
            console.log("Do we get to set all state? YES!")
            
            this.setState({
                reactionTextA,
                reactionTextB,
            });

            this.shearForceCalcualtion();

            /*
            this.setState({
            ...this.state
            });  */                      
                
                } else if ((partialUDLEnd - partialUDLStart) > span){
                    Alert.alert("partial UDL length cannot be greater than beam length")
                }                        
        
            } else if (pointValueSpan > span) {
                Alert.alert("Point Load placed outside of Beam");
                console.log("pointValueSpan = " + pointValueSpan);
                console.log("span = " + span);
                }
                                                                
        }
        else {
            Alert.alert("Please enter beam span")
        }
    } 

    shearForceCalcualtion = () => {
        

        var sFRA = reactionA;
        var sFRB = reactionB;
        console.log("Shear force at RA= "+sFRA);
        console.log("Shear force at RB= "+sFRB);
        var atRA;
        var atRB;
        var span = this.state.beamSpan;
        var uDL = this.state.uDLValue;
        var pointValue = this.state.pointValue;
        var pointValueSpan = this.state.pointValueSpan;
        var partialUDL = this.state.partialUDL;
        var partialUDLStart = this.state.partialUDLStart;
        var partialUDLEnd = this.state.partialUDLEnd;

        if (span === " " || span === ""){
            this.setState({beamSpan: 0})
            span = 0.00;
            //span = this.state.beamSpan;
        }
        if (uDL === " " || uDL === ""){
            this.setState({uDLValue: 0});
            uDL = 0.00;
        }
        if (pointValue === " " || pointValue === ""){
            this.setState({pointValue: 0});
            pointValue = 0.00;
        }
        if (pointValueSpan === " " || pointValueSpan === ""){
            this.setState({pointValueSpan: 0.00});
            pointValueSpan = 0.00;
        }
        if (partialUDL === " " || partialUDL === ""){
            this.setState({partialUDL: 0.00});
            partialUDL = 0.00;
        }
        if (partialUDLStart === " " || partialUDLStart === ""){
            this.setState({partialUDLStart: 0.00});
            partialUDLStart = 0.00;
            //console.log("partialUDLStart = " + partialUDLStart);
        }
        if (partialUDLEnd === " " || partialUDLEnd === ""){
            this.setState({partialUDLEnd: 0.00});
            partialUDLEnd = 0.00;
        }
        
        var loadUnitsText = "KN";
        var pointLeft;
        var pointRight;
        var uDLMiddleSF;
        var sFPUDL;
        var sFPUDR;

        span = parseFloat(span);
        uDL = parseFloat(uDL);
        pointValue = parseFloat(pointValue);
        pointValueSpan = parseFloat(pointValueSpan);
        partialUDL = parseFloat(partialUDL);
        partialUDLStart = parseFloat(partialUDLStart);
        partialUDLEnd = parseFloat(partialUDLEnd);
        pointLeft = parseFloat(0);
        pointRight = parseFloat(0);
        uDLMiddleSF = parseFloat(0);
        sFPUDL = parseFloat(0);
        sFPUDR = parseFloat(0);
        atRA = parseFloat(0);
        atRB = parseFloat(0);
        sFRA = parseFloat(sFRA);
        sFRB = parseFloat(sFRB);
       // var uDLMiddleSFR = 0;

        //if there is a UDL and Point load case.
        if (pointValue > 0 && partialUDL === 0){
            pointLeft = sFRA - (uDL * pointValueSpan);
            pointRight = pointLeft - pointValue;
            atRB = pointRight - ((span - pointValueSpan) * uDL);
            if((atRB + reactionB) === 0) {
                console.log("Shear force for point load and UDL is correct." + "\nRB: " + sFRB + " and shear force at RB is " + atRB);
            } else if (atRB !== reactionB){
                console.log ("Shear force for point load and UDL is NOT CORRECT." + "\nRB: " + sFRB + " and shear force at RB is " + atRB);
            }
        } else {
            console.log("UDL calc and Point Load calc skipped");
        }
        //if there is a UDL case only
        if (uDL > 0 && pointValue === 0 && partialUDL === 0){
            uDLMiddleSF =  sFRA - (uDL *(span/2));
            console.log("UDL ONLY SF @ middle = " + uDLMiddleSF);
            atRB = uDLMiddleSF - (uDL * (span/2));
            if((atRB + reactionB) === 0) {
                console.log("Shear force for point load and UDL is correct." + "\nRB: " + sFRB + " and shear force at RB is " + atRB);
            } else if (atRB !== reactionB){
                console.log ("Shear force for point load and UDL is NOT CORRECT." + "\nRB: " + sFRB + " and shear force at RB is " + atRB);
            }   
        } else {
            console.log("UDL calc ONLY skipped");
        }
        //if there is a partial UDL case and UDL case.
        if (partialUDL > 0 && pointValue === 0){
            sFPUDL = sFRA - (uDL * (partialUDLStart));
            
            sFPUDR = sFRA - (partialUDL * (partialUDLEnd - partialUDLStart)) - (uDL * (partialUDLEnd));
            
            console.log("SF @ start pUDL = " + sFPUDL + "\nSF @ end pUDL = " + sFPUDR);
            atRB = parseFloat((sFPUDR - (uDL * (span - partialUDLEnd))));
            if((atRB + reactionB) === 0) {
                console.log("Shear force for Partial IDL is correct." + "\nRB: " + sFRB + " and shear force at RB: " + atRB);
            } else if (atRB !== reactionB){
                console.log ("Shear force for Partial UDL is NOT CORRECT." + "\nRB: " + sFRB + " and shear force at RB: " + atRB);
            }
        } else {
            console.log("Partial UDL calc skipped");
        }
        // if there is a partial UDL case and a point load
        if (pointValue > 0 && partialUDL > 0){
            //if there is a partial UDL case and a point load is placed BEFORE the partial UDL.
            if(pointValueSpan < partialUDLStart) {
                pointLeft = sFRA - (uDL * pointValueSpan);
                console.log("point left: " +pointLeft);
                pointRight = pointLeft - pointValue;
                console.log("point right: " +pointRight);
                sFPUDL = pointRight - (uDL * (partialUDLStart - pointValueSpan));
                console.log("What is sFPUDL:" + parseFloat( sFPUDL));
                sFPUDR = sFPUDL - (partialUDL * (partialUDLEnd - partialUDLStart)) - (uDL * (span - partialUDLEnd));
                console.log("What is sFPUDR:" + sFPUDR);
                atRB = (sFPUDR - (uDL * (span - partialUDLEnd)));
                console.log(sFPUDR);
                if((atRB + reactionB) === 0) {
                    console.log("Shear force for Point and Partial UDL is correct." + "\nRB: " + sFRB + " and shear force at RB: " + atRB);
                } else if (atRB !== reactionB){
                    console.log ("Shear force for Point and Partial UDL is NOT CORRECT." + "\nRB: " + sFRB + " and shear force at RB: " + atRB);
                } 
                //if a point load falls WITHIN or START or END of partial UDL.
            } else if (pointValueSpan >= partialUDLStart && pointValueSpan <= partialUDLEnd){
                sFPUDL = sFRA - (uDL * partialUDLStart);
                pointLeft = sFPUDL - (uDL * (pointValueSpan - partialUDLStart)) - (partialUDL * (pointValueSpan - partialUDLStart));
                pointRight = pointLeft - pointValue;
                sFPUDR = pointRight - (partialUDL * (partialUDLEnd - pointValueSpan)) - (uDL * (partialUDLEnd - pointValueSpan));
                atRB = sFPUDR - (uDL * (span - partialUDLEnd));
                if((atRB + reactionB) === 0) {
                    console.log("Shear force for Point WITHIN Partial UDL is correct." + "\nRB: " + sFRB + " and shear force at RB: " + atRB);
                } else if (atRB !== reactionB){
                    console.log ("Shear force for Point WITHIN Partial UDL is NOT CORRECT." + "\nRB: " + sFRB + " and shear force at RB: " + atRB);
                }
                } else if (pointValueSpan > partialUDLEnd){
                    sFPUDL = sFRA - (uDL * partialUDLStart);
                    sFPUDR = sFPUDL - (partialUDL * (partialUDLEnd - partialUDLStart)) - (uDL * (partialUDLEnd - partialUDLStart));
                    pointLeft = sFPUDR - (uDL * (pointValueSpan - partialUDLEnd));
                    pointRight = pointLeft - pointValue;
                    atRB = pointRight - (uDL * (span - pointValueSpan));
                    if((atRB + reactionB) === 0) {
                        console.log("Shear force for Point at RIGHT OF PARTIAL UDL is correct." + "\nRB: " + sFRB + " and shear force at RB: " + atRB);
                    } else if (atRB !== reactionB){
                        console.log ("Shear force for Point at RIGHT OF PARTIAL UDL is NOT CORRECT." + "\nRB: " + sFRB + " and shear force at RB: " + atRB);
                    }
                }
        } else {
            console.log("Point Value and Partial UDL calc skipped.");
        }

        ShearForceTextA = "SFA = " + sFRA.toFixed(2) + loadUnitsText;
        ShearForceTextB = "SFB = " + sFRB.toFixed(2) + loadUnitsText;
        console.log("Do we get to end of Shear calculation? YES!");

        //TODO: shear force for point load before Partial UDL
        //TODO: shear for for point load in partial UDL
        //TODO: shear force for point load after partial UDL.

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
            <Text style ={{fontSize: 20, padding: 10}}>
            {this.state.ShearForceTextA}</Text>
            <Text style ={{fontSize: 20, padding: 10}}>
            {this.state.ShearForceTextB}</Text>
            
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
