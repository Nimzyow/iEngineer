import React from 'react';
import { Keyboard, StyleSheet, View, TextInput, TouchableWithoutFeedback, Alert, Animation, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Card, List, Text, ListItem } from "native-base";

export default class beamCheckScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            beamSelect: "Please tap to select beam",
        };
    }
//the below will add a header, whose properties, ike fontsize, color etc... can be controlled in the App.js
    static navigationOptions = {
      title: "Beam Checker"
    }

  render() {

    {/*sectionSize: beamSelect,
                                sectionLength: this.state.beamLengthText,
                                wallType: this.state.FinalWallSelection,
                                wallHeight: this.state.wallHeightText,
                                floorType: this.state.finalFloorSelection,
                                floorLength: this.state.floorLengthText,
                                flatRoofType: this.state.FinalFlatRoofSelection,
                                flatRoofLength: this.state.flatRoofLengthText, */}
    
    const {navigation} = this.props;
    const sectionSize = navigation.getParam("sectionSize", 0);
    const sectionLength = navigation.getParam("sectionLength", 0);
    const wallType = navigation.getParam("wallType", 0);
    const wallHeight = navigation.getParam("wallHeight", 0);
    const floorType = navigation.getParam("floorType", 0);
    const floorLength = navigation.getParam("floorLength", 0);
    const flatRoofType = navigation.getParam("flatRoofType", 0);
    const flatRoofLength = navigation.getParam("flatRoofLenght", 0);
    
    
   console.log(sectionSize + " " + sectionLength + " " + wallType + " " + wallHeight + " " + floorType + " " + floorLength + " " + flatRoofType + " " + flatRoofLength)

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
    backgroundColor: '#fff',
    //alignItems: "flex-start"
    //justifyContent: 'center',
  },
  
});
