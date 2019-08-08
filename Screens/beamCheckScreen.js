import React from 'react';
import { Keyboard, StyleSheet, View, TextInput, TouchableWithoutFeedback, Alert, Animation, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Card, List, Text, ListItem } from "native-base";

let deadLoad, liveLoad, reactionA, reactionB;
reactionA = 0.00;
reactionB = 0.00;
deadLoad = 0.00;
liveLoad = 0.00
const moments = [];
const shearForce = [];

export default class beamCheckScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
              
  //          BEAM SELECTION
              beamSelect: "",
              beamLengthText: "",
  
  //          ALL WALL STATES
 
              wallHeightText: "",
              wallSelectionSuccess: false,
              finalWallSelection:"",
  
  //          ALL FLOOR STATES
  
              floorLengthText: "1",
              finalFloorSelection: "",
              floorSelectionSucess: false,
  
  //          ALL ROOF STATES
              // Flat Roof states
  
              flatRoofLengthText: "1",
              finalFlatRoofSelection: "",
              flatRoofSelectionSuccess: false,              
  
              // Pitched Roof states
              
              pitchedRoofLengthText: "1",
              finalPitchedRoofSelection: "",
              pitchedRoofSelectionSuccess: false,
           
        };
    }
//the below will add a header, whose properties, ike fontsize, color etc... can be controlled in the App.js
    static navigationOptions = {
      title: "Beam Checker"
    }

    componentWillMount(){
      const {navigation} = this.props;
      const beamSelect = navigation.getParam("sectionSize", 0);
      const beamLengthText = navigation.getParam("sectionLength", 0);
      const finalWallSelection = navigation.getParam("wallType", 0);
      const wallHeightText = navigation.getParam("wallHeight", 0);
      const finalFloorSelection = navigation.getParam("floorType", 0);
      const floorLengthText = navigation.getParam("floorLength", 0);
      const finalFlatRoofSelection = navigation.getParam("flatRoofType", 0);
      const flatRoofLengthText = navigation.getParam("flatRoofLength", 0);
      //***** ** BOOLEANS BELOW ** *****
      const wallSelectionSuccess = navigation.getParam("wallSuccess", 0);
      const floorSelectionSucess = navigation.getParam("floorSuccess", 0);
      const flatRoofSelectionSuccess = navigation.getParam("flatRoofSuccess", 0);
      const pitchedRoofSelectionSuccess = navigation.getParam("pitchedRoofSuccess", 0);

      this.setState({
        beamSelect: beamSelect,
        beamLengthText: beamLengthText,
        wallHeightText: wallHeightText,
        finalWallSelection: finalWallSelection,
        floorLengthText: floorLengthText,
        finalFloorSelection: finalFloorSelection,
        flatRoofLengthText: flatRoofLengthText,
        finalFlatRoofSelection: finalFlatRoofSelection,
        //below are booleans
        floorSelectionSucess: floorSelectionSucess,
        wallSelectionSuccess: wallSelectionSuccess,
        flatRoofSelectionSuccess: flatRoofSelectionSuccess,
        pitchedRoofSelectionSuccess: pitchedRoofSelectionSuccess}, () => {
          console.log(
          "Beam: " + this.state.beamSelect + "\n" + 
          "Beam Length: " + this.state.beamLengthText + "\n" + 
          "Wall type: " + this.state.finalWallSelection +  "\n" + 
          "Wall height: " + this.state.wallHeightText + "\n" + 
          "Wall Selection Boolean: " + this.state.wallSelectionSuccess + "\n" + 
          "Floor type: " + this.state.finalFloorSelection + "\n" + 
          "Floor length: " + this.state.floorLengthText + "\n" + 
          "Floor selection boolean: " + this.state.floorSelectionSucess + "\n" + 
          "Flat Roof type: " + this.state.finalFlatRoofSelection + "\n" + 
          "Flat Roof length: " + this.state.flatRoofLengthText + "\n" + 
          "Flat Roof selection boolean: " + this.state.flatRoofSelectionSuccess);
          this.loadingDeterminationDead();
          this.loadingDeterminationLive();
      })
    }

    beamCalculation = () => {
        
      this.resetValues();
      
      let span = this.state.beamLengthText;
      
      span = parseFloat(span);
      deadLoad = parseFloat(deadLoad);
      liveLoad = parseFloat(liveLoad);
  
      //as long as someone enters a beam span, we will be able to go with the calcualtion. otherwise, an alert will pop up to enter span.
     
              //if only a UDL value is entered and beam span, we will do a simple UDL reaction calc.
      
              // **********************UDL*************************
              
              if (uDL > 0){
              let convertUDLToPoint = uDL * span;
              let reactionBUDL = (convertUDLToPoint*(span / 2))/(span);
              let reactionAUDL = reactionBUDL;
              reactionB = reactionBUDL;
              reactionA = reactionAUDL;
              }
              // **********************POINT LOAD *************************
      
              if (pointValue > 0){
                      
                      let reactionBPointLoad = (pointValueSpan * pointValue)/span;
                      let reactionAPointLoad = (pointValue - reactionBPointLoad);
                      reactionB = reactionB + reactionBPointLoad;
                      reactionA = reactionA + reactionAPointLoad;
                  } 
  
                  //if only a Partial UDL value is entered and beam span, we will do a simple UDL reaction calc.
      
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
              
                                     
      
                                                              
      
      
      }

    udlDefCalc = (load, length, inertia) => {
        let deflection = ((5 * load * length * length * length) / (384 * 210 * inertia))/1000000
        return deflection;
    }
    pointDefCalc = (load, length, inertia) => {
        let deflection = ((1 * load * length * length * length) / (48 * 210 * inertia)) / 1000000
        return deflection;
    }

    loadingDeterminationDead = () => {
      deadLoad = 0; // KN/m2
      //let liveLoad = 0; // KN/m2
      const state = this.state;
      const beamSelect = state.beamSelect;
      const wallHeightText = state.wallHeightText;
      const finalWallSelection = state.finalWallSelection;
      const floorLengthText = state.floorLengthText;
      const finalFloorSelection = state.finalFloorSelection;
      const flatRoofLengthText = state.flatRoofLengthText;
      const finalFlatRoofSelection = state.finalFlatRoofSelection;
      //                ***** BOOLEAN *****
      const floorSelectionSucess = state.floorSelectionSucess;
      const wallSelectionSuccess = state.wallSelectionSuccess;
      const flatRoofSelectionSuccess = state.flatRoofSelectionSuccess;
      const pitchedRoofSelectionSuccess = state.pitchedRoofSelectionSuccess; 

      if (wallSelectionSuccess){
        if(finalWallSelection === "Brick and Block Cavity Wall"){
          let thicknessBlock = 0.11 // m
          let thicknessBrick = 0.11 // m
          let weightBrick = 20; // KN/m3
          let weightBlock = 14; // KN/m3
          let height = wallHeightText;
          deadLoad = (((weightBrick * thicknessBrick) + (weightBlock * thicknessBlock)) * height) + deadLoad;
          console.log("Brick Block load = " + deadLoad);      
        } 
        else if (finalWallSelection === "Block and Block Cavity Wall") {
          let thickness = 0.22 // m
          let weight = 14; // KN/m3
          let height = wallHeightText;
          deadLoad = (weight * thickness * height) + deadLoad; 
          console.log("Block Block load = " + deadLoad);          
        }
        else if (finalWallSelection === "Solid Brick Wall") {
          let thickness = 0.35 // m
          let weight = 20; // KN/m3
          let height = wallHeightText;
          deadLoad = (weight * thickness * height) + deadLoad;
          console.log("Solid Brick load = " + deadLoad);    
        }
        else if (finalWallSelection === "Solid Block Wall") {
          let thickness = 0.35 // m
          let weight = 14; // KN/m3
          let height = wallHeightText;
          deadLoad = (weight * thickness * height) + deadLoad;
          console.log("Solid Block wall = " + deadLoad); 
        }
        else if (finalWallSelection === "Internal timber wall") {      
          let weight = 0.63; // KN/m2
          let height = wallHeightText;
          deadLoad = (weight * height) + deadLoad; 
          
          console.log("Internal timber load = " + deadLoad);  
        }
        else if (finalWallSelection === "External timber wall") {
          let weight = 1.18; // KN/m2
          let height = wallHeightText;
          deadLoad = (weight * height) + deadLoad;  
          console.log("External timber load = " + deadLoad);        
        }
      } else if (floorSelectionSucess) {
          if(finalFloorSelection === "Timber Floor Joist") {
            let deadWeight = 0.79 //KN/m2
            let length = floorLengthText;         
            deadLoad = deadLoad + (deadWeight * length);
          } else if (finalFloorSelection === "Reinforced Concrete Floor") {
            let deadWeight = 3 //KN/m2
            let length = floorLengthText;
            deadLoad = deadLoad + (deadWeight * length);
          }
      } else if (flatRoofSelectionSuccess) {
            if (finalFlatRoofSelection === "Timber Flat Roof"){
              let deadWeight = 0.83 //KN/m2
              let length = flatRoofLengthText;
              deadLoad = deadLoad + (deadWeight * length);
            } else if (finalFlatRoofSelection === "Concrete Flat Roof"){
                let deadWeight = 3 //KN/m2
                let length = flatRoofLengthText;
                deadLoad = deadLoad + (deadWeight * length);
            }
      }
      console.log("Total dead= " + deadLoad);
      return deadLoad;
    }

    loadingDeterminationLive = () => {
      liveLoad = 0; // KN/m2
      const state = this.state;
      const beamSelect = state.beamSelect;
      const floorLengthText = state.floorLengthText;
      const finalFloorSelection = state.finalFloorSelection;
      const flatRoofLengthText = state.flatRoofLengthText;
      const finalFlatRoofSelection = state.finalFlatRoofSelection;
      //                ***** BOOLEAN *****
      const floorSelectionSucess = state.floorSelectionSucess;
      const wallSelectionSuccess = state.wallSelectionSuccess;
      const flatRoofSelectionSuccess = state.flatRoofSelectionSuccess;
      const pitchedRoofSelectionSuccess = state.pitchedRoofSelectionSuccess;

      if (floorSelectionSucess) {
          if(finalFloorSelection === "Timber Floor Joist") {
            let liveWeight = 1.5 //KN/m2
            let length = floorLengthText;
            liveLoad = liveLoad + (liveWeight * length);
          } else if (finalFloorSelection === "Reinforced Concrete Floor") {
            let liveWeight = 1.5 //KN/m2
            let length = floorLengthText;
            liveLoad = liveLoad + (liveWeight * length);
          }
      } else if (flatRoofSelectionSuccess) {
            if (finalFlatRoofSelection === "Timber Flat Roof"){
              let liveWeight = 0.94 //KN/m2
              let length = flatRoofLengthText
              liveLoad = liveLoad + (liveWeight * length);
            } else if (finalFlatRoofSelection === "Concrete Flat Roof"){
                let liveWeight = 0.94 //KN/m2
                let length = flatRoofLengthText;
                liveLoad = liveLoad + (liveWeight * length); 
            }
      }
      console.log("Total live= " + liveLoad);
      return liveLoad;
    }

  render() {
    {/*let deflection = this.udlDefCalc(15000, 10000, 45730);
    console.log("deflection is " + deflection);*/}
  return (
    <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Text>Let's now check if the beam selected is ok.</Text>
                <Text>{this.state.beamSelect}</Text>
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
    backgroundColor: '#fff'
  },
  
});
