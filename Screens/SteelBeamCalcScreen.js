import React from 'react';
import { Keyboard, StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Alert, Animation, ScrollView } from 'react-native';
import { Button } from "native-base";
import { LineChart, Grid, AreaChart, Path } from "react-native-svg-charts";
import { Defs, ClipPath, LinearGradient, Rect, Stop } from "react-native-svg";
import * as shape from "d3-shape"

import ReactionCalc from '../assets/Scripts/ReactionCalc';

var reactionA, reactionB;
reactionA = 0.00;
reactionB = 0.00;
const moments = [];
const shearForce = [];

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

            ShearForceTextA: " ", ShearForceTextB: " ",

            MaxBendingText: " ", MinBendingText: " "
        }
    obj = new ReactionCalc();
    }

    componentWillMount(){
        this.resetValues();
    }

    callFunction = () => {
        obj.beamCalculation();
    }

    resetValues = () => {
        moments.length = 0;
        shearForce.length = 0;
        reactionA = 0.00;
        reactionB = 0.00;
        console.log("reset values");
    }

    BMPointCalc = ( currentDistance,load, toLoad) => {
        if(load > 0){
            if (currentDistance > toLoad) {
                return (load * (currentDistance - toLoad));
            } else if (currentDistance <= toLoad) {
                return 0.00;
            }
        } else {
            return 0.00;
        }
    }
    BMPartialUDLCalc = (currentDistance, partialLoad, distToPartialLoadStart, disToPartialLoadEnd) => {
        if (partialLoad > 0){
            if (currentDistance <= distToPartialLoadStart){
                return 0.00;
            } else if (currentDistance > distToPartialLoadStart && currentDistance <= disToPartialLoadEnd){
                return (partialLoad * (currentDistance - distToPartialLoadStart) * (currentDistance - distToPartialLoadStart) / 2);
            } else if (currentDistance > disToPartialLoadEnd){
                return (partialLoad * (disToPartialLoadEnd - distToPartialLoadStart) * (currentDistance - distToPartialLoadStart - (0.5) * (disToPartialLoadEnd - distToPartialLoadStart)));
            } 
        } else {
            return 0.00;
        }
    }
    BMUDLCalc = (fullLoad, currentDistance) => {
        if (fullLoad > 0) {
            return fullLoad * currentDistance * currentDistance / 2;
        } else {
            return 0.00;
        }
    }

    shearForceReaction = (shearForce) => {
        return shearForce;
    }

    shearForcePointCalc = (currentDistance, pointLoad, pointLoadDistance) => {
        if(pointLoad > 0){
        if (currentDistance < pointLoadDistance){
            return 0.00;
        } else if (currentDistance >= pointLoadDistance){
            return pointLoad;
        }
    } else { 
        return 0.00;
    }
}

    shearForcePartialUDL = (currentDistance, partialUDLStart, partialUDLEnd, partialUDL) => {
        if(partialUDL > 0){
        if (currentDistance >= partialUDLStart && currentDistance <= partialUDLEnd){
            let result = (partialUDL * (currentDistance - partialUDLStart));
            return result;
            } else if (currentDistance > partialUDLEnd) {
                return (partialUDL * (partialUDLEnd - partialUDLStart));
                } else if (currentDistance < partialUDLStart) {
                    return 0.00;
        }
    } else {
        return 0.00;
    }
}

    shearForceFullUDL = (currentDistance, uDL) => {
        if (uDL > 0){
        return uDL * currentDistance;
    } else { 
        return 0.00;
    }
}

    beamCalculation = () => {
        
    this.resetValues();
    
    var span = this.state.beamSpan;
    
    var uDL = this.state.uDLValue;
    
    var pointValue = this.state.pointValue;
    
    var pointValueSpan = this.state.pointValueSpan;
    
    var partialUDL = this.state.partialUDL;
    
    var partialUDLStart = this.state.partialUDLStart;
    
    var partialUDLEnd = this.state.partialUDLEnd;
    
    var loadUnitsText = this.state.loadUnitsText;

    if (span === " " || span === ""){
        this.setState({beamSpan: 0})
        span = 0.00;
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

    //as long as someone enters a beam span, we will be able to go with the calcualtion. otherwise, an alert will pop up to enter span.
    if (span !== " " || 0){
        
        if (pointValueSpan <= span){
        if ((partialUDLEnd - partialUDLStart) <= span){
            //if only a UDL value is entered and beam span, we will do a simple UDL reaction calc.
    
            // **********************UDL*************************
            
            if (uDL > 0){
            var convertUDLToPoint = uDL * span;
            var reactionBUDL = (convertUDLToPoint*(span / 2))/(span);
            var reactionAUDL = reactionBUDL;
            reactionB = reactionBUDL;
            reactionA = reactionAUDL;
            }
            // **********************POINT LOAD *************************
    
            if (pointValue > 0){
                    
                    var reactionBPointLoad = (pointValueSpan * pointValue)/span;
                    var reactionAPointLoad = (pointValue - reactionBPointLoad);
                    reactionB = reactionB + reactionBPointLoad;
                    reactionA = reactionA + reactionAPointLoad;
                } 

                //if only a Partial UDL value is entered and beam span, we will do a simple UDL reaction calc.
    
                // **********************PARTIAL UDL ONLY*************************
                if(partialUDL > 0){
                if ( partialUDLStart < partialUDLEnd){
                    
                    if (partialUDLStart >= 0 && partialUDLEnd > 0){
                        //TODO: Enter formula to perform the partial UDL load only here.
                        var convertPUDLtoPoint = partialUDL * (partialUDLEnd - partialUDLStart);
                        var newPointPosition = ((partialUDLEnd - partialUDLStart)/2) +  partialUDLStart;
                        
                        var reactionBPUDL = ((newPointPosition * convertPUDLtoPoint)/span);
                        var reactionAPUDL = (convertPUDLtoPoint - reactionBPUDL);

                        reactionB = reactionB + reactionBPUDL;
                        reactionA = reactionA + reactionAPUDL;
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
        console.log("Do we get to set all state for reactions? YES!")
        
        this.setState({
            reactionTextA,
            reactionTextB,
        });

        this.shearForceCalcualtion();                    
            
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
        //reset shearforce array if it was already populated. This is so we dont add to the array from previous calculation
        //shearForce.length = 0;

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
       
        for (let i = 0.00; i <= span; i += 0.01){
            let shearCalc = this.shearForceReaction(sFRA) - this.shearForcePointCalc(i, pointValue, pointValueSpan) - this.shearForcePartialUDL(i, partialUDLStart, partialUDLEnd, partialUDL) - this.shearForceFullUDL(i, uDL);
            shearForce.push(shearCalc);
        }

        let shearMax = (Math.max.apply(null, shearForce)).toFixed(2);
        let shearMin = (Math.min.apply(null, shearForce)).toFixed(2);
        ShearForceTextA = "SFMax = " + shearMax + loadUnitsText;
        ShearForceTextB = "SFMin = " + shearMin + loadUnitsText;

        this.setState({
            ShearForceTextA,
            ShearForceTextB,
        });
        this.bendingMomentCalculation();
    }

    bendingMomentCalculation = () => {

        var sFRA = reactionA;
        var span = this.state.beamSpan;
        var uDL = this.state.uDLValue;
        var pointValue = this.state.pointValue;
        var pointValueSpan = this.state.pointValueSpan;
        var partialUDL = this.state.partialUDL;
        var partialUDLStart = this.state.partialUDLStart;
        var partialUDLEnd = this.state.partialUDLEnd;

        if (span === " " || span === ""){
            this.setState({beamSpan: 0.00})
            span = 0.00;
            //span = this.state.beamSpan;
        }
        if (uDL === " " || uDL === ""){
            this.setState({uDLValue: 0.00});
            uDL = 0.00;
        }
        if (pointValue === " " || pointValue === ""){
            this.setState({pointValue: 0.00});
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
        sFRA = parseFloat(sFRA);
        

        //bending moment array is reset to 0 so that moments from previous calculation doesnt carry over to new calculation.
        //moments.length = 0;
        
        let i = 0.00;

        for (i; i <= span; i += 0.01){
            let momCalc = (sFRA * i - (this.BMUDLCalc(uDL, i)) - (this.BMPointCalc(i, pointValue, pointValueSpan)) - (this.BMPartialUDLCalc(i, partialUDL, partialUDLStart, partialUDLEnd))) * -1;
            moments.push(momCalc);
        }
            let maxBend = (Math.max.apply(null, moments)).toFixed(2);
            let maxBendPos = moments.indexOf((Math.max.apply(null, moments)));
            let minBend = (Math.min.apply(null, moments)).toFixed(2);
            let minBendPos = moments.indexOf((Math.min.apply(null, moments)));
            console.log("Max bending moment = " + maxBend + "KN.m" + " @ " + maxBendPos + "cm");
            console.log("Min bending moment = " + minBend + "KN.m" + " @ " + minBendPos + "cm");
            console.log("Bending moment array length = " + moments.length);

            MinBendingText = "Min BM = " + (maxBend + "KN" + " @ " + maxBendPos + "cm");
            MaxBendingText = "Max BM = " + (minBend + "KN" + " @ " + minBendPos + "cm");

            this.setState({
                MinBendingText,
                MaxBendingText
            })

    }


//the handle text change below is for floating text 
//handleTextChange = (newText) => this.setState({value: newText});

  render() {
    const indexToClipFrom = 10

    const Gradient = () => (
        <Defs key={ 'defs' }>
            <LinearGradient id={ 'gradient' } x1={ '0%' } y={ '0%' } x2={ '0%' } y2={ '100%' }>
                <Stop offset={ '0%' } stopColor={ 'rgb(134, 65, 244)' } stopOpacity={ 0.8 }/>
                <Stop offset={ '100%' } stopColor={ 'rgb(134, 65, 244)' } stopOpacity={ 0.2 }/>
            </LinearGradient>
        </Defs>
    )

    const Clips = ({ x, width }) => (
        <Defs key={ 'clips' }>
            <ClipPath id={ 'clip-path-1' } key={ '0' }>
                <Rect x={ 0 } y={ '0' } width={ x(indexToClipFrom) } height={ '100%' }/>
            </ClipPath>
            <ClipPath id="clip-path-2" key={ '1' }>
                <Rect x={ x(indexToClipFrom) } y={ '0' } width={ width - x(indexToClipFrom) } height={ '100%' }/>
            </ClipPath>
        </Defs>
    )

    const Line = ({ line }) => (
        <Path
            key={ 'line' }
            d={ line }
            stroke={ 'green' }
            fill={ 'none' }
            clipPath={ 'url(#clip-path-1)' }
        />
    )

    const DashedLine = ({ line }) => (
        <Path
            key={ 'dashed-line' }
            stroke={ 'green' }
            d={ line }
            fill={ 'none' }
            clipPath={ 'url(#clip-path-2)' }
            strokeDasharray={ [ 4, 4 ] }
        />
    )
  return (
      <ScrollView>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Calculation of a simply supported beam with a UDL load.</Text>      
        </View>  
            <Text style={{fontSize: 14, color: "#000"}}>Enter Beam Span (m)</Text>
            

            <TextInput 
                style={styles.inputContainer}
                placeholder="Tap here to enter beam span"
                onChangeText={(beamSpan) =>  this.setState({beamSpan: beamSpan})}
                keyboardType={'numeric'}/>


            <Text style={{fontSize: 14, color: "#000"}}>
                Enter UDL (KN/m)
            </Text>
                <TextInput 
                    style={styles.inputContainer}
                    placeholder="Tap here to enter UDL"
                    onChangeText={(uDLValue) => this.setState({uDLValue: uDLValue})}
                    keyboardType={'numeric'}/>

            <Text style={{fontSize: 14, color: "#000"}}>
                Enter Point Load (KN)
            </Text>
                <TextInput
                    style={styles.inputContainer}
                    placeholder="Enter Point Load"
                    onChangeText={(pointValue) => this.setState({pointValue: pointValue})}
                    keyboardType={'numeric'}/>

            <Text style={{fontSize: 14, color: "#000"}}>
                Enter Point Load Span (m)
            </Text>
                <TextInput
                    style={styles.inputContainer}
                    placeholder="Enter Point Load Span from left support"
                    onChangeText={(pointValueSpan) => this.setState({pointValueSpan: pointValueSpan})}
                    keyboardType={'numeric'}/>
            
            <Text style={{fontSize: 14, color: "#000"}}>
                Enter Partial UDL (KN/m)
            </Text>
                <TextInput
                    style={styles.inputContainer}
                    placeholder="Enter Partial UDL"
                    onChangeText={(partialUDL) => this.setState({partialUDL: partialUDL})}
                    keyboardType={'numeric'}/>
            
            <Text style={{fontSize: 14, color: "#000"}}>
                Position from RA to start of Partial UDL (m)
            </Text>
                <TextInput
                    style={styles.inputContainer}
                    placeholder="Enter Position to Partial UDL start"
                    onChangeText={(partialUDLStart) => this.setState({partialUDLStart: partialUDLStart})}
                    keyboardType={'numeric'}/>

            <Text style={{fontSize: 14, color: "#000"}}>
                Position from RA to end of Partial UDL (m)
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
        
            {/* ---------Display results below----------- */}
            <View style = {{flexDirection: "row", justifyContent: "center", borderWidth: 2}}>
            <Text style={{fontSize: 20, padding: 10, marginEnd: 50}}>{this.state.reactionTextA}</Text>
            <Text style={{fontSize: 20, padding: 10}}>{this.state.reactionTextB}</Text>
            </View>
            <View style = {{flexDirection: "row", justifyContent: "center", borderWidth: 2}}>
            <Text style ={{fontSize: 20, padding: 10}}>{this.state.ShearForceTextA}</Text>
            <Text style ={{fontSize: 20, padding: 10}}>{this.state.ShearForceTextB}</Text>
            </View>
            <View style = {{flexDirection: "column", justifyContent: "center", borderWidth: 2}}>
            <Text style ={{fontSize: 20, padding: 10}}>{this.state.MaxBendingText}</Text>
            <Text style ={{fontSize: 20, padding: 10}}>{this.state.MinBendingText}</Text>
            </View>

            {/* ---------Button to calculate Reaction ----------- */}
        <View style={styles.button}>
            <Button 
                style={styles.text} 
                block success
                onPress={() => {
                this.beamCalculation()
                }}>
                    <Text style={{fontSize: 20}}>Calculate Forces</Text>
            </Button>       
        </View>
        <LineChart
                style={{ height: 200, marginLeft: 10, marginRight: 10 }}
                data={ moments }
                svg={{ stroke: 'rgb(134, 65, 244)' }}
                contentInset={{ top: 20, bottom: 20 }}
            >
                <Grid/>
            </LineChart>
            <AreaChart
                style={{ height: 200, marginLeft: 10, marginRight: 10 }}
                data={ shearForce }
                contentInset={{ top: 30, bottom: 30 }}
                curve={ shape.curveNatural }
                svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                contentInset={contentInset = { top: 20, bottom: 20 }}
            >
                <Grid/>
            </AreaChart>
    </View>
</TouchableWithoutFeedback>
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
