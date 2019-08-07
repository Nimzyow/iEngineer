import React from 'react';
import { Keyboard, StyleSheet, View, TextInput, TouchableWithoutFeedback, Alert, Animation, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Card, List, Text, ListItem } from "native-base";

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
              
              PitchedRoofLengthText: "1",
              FinalPitchedRoofSelection: "",
              pitchedRoofSelectionSuccess: false,
           
  //          BEAM CHECK STATUS
  
              beamCheckReady: false
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
      const flatRoofLengthText = navigation.getParam("flatRoofLenght", 0);
      //below are booleans
      const wallSelectionSuccess = navigation.getParam("wallSuccess", 0);
      const floorSelectionSucess = navigation.getParam("floorSuccess", 0);
      const flatRoofSelectionSuccess = navigation.getParam("flatRoofSuccess", 0);
      const pitchedRoofSelectionSuccess = navigation.getParam("pitchedRoofSuccess", 0);
      const deadLoad = this.loadingDeterminationDead();
      const liveLoad = this.loadingDeterminationLive();
      console.log("Dead Load = " + deadLoad);
      console.log("Live Load = " + liveLoad);
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
        pitchedRoofSelectionSuccess: pitchedRoofSelectionSuccess}, () => {console.log("Beam: " + this.state.beamSelect + "\n" + "Beam Length is: " + this.state.beamLengthText + "\n" + "Wall type: " + this.state.finalWallSelection +  "\n" + "wall height: " + this.state.wallHeightText + "\n" + "wall Selection Boolean: " + this.state.wallSelectionSuccess + "\n" + "floor type: " + this.state.finalFloorSelection + "\n" + "floor length: " + this.state.floorLengthText + "\n" + "floor selection boolean: " + this.state.floorSelectionSucess + "\n" + "Flat Roof type: " + this.state.finalFlatRoofSelection + "\n" + "Flat Roof length: " + this.state.flatRoofLengthText + "\n" + "Flat Roof selection boolean: " + this.state.flatRoofSelectionSuccess)})
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
      let deadLoad = 0; // KN/m2
      //let liveLoad = 0; // KN/m2

      if (wallSuccess){
        if(wallType === "Brick and Block Cavity Wall"){
          let thicknessBlock = 0.11 // m
          let thicknessBrick = 0.11 // m
          let weightBrick = 20; // KN/m3
          let weightBlock = 14; // KN/m3
          deadLoad = (weightBrick * thicknessBrick) + (weightBlock * thicknessBlock);
          console.log("Brick Block load = " + deadLoad);      
        } 
        else if (wallType === "Block and Block Cavity Wall") {
          let thickness = 0.22 // m
          let weight = 14; // KN/m3
          deadLoad = weight * thickness; 
          console.log("Block Block load = " + deadLoad);          
        }
        else if (wallType === "Solid Brick Wall") {
          let thickness = 0.35 // m
          let weight = 20; // KN/m3
          deadLoad = weight * thickness;
          console.log("Solid Brick load = " + deadLoad);    
        }
        else if (wallType === "Solid Block Wall") {
          let thickness = 0.35 // m
          let weight = 14; // KN/m3
          deadLoad = weight * thickness;
          console.log("Solid Block wall = " + deadLoad); 
        }
        else if (wallType === "Internal timber wall") {      
          let weight = 0.63; // KN/m2
          deadLoad = weight; 
          console.log("Internal timber load = " + deadLoad);  
        }
        else if (wallType === "External timber wall") {
          let weight = 1.18; // KN/m2
          deadLoad = weight;  
          console.log("External timber load = " + deadLoad);        
        }
      } else if (floorSuccess) {
          if(floorType === "Timber Floor Joist") {
            let deadWeight = 0.79 //KN/m2
            //let liveWeight = 1.5 //KN/m2
            deadLoad = deadLoad + deadWeight;
            //liveLoad = liveLoad + liveWeight;
          } else if (floorType === "Reinforced Concrete Floor") {
            let deadWeight = 3 //KN/m2
            //let liveWeight = 1.5 //KN/m2
            deadLoad = deadLoad + deadWeight;
            //liveLoad = liveLoad + liveWeight;
          }
      } else if (flatRoofSuccess) {
            if (flatRoofType === "Timber Flat Roof"){
              let deadWeight = 0.83 //KN/m2
              //let liveWeight = 0.94 //KN/m2
              deadLoad = deadLoad + deadWeight;
              //liveLoad = liveLoad + liveWeight;
            } else if (flatRoofType === "Concrete Flat Roof"){
                let deadWeight = 3 //KN/m2
                //let liveWeight = 0.94 //KN/m2
                deadLoad = deadLoad + deadWeight;
                //liveLoad = liveLoad + liveWeight; 
            }
      }
      return deadLoad;
    }

    loadingDeterminationLive = () => {
      //let deadLoad = 0; // KN/m2
      let liveLoad = 0; // KN/m2

      if (floorSuccess !== "" || floorSuccess !== 0) {
          if(floorSuccess === "Timber Floor Joist") {
            //let deadWeight = 0.79 //KN/m2
            let liveWeight = 1.5 //KN/m2
            //deadLoad = deadLoad + deadWeight;
            liveLoad = liveLoad + liveWeight;
          } else if (floorSuccess === "Reinforced Concrete Floor") {
            //let deadWeight = 3 //KN/m2
            let liveWeight = 1.5 //KN/m2
            //deadLoad = deadLoad + deadWeight;
            liveLoad = liveLoad + liveWeight;
          }
      } else if (flatRoofSuccess !== "" || flatRoofSuccess !== 0) {
            if (flatRoofSuccess === "Timber Flat Roof"){
              //let deadWeight = 0.83 //KN/m2
              let liveWeight = 0.94 //KN/m2
              //deadLoad = deadLoad + deadWeight;
              liveLoad = liveLoad + liveWeight;
            } else if (flatRoofSuccess === "Concrete Flat Roof"){
                //let deadWeight = 3 //KN/m2
                let liveWeight = 0.94 //KN/m2
                //deadLoad = deadLoad + deadWeight;
                liveLoad = liveLoad + liveWeight; 
            }
      }
      return liveLoad;
    }

  render() {
    let deflection = this.udlDefCalc(15000, 10000, 45730);
    console.log("deflection is " + deflection);
  return (
    <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Text>Let's now check if the beam selected is ok.</Text>
                <Text>{sectionSize}</Text>
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
