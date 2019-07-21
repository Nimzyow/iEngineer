import React from 'react';
import { Image ,Keyboard, StyleSheet, Text, View, Switch ,TextInput, TouchableWithoutFeedback, TouchableOpacity, Alert, Animation, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button, Card, Form, Item, Input, Label, Icon } from "native-base";
import { Header } from 'react-navigation';

export default class LoadDeterminationScreen extends React.Component {
    constructor (props){
        super(props);
        this.state={

            lengthUnits: "m",

            toggleWallSwitch: true,
            toggleFloorSwitch: false,
            toggleRoofSwitch: false,

//          ALL WALL STATES
            cavityWallSelect: true,
            cavityWallProp: false,
            solidWallSelect: true,
            solidWallProp: false,
            timberWallSelect: true,
            timberWallProp: false,

            brickBlockSelect: true,
            brickBlockPropSelect: false,
            blockBlockSelect: true,
            blockBlockPropSelect: false,

            solidBrickSelect: true,
            solidBrickPropSelect: false,
            solidBlockSelect: true,
            solidBlockPropSelect: false,

            wallHeightReady: false,
            wallHeightText: "",

            FinalWallSelection:""
            
        }
    }

//the below will add a header, whose properties, ike fontsize, color etc... can be controlled in the App.js
    static navigationOptions = {
      title: "Beam Checker"
    }
//Below function will toggle the switch for wall
//value is a boolean which will be sent when toggle switch is pressed. It automatically sends a true or false value which is why we send the argument, value

    resetWallValues = () => {
        this.setState({
            cavityWallSelect: true,
            cavityWallProp: false,
            solidWallSelect: true,
            solidWallProp: false,
            timberWallSelect: true,
            timberWallProp: false,

            brickBlockSelect: true,
            brickBlockPropSelect: false,
            blockBlockSelect: true,
            blockBlockPropSelect: false,

            solidBrickSelect: true,
            solidBrickPropSelect: false,
            solidBlockSelect: true,
            solidBlockPropSelect: false,

            wallHeightReady: false,
            wallHeightText: "",

            FinalWallSelection:""})
    }

    toggleSwitchWall = (value) => {
        this.setState({
            toggleWallSwitch: value,
        });
        if(!value){
            this.resetWallValues();
        }
        console.log("Wall switch is: " + value);
    }

//Below function will toggle the switch for Floor
    toggleSwitchFloor = (value) => {
        this.setState({toggleFloorSwitch: value});
        console.log("Floor switch is: " + value)
    }

//Below function will toggle the switch for roof
    toggleSwitchRoof = (value) => {
        this.setState({toggleRoofSwitch: value});
        console.log("Roof switch is: " + value)
    }

    cavityWallSelect = () => {
        this.setState({
            cavityWallSelect: true,
            cavityWallProp: true,
            solidWallSelect: false,
            solidWallProp: false,
            timberWallSelect: false,
            timberWallProp: false,
            wallHeightReady: false,
            solidBlockPropSelect: false,
            solidBrickPropSelect: false,
            wallHeightReady: false,
            wallHeightText: "",
            FinalWallSelection: "",
            brickBlockPropSelect: true,
            blockBlockPropSelect: true

        })
    }

    solidWallSelect = () => {
        this.setState({
            cavityWallSelect: false,
            cavityWallProp: false,
            solidWallSelect: true,
            solidWallProp: true,
            timberWallSelect: false,
            timberWallProp: false,
            wallHeightReady: false,
            timberWallSelect: false,
            timberWallProp: false,
            wallHeightReady: false,
            solidBlockPropSelect: true,
            solidBrickPropSelect: true,
            wallHeightReady: false,
            wallHeightText: "",
            FinalWallSelection: "",
            brickBlockPropSelect: false,
            blockBlockPropSelect: false
        })
    }
    
    timberWallSelect = () => {
        this.setState({
            cavityWallSelect: false,
            cavityWallProp: false,
            solidWallSelect: false,
            solidWallProp: false,
            timberWallSelect: true,
            timberWallProp: true,
            solidBlockPropSelect: false,
            solidBrickPropSelect: false
        })
    }

    brickBlockSelect = () => {
        this.setState({
            brickBlockSelect: true,
            brickBlockPropSelect: true,
            blockBlockSelect: false,
            blockBlockPropSelect: false,
            wallHeightReady: true,
            FinalWallSelection: "Brick and Block Cavity Wall"
        })
    }

    BlockBlockSelect = () => {
        this.setState({
            brickBlockSelect: false,
            brickBlockPropSelect: false,
            blockBlockSelect: true,
            blockBlockPropSelect: true,
            wallHeightReady: true,
            FinalWallSelection: "Block and Block Cavity Wall"
        })
    }

    solidBrickSelect = () => {
        this.setState({
            solidBrickSelect: true,
            solidBrickPropSelect: true,
            solidBlockSelect: false,
            solidBlockPropSelect: false,
            wallHeightReady: true,
            FinalWallSelection: "Solid Brick Wall"
        })
    }

    solidBlockSelect = () => {
        this.setState({
            solidBrickSelect: false,
            solidBrickPropSelect: false,
            solidBlockSelect: true,
            solidBlockPropSelect: true,
            wallHeightReady: true,
            FinalWallSelection: "Solid Block Wall"
        })
    }

  render() {
  return (
    <KeyboardAvoidingView 
            keyboardVerticalOffset= {Header.HEIGHT + 20} style = {styles.container}
            behavior="padding" enabled>
        <ScrollView>
        <View style={styles.toggleContainer}>
            <Text style={styles.textToggle}>
                Is the beam carrying a wall?</Text>
                {/* The below switch component REQUIRES two callbacks, onValueChange and value. The onValueChange callback will call the toggleSwitchWall function which will change the value of the toggleWallSwitch state. The togglewallSwitch state is the value (a boolean) that the switch renders.  */}
            <Switch style={styles.Switch}
            onValueChange = {this.toggleSwitchWall}
            value={this.state.toggleWallSwitch}
            />
        </View>

        {/* Conditional rendering in the below curly braces. */}
        {
            //the below works because in JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false. Therefore, if the condition is true, the element right after && will appear in the output. If it is false, React will ignore and skip it.
            this.state.toggleWallSwitch &&
            <View>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        Please select wall type
                    </Text>
                </View>
                <View style={{flexDirection:"row", justifyContent:"space-around"}} >
                    <TouchableOpacity
                    onPress={() => {this.cavityWallSelect()}}
                    >
                        <Image style={ this.state.cavityWallSelect || this.state.cavityWallProp ? styles.imageContainer : styles.imageDeselect}
                        source= {require("../assets/Images/cavity_brick_block.png")} />
                        <View style={{alignItems:"center"}}>
                            <Text style={{fontSize:16}}>Cavity Wall</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => {this.solidWallSelect()}}
                    >
                        <Image style={ this.state.solidWallSelect || this.state.solidWallProp ? styles.imageContainer : styles.imageDeselect}
                        source= {require("../assets/Images/cavity_block_block.png")} />     
                        <View style={{alignItems:"center"}}>
                            <Text style={{fontSize:16}}>Solid Wall</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => {this.timberWallSelect()}}
                    >
                        <Image style={ this.state.timberWallSelect || this.state.timberWallProp ? styles.imageContainer : styles.imageDeselect}
                        source= {require("../assets/Images/timber_wall_for_app.png")} />     
                        <View style={{alignItems:"center"}}>
                            <Text style={{fontSize:16}}>Timber Wall</Text>
                        </View>
                    </TouchableOpacity>      
                </View>
            </View>
        }
        {/* The below is conditional rendering for if CAVITY WALL is selected. */}
        {
            this.state.cavityWallProp &&
            <View>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        Please select Cavity Wall type
                    </Text>
                </View>
                <View style={{flexDirection:"row", justifyContent:"space-around"}} >
                    <TouchableOpacity
                    onPress={() => {this.brickBlockSelect()}}
                    >
                        <Image style={ this.state.brickBlockSelect || this.state.brickBlockPropSelect ? styles.imageContainer : styles.imageDeselect}
                        source= {require("../assets/Images/cavity_brick_block.png")} />
                        <View style={{alignItems:"center"}}>
                            <Text style={{fontSize:16}}>Brick + Block </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => {this.BlockBlockSelect()}}
                    >
                        <Image style={ this.state.blockBlockSelect || this.state.blockBlockPropSelect ? styles.imageContainer : styles.imageDeselect}
                        source= {require("../assets/Images/cavity_block_block.png")} />     
                        <View style={{alignItems:"center"}}>
                            <Text style={{fontSize:16}}>Block + Block </Text>
                        </View>
                    </TouchableOpacity>    
                </View>
            </View>
        }
        {/* The below is conditional rendering for if SOLID WALL is selected. */}
        {
            this.state.solidWallProp &&
            <View>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        Please select Solid Wall type
                    </Text>
                </View>
                <View style={{flexDirection:"row", justifyContent:"space-around"}} >
                    <TouchableOpacity
                    onPress={() => {this.solidBrickSelect()}}
                    >
                        <Image style={ this.state.solidBrickSelect || this.state.solidBrickPropSelect ? styles.imageContainer : styles.imageDeselect}
                        source= {require("../assets/Images/solid_brick_wall_for_app.png")} />
                        <View style={{alignItems:"center"}}>
                            <Text style={{fontSize:16}}>Brick Wall </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => {this.solidBlockSelect()}}
                    >
                        <Image style={ this.state.solidBlockSelect || this.state.solidBlockPropSelect ? styles.imageContainer : styles.imageDeselect}
                        source= {require("../assets/Images/solid_block_wall_for_app.png")} />     
                        <View style={{alignItems:"center"}}>
                            <Text style={{fontSize:16}}>Block Wall </Text>
                        </View>
                    </TouchableOpacity>    
                </View>
            </View>
        }
        {/* The below is conditional rendering for when we want WALL HEIGHT from the user. */}
        {
            this.state.wallHeightReady  &&
            <View>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        Please enter wall height estimate (m)
                    </Text>
                </View>
                <View style={{flexDirection:"column", marginTop: 15, marginBottom:15}} >
                    <Form>
                        <Item success style={{marginLeft: 115, marginRight: 115}}>
                            <Input placeholder='wall height (m)'
                            onChangeText = {(wallHeightText) => this.setState({wallHeightText})}
                            value = {this.state.wallHeightText}
                            keyboardType="number-pad"/>
                            <Icon name= {this.state.wallHeightText > 0 ?  'checkmark-circle' : ''} />
                        </Item> 
                    </Form>
                </View>
                <View style={{marginTop:12, alignItems:"center"}}>
                    <Text style={{fontSize:17,
      fontFamily: 'Arial Hebrew'}}>
                        Wall selected = {this.state.FinalWallSelection}

                    </Text>
                    <Text style={{fontSize:17,
      fontFamily: 'Arial Hebrew', marginTop: 12}}>
                        Wall height = {this.state.wallHeightText}m
                    </Text>
                </View>
            </View>
        }
        {/* The below is conditional for SUCCESSFUL selection of WALL LOAD */}
        {
            this.state.wallHeightText > 0 &&

                <Button block success style={{marginTop: 20, marginBottom: 20}}>
                    <Text>Wall Selection Successful</Text>
                </Button>
        }
           
        

        <View style={styles.toggleContainer}>
            <Text style={styles.textToggle}>
                Is the beam carrying a floor?
            </Text>
                <Switch style={styles.Switch}
                onValueChange = {this.toggleSwitchFloor}
                value={this.state.toggleFloorSwitch}
                />
        </View>
        <View style={styles.toggleContainer}>
            <Text style={styles.textToggle}>
                Is the beam carrying a Roof?
            </Text>
                <Switch style={styles.Switch}
                onValueChange = {this.toggleSwitchRoof}
                value={this.state.toggleRoofSwitch}
                />
        </View>
        <View style={styles.empty}></View>
        </ScrollView>
        </KeyboardAvoidingView>
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
  header:{
    alignItems:"center", 
    //borderWidth:1, 
    marginTop:40
  },
  headerText: {
    fontSize:19,
    fontFamily: 'Arial Hebrew'
  },
  toggleContainer: {
    marginTop:15,
    flexDirection:"row",
    //borderWidth:1,
    justifyContent: "space-between"
    //alignItems:"flex-end",

  },
  Switch:{
      //marginTop: 12
  },
  textToggle:{
      //justifyContent:"center"
      //border:1
      marginTop: 4,
      fontSize:19,
      fontFamily: 'Arial Hebrew'
  },
  imageContainer: {
    resizeMode:"contain", 
    width: 100, 
    height: 260,
    //borderWidth: 1,
    marginTop:40,
    marginBottom: 20
  },
  imageDeselect: {
    resizeMode:"contain", 
    width: 100, 
    height: 260,
    //borderWidth: 1,
    marginTop:40,
    marginBottom: 20,
    opacity:0.2
  },
  empty:{
      height: 200
  }
});
