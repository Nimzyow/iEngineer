import React from 'react';
import { Image ,Keyboard, StyleSheet, View, Switch ,TextInput, TouchableWithoutFeedback, TouchableOpacity, Alert, Animation, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button, Card, Form, Item, Input, Label, Icon, Text } from "native-base";
import { Header } from 'react-navigation';

export default class LoadDeterminationScreen extends React.Component {
    constructor (props){
        super(props);
        this.state={

            lengthUnits: "m",

//          BEAM SELECTION
            beamSelect: "Please tap to select beam",

//          ALL SWITCHES
            toggleSwitch: false,
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

            wallSelectionSuccess: false,
            FinalWallSelection:"",

//          ALL FLOOR STATES

            timberFloorSelect: true,
            timberFloorProp: false,
            concreteFloorSelect: true,
            concreteFloorProp: false,

            floorLengthReady:false,
            floorLengthText: "",
            finalFloorSelection: "",

            floorSelectionSucess: false,

//          ALL ROOF STATES
            // Flat Roof states

            flatRoofSelect: true,
            flatRoofProp: false,
            pitchedRoofSelect: true,
            pitchedRoofProp: false,

            timberFlatRoofSelect: true,
            timberFlatRoofProp: false,
            concreteFlatRoofSelect: true,
            concreteFlatRoofProp: false,

            flatRoofLengthReady: false,
            flatRoofLengthText: "",
            FinalFlatRoofSelection: "",
            flatRoofSelectionSuccess: false,

            // Pitched Roof states
            PitchedRoofLengthReady: false,
            PitchedRoofLengthText: "",
            FinalPitchedRoofSelection: "",
            pitchedRoofSelectionSuccess: false,

            
//          BEAM CHECK STATUS

            beamCheckReady: false
        }
    }

//the below will add a header, whose properties, ike fontsize, color etc... can be controlled in the App.js
    static navigationOptions = {
      title: "Beam Checker"
    }
//Below function will toggle the switch for wall
//value is a boolean which will be sent when toggle switch is pressed. It automatically sends a true or false value which is why we send the argument, value
    componentDidMount(){
        console.log("wall height text and floor length text are " + typeof this.state.wallHeightText + " " + typeof this.state.floorLengthText);
    }
    
    //RESETING VALUES

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

            timberInternalSelect: true,
            timberInternalPropSelect: false,
            timberExternalSelect: true,
            timberExternalPropSelect: false,

            wallHeightReady: false,
            wallHeightText: "",

//One thing to remember is that setState is usually Asynchronus. So all variables that I set to change will happen in exactly the same time, not 1 by 1 like when you normally call normal methods. if we want to call a method DIRECTLY AFTER setState, that is after the variables have been set, a callback function has to be created in the manner shown below. this will insure that the method will contain the newley set variables rather than the variables prior.
            FinalWallSelection:""}, () => {this.beamCheckLogic()});
            
    }

    resetFloorValues = () => {
        this.setState({
            timberFloorSelect: true,
            timberFloorProp: false,
            concreteFloorSelect: true,
            concreteFloorProp: false,

            floorLengthReady:false,
            floorLengthText: "",
            FinalFloorSelection: ""
    })}

    resetFlatRoofValues = () => {
        this.setState({
            flatRoofSelect: true,
            flatRoofProp: false,
            pitchedRoofSelect: true,
            pitchedRoofProp: false,

            timberFlatRoofSelect: true,
            timberFlatRoofProp: false,
            concreteFlatRoofSelect: true,
            concreteFlatRoofProp: false,

            flatRoofLengthReady: false,
            flatRoofLengthText: "",
            FinalFlatRoofSelection: ""
        })
    }
    
    toggleSwitchWall = (value) => {
        this.setState({
            toggleWallSwitch: value,
        });
        if(!value){
            this.resetWallValues();
            this.beamCheckLogic();
        }
        console.log("Wall switch is: " + value);
    }

//Below function will toggle the switch for Floor
    toggleSwitchFloor = (value) => {
        this.setState({
            toggleFloorSwitch: value
        });
        if(!value){
            this.resetFloorValues();
        }
        console.log("Floor switch is: " + value);
    }

//Below function will toggle the switch for roof
    toggleSwitchRoof = (value) => {
        this.setState({toggleRoofSwitch: value});
        if(!value){
            this.resetFlatRoofValues();
        }
        console.log("Roof switch is: " + value);
    }

//below function for when CAVITY WALL is selected
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

    //below function if SOLID WALL is selected
    solidWallSelect = () => {
        this.setState({
            cavityWallSelect: false,
            cavityWallProp: false,
            solidWallSelect: true,
            solidWallProp: true,
            timberWallSelect: false,
            timberWallProp: false,
            wallHeightReady: false,
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

//below function for if TIMBER WALL is selected.
    timberWallSelect = () => {
        this.setState({
            cavityWallSelect: false,
            cavityWallProp: false,
            solidWallSelect: false,
            solidWallProp: false,
            timberWallSelect: true,
            timberWallProp: true,
            timberInternalSelect: true,
            timberExternalSelect: true,
            solidBlockPropSelect: false,
            solidBrickPropSelect: false,
            wallHeightReady: false,
            wallHeightText: "",
            FinalWallSelection: "",
            brickBlockPropSelect: false,
            blockBlockPropSelect: false
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

    timberInternalSelect = () => {
        this.setState({
            timberInternalSelect: true,
            timberInternalPropSelect: true,
            timberExternalSelect: false,
            timberExternalPropSelect: false,
            wallHeightReady: true,
            FinalWallSelection: "Internal timber wall"
        })
    }

    timberExternalSelect = () => {
        this.setState({
            timberInternalSelect: false,
            timberInternalPropSelect: false,
            timberExternalSelect: true,
            timberExternalPropSelect: true,
            wallHeightReady: true,
            FinalWallSelection: "External timber wall"
        })
    }

    timberFloorJoistSelect = () => {
        this.setState({
            timberFloorSelect: true,
            timberFloorProp: true,
            concreteFloorSelect: false,
            concreteFloorProp: false,
            floorLengthReady: true,
            floorLengthText: "",
            finalFloorSelection: "Timber Floor Joist",
            floorSelectionSucess: false,

        }, () => {this.beamCheckLogic()})
    }

    RConcreteFloorSelect = () => {
        this.setState({
            timberFloorSelect: false,
            timberFloorProp: false,
            concreteFloorSelect: true,
            concreteFloorProp: true,
            floorLengthReady: true,
            floorLengthText: "",
            finalFloorSelection: "Reinforced Concrete Floor",
            floorSelectionSucess: false
        }, () => this.beamCheckLogic())
    }

    flatRoofSelect = () => {
            this.setState({
            flatRoofSelect:true,
            flatRoofProp: true,
            pitchedRoofSelect: false,
            pitchedRoofProp: false,
            flatRoofLengthReady: false,
            })
    }

    pitchedRoofSelect = () => {

    }
    
    timberFlatRoofJoistSelect = () => {
        this.setState({
        timberFlatRoofSelect: true,
        timberFlatRoofProp: true,
        concreteFlatRoofSelect: false,
        concreteFlatRoofProp: false,
        flatRoofLengthReady: true,
        FinalFlatRoofSelection: "Timber Flat Roof"
    })
    }

    concreteFlatRoofJoistSelect = () => {
        this.setState({
            timberFlatRoofSelect: false,
            timberFlatRoofProp: false,
            concreteFlatRoofSelect: true,
            concreteFlatRoofProp: true,
            flatRoofLengthReady: true,
            FinalFlatRoofSelection: "Concrete Flat Roof"
        })
    }

    changeWallHeight = (wallHeightText) => {
        this.setState({wallHeightText: wallHeightText}, () => {this.beamCheckLogic()});
    }

    changeFloorLength = (floorLengthText) => {
        this.setState({floorLengthText: floorLengthText}, () => this.beamCheckLogic());       
    }

    changeFlatRoofLength = (flatRoofLengthText) => {
        this.setState({flatRoofLengthText: flatRoofLengthText}, () => this.beamCheckLogic());
    }

    changePitchedRoofLength = (PitchedRoofLengthText) => {
        this.setState({PitchedRoofLengthText: PitchedRoofLengthText}, () => this.beamCheckLogic());
    }

    beamCheckLogic = () => {
        if(this.state.wallHeightText > 0 || this.state.floorLengthText > 0 || this.state.flatRoofLengthText > 0 || this.state.PitchedRoofLengthText > 0){
            this.setState({beamCheckReady: true});
            //console.log("beamCheckReady is true");
        } else {
            this.setState({beamCheckReady: false});
            //console.log("beamCheckReady is false");
        }

        this.state.wallHeightText > 0 ? this.setState({wallSelectionSuccess: true}) : this.setState({wallSelectionSuccess: false});

        this.state.floorLengthText > 0 ? this.setState({floorSelectionSucess: true}) : this.setState({floorSelectionSucess: false});

        this.state.flatRoofLengthText > 0 ? this.setState({flatRoofSelectionSuccess: true}) : this.setState({flatRoofSelectionSuccess: false});

        this.state.PitchedRoofLengthText > 0 ? this.setState({pitchedRoofSelectionSuccess: true}) : this.setState({pitchedRoofSelectionSuccess: false});
    }

  
    render() {

        {/*Principle of passing props from one screen to another. This is step 2. We receive props here. Go to SteelBeamListScreen for step 1, where we send props to here
        Now that we have reached step 2, we need to get props from the previous screen. we get it here by defining a const called beamSelect, in this case, and using the method navigation.getParam("beamSelect", "Tap to select steel beam") which accepts two arguments. The first is the "beamSelect which is the name within the object, labelled in the previous screen. the second is the default value we want to set this const variable to be. so in the end, the beamSelect in the previous screen is stored in the const beamSelect.  " */}
        const {navigation} = this.props;
        const beamSelect = navigation.getParam("beamSelect", "Tap to select steel beam");
  return (
    <KeyboardAvoidingView 
            keyboardVerticalOffset= {Header.HEIGHT + 20} style = {styles.container}
            behavior="padding" enabled>
        <ScrollView>
            <View style={{flex: 1, flexDirection: "column",  alignItems:"center"}}>
                <View style={{marginTop:20, marginBottom:10}}>
                <Text style={{fontSize:25, fontStyle:"normal", fontWeight:"bold"}}>Beam Selection</Text>
                </View>
                <Button iconRight block light
                onPress={() => {
                    this.props.navigation.navigate("SteelList")
                }}>
                    <Text>{beamSelect}</Text>
                    <Icon name='arrow-forward' />
                </Button>
                <View style={{marginTop:20}}>
                <Text style={{fontSize:25, fontStyle:"normal", fontWeight:"bold"}}>Load Selection</Text>
                </View>
            </View>
            <View style={styles.toggleContainer}>

{/* TODO: We need a button or something else that the user can press to move to the other screen and select from the list of beams. */} 
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
        {/* The below is conditional rendering for if TIMBER WALL is selected. */}
        {
            this.state.timberWallProp &&
            <View>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        Please select Timber Wall type
                    </Text>
                </View>
                <View style={{flexDirection:"row", justifyContent:"space-around"}} >
                    <TouchableOpacity
                    onPress={() => {this.timberInternalSelect()}}
                    >
                        <Image style={ this.state.timberInternalSelect || this.state.timberInternalPropSelect ? styles.imageContainer : styles.imageDeselect}
                        source= {require("../assets/Images/cavity_brick_block.png")} />
                        <View style={{alignItems:"center"}}>
                            <Text style={{fontSize:16}}>Internal</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => {this.timberExternalSelect()}}
                    >
                        <Image style={ this.state.timberExternalSelect || this.state.timberExternalPropSelect ? styles.imageContainer : styles.imageDeselect}
                        source= {require("../assets/Images/cavity_block_block.png")} />     
                        <View style={{alignItems:"center"}}>
                            <Text style={{fontSize:16}}>External</Text>
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
                <View style={{flex:1 ,flexDirection:"row", justifyContent:"center"}}>
                    <TextInput
                    style={{width:100, borderBottomWidth:1, fontSize:20}}
                    placeholder="Height(m)"
                    onChangeText={(wallHeightText) => this.changeWallHeight(wallHeightText)}
                    value={this.state.wallHeightText}
                    keyboardType="number-pad"
                    />
                    <View style={{ justifyContent:"center"}}>
                        <Text style={{fontSize:20}}>m</Text>
                    </View>
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
            this.state.wallSelectionSuccess &&

                <Button block success onPress={this.beamCheckLogic} style={{marginTop: 20, marginBottom: 20}}>
                    <Text>Wall Selection Successful</Text>
                </Button>
        }
{/* The below switch is for selection of floor. for details about how the switch works, scroll up to the first switch, for wall. */}

        <View style={styles.toggleContainer}>
            <Text style={styles.textToggle}>
                Is the beam carrying a floor?
            </Text>
                <Switch style={styles.Switch}
                onValueChange = {this.toggleSwitchFloor}
                value={this.state.toggleFloorSwitch}
                />
        </View>

{/* Conditional rendering in the below curly braces for Floor selection. */}
        {
            //the below works because in JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false. Therefore, if the condition is true, the element right after && will appear in the output. If it is false, React will ignore and skip it.
            this.state.toggleFloorSwitch &&
            <View>
                <View style={{alignItems:"center", marginTop:15}}>
                            <Text style={{fontSize:21}}>Please Select Floor</Text>
                        </View>  
                <View>
                    <TouchableOpacity
                    onPress={() => {this.timberFloorJoistSelect()}}
                    style={{flex:1,flexDirection:"row"}}
                    >
                        <Image
                        resizeMode="contain" 
                        source= {require("../assets/Images/timber_floor_for_app.png")}
                        style={ this.state.timberFloorSelect || this.state.timberFloorProp ? styles.imageContainerHorizontal : styles.imageContainerHorizontalDeselect}
                         />
                    </TouchableOpacity>
                        <View style={{alignItems:"center"}}>
                            <Text style={{fontSize:16}}>Timber Floor Joist</Text>
                        </View>
                    <TouchableOpacity
                    onPress={() => {this.RConcreteFloorSelect()}}
                    style={{flex:1,flexDirection:"row"}}
                    >
                        <Image
                        resizeMode="contain" 
                        source= {require("../assets/Images/concrete_floor_for_app.png")}
                        style={ this.state.concreteFloorSelect || this.state.concreteFloorProp ? styles.imageContainerHorizontal : styles.imageContainerHorizontalDeselect}
                         />
                    </TouchableOpacity>
                        <View style={{alignItems:"center"}}>
                            <Text style={{fontSize:16}}>Reinforced Concrete Floor</Text>
                        </View>    
                </View>
            </View>
        }
        {/* The below is conditional rendering for when we want FLOOR LENGTH from the user. */}
        {
            this.state.floorLengthReady  &&
            <View>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        Please enter floor length estimate (m)
                    </Text>
                </View>
                <View style={{flex:1 ,flexDirection:"row", justifyContent:"center", marginTop:8}}>
                    <TextInput
                    style={{width:30, borderBottomWidth:1, fontSize:20}}
                    placeholder="Length(m)"
                    onChangeText={(floorLengthText) => this.changeFloorLength(floorLengthText)}
                    value={this.state.floorLengthText}
                    keyboardType="number-pad"
                    />
                    <View style={{ justifyContent:"center"}}>
                    <Text style={{fontSize:20}}>m</Text></View>
                </View>
                <View style={{marginTop:12, alignItems:"center"}}>
                    <Text style={{fontSize:17,
      fontFamily: 'Arial Hebrew'}}>
                        Floor selected = {this.state.finalFloorSelection}

                    </Text>
                    <Text style={{fontSize:17,
      fontFamily: 'Arial Hebrew', marginTop: 12}}>
                        Floor Length = {this.state.floorLengthText}m
                    </Text>
                </View>
            </View>
        }
        {/* The below is conditional for SUCCESSFUL selection of FLOOR LOAD */}
        {
            this.state.floorSelectionSucess &&

                <Button block success style={{marginTop: 20, marginBottom: 20}}>
                    <Text>Floor Selection Successful</Text>
                </Button>
        }
        <View style={styles.toggleContainer}>
            <Text style={styles.textToggle}>
                Is the beam carrying a Roof?
            </Text>
                <Switch style={styles.Switch}
                onValueChange = {this.toggleSwitchRoof}
                value={this.state.toggleRoofSwitch}
                />
        </View>
        {/* Conditional rendering in the below curly braces for  ROOF selection. */}
        {
            //the below works because in JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false. Therefore, if the condition is true, the element right after && will appear in the output. If it is false, React will ignore and skip it.
            this.state.toggleRoofSwitch &&
            <View>
                <View style={{alignItems:"center", marginTop:15}}>
                            <Text style={{fontSize:21}}>Please Select Roof Type</Text>
                        </View>  
                <View>
                    <TouchableOpacity
                    onPress={() => {this.flatRoofSelect()}}
                    style={{flex:1,flexDirection:"row"}}
                    >
                        <Image
                        resizeMode="contain" 
                        source= {require("../assets/Images/timber_floor_for_app.png")}
                        style={ this.state.flatRoofSelect || this.state.flatRoofProp ? styles.imageContainerHorizontal : styles.imageContainerHorizontalDeselect}
                         />
                    </TouchableOpacity>
                        <View style={{alignItems:"center"}}>
                            <Text style={{fontSize:16}}>Flat Roof </Text>
                        </View>
                    <TouchableOpacity
                    onPress={() => {this.pitchedRoofSelect()}}
                    style={{flex:1,flexDirection:"row"}}
                    >

                    {/*TODO: change below picture to a piched roof picture */}

                        <Image
                        resizeMode="contain"
                        source= {require("../assets/Images/concrete_floor_for_app.png")}
                        style={ this.state.pitchedRoofSelect || this.state.pitchedRoofProp ? styles.imageContainerHorizontal : styles.imageContainerHorizontalDeselect}
                         />
                    </TouchableOpacity>
                        <View style={{alignItems:"center"}}>
                            <Text style={{fontSize:16}}>Pitched Roof</Text>
                        </View>    
                </View>
            </View>
        }
        {/* The below is conditional rendering for if Flat Roof is selected. */}
        {
            this.state.flatRoofProp &&
            <View>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        Please select Flat Roof type
                    </Text>
                </View>
                <View >
                <TouchableOpacity
                    onPress={() => {this.timberFlatRoofJoistSelect()}}
                    style={{flex:1,flexDirection:"row"}}
                    >
                        <Image
                        resizeMode="contain" 
                        source= {require("../assets/Images/timber_floor_for_app.png")}
                        style={ this.state.timberFlatRoofSelect || this.state.timberFlatRoofProp ? styles.imageContainerHorizontal : styles.imageContainerHorizontalDeselect}
                         />
                </TouchableOpacity>
                    <View style={{alignItems:"center"}}>
                        <Text style={{fontSize:16}}>Timber Flat Roof</Text>
                    </View>
                    <TouchableOpacity
                    onPress={() => {this.concreteFlatRoofJoistSelect()}}
                    style={{flex:1,flexDirection:"row"}}
                    >
                        <Image
                        resizeMode="contain" 
                        source= {require("../assets/Images/concrete_floor_for_app.png")}
                        style={ this.state.concreteFlatRoofSelect || this.state.concreteFlatRoofProp ? styles.imageContainerHorizontal : styles.imageContainerHorizontalDeselect}
                         />
                </TouchableOpacity>  
                    <View style={{alignItems:"center"}}>
                        <Text style={{fontSize:16}}>Concrete Flat Roof</Text>
                    </View>  
                </View>
            </View>
        }
        {/*
            TODO: if timber flat roof is selected we need user to enter length       
        */
            this.state.flatRoofLengthReady &&

            <View>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        Please enter Flat Roof length estimate (m)
                    </Text>
                </View>
                <View style={{flex:1 ,flexDirection:"row", justifyContent:"center", marginTop:8}}>
                    <TextInput
                    style={{width:30, borderBottomWidth:1, fontSize:20}}
                    placeholder="Length(m)"
                    onChangeText={(flatRoofLengthText) => this.changeFlatRoofLength(flatRoofLengthText)}
                    value={this.state.flatRoofLengthText}
                    keyboardType="number-pad"
                    />
                    <View style={{ justifyContent:"center"}}>
                    <Text style={{fontSize:20}}>m</Text></View>
                </View>
                <View style={{marginTop:12, alignItems:"center"}}>
                    <Text style={{fontSize:17,
      fontFamily: 'Arial Hebrew'}}>
                        Floor selected = {this.state.FinalFlatRoofSelection}

                    </Text>
                    <Text style={{fontSize:17,
      fontFamily: 'Arial Hebrew', marginTop: 12}}>
                        Floor Length = {this.state.flatRoofLengthText}m
                    </Text>
                </View>
            </View>
       }
        {/*
            TODO: if concrete flat roof is selected we need user to enter length
        */}
        {/*
            TODO: if Pitched roof is selected, we need to figure out what parameters to enter to make pitched roof calcs work. 
        */}
        {/* The below is conditional for BEAM CHECK CONDITIONS NOT MET */}
        {     
            !this.state.beamCheckReady  &&
                <View style={{flex:1, marginTop: 40, marginBottom: 40}}>
                    <View style={{flexDirection:"row", justifyContent:"center", alignItems:"flex-end"}}>
                        <Button onPress={() => {Alert.alert("Please select what your beam is carrying")}} rounded light style={{alignItems:"center",  paddingLeft:10, paddingRight:10}}>
                            <Text style={styles.headerText}>Cannot check my beam yet </Text>
                        </Button>
                    </View>
                </View>
        }
        {/* The below is conditional for BEAM CHECK CONDITIONS MET */}
        {
            this.state.beamCheckReady &&
                <View style={{marginTop: 40, marginBottom: 40}}>
                    <View style={{flexDirection:"row", justifyContent:"center"}}>
                        <Button 
                        onPress={() => {}} 
                        rounded 
                        success 
                        style={{alignItems:"center",  paddingLeft:10, paddingRight:10}}>
                            <Text style={styles.headerText}>Check my beam</Text>
                        </Button>
                    </View>
                </View>
        }
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
    
    flexDirection:"column",
    justifyContent: 'flex-end',
    //alignItems:"flex-end",
    //borderWidth:1
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
    marginTop:35,
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
      //marginTop: 4,
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
  imageContainerHorizontal: {
    flex:1,
    height: 200,
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
  imageContainerHorizontalDeselect: {
    flex:1,
    height: 200,
    opacity: 0.2
  },
  empty:{
      height: 200
  }
});
