import React from 'react';
import { Image ,Keyboard, StyleSheet, View, Switch ,TextInput, TouchableWithoutFeedback, TouchableOpacity, Alert, Animation, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button, Card, Form, Item, Input, Label, Icon, Text } from "native-base";
import {Header} from "react-navigation";

import NormalText from "../assets/Components/NormalText";
import Headering from "../assets/Components/Headering";
import SuccessfulSelection from "../assets/Components/LoadDeterminationComponents/SuccessfulSelection";
import FinalSelections from "../assets/Components/LoadDeterminationComponents/FinalSelections";
import WallDisplay from "../assets/Components/LoadDeterminationComponents/WallDisplay";
import FloorDisplay from "../assets/Components/LoadDeterminationComponents/FloorDisplay";
import InputValue from "../assets/Components/LoadDeterminationComponents/InputValue";
import Toggle from "../assets/Components/LoadDeterminationComponents/Toggle";
import BeamCheckNO from "../assets/Components/LoadDeterminationComponents/BeamCheckNO";
import BeamCheckYes from "../assets/Components/LoadDeterminationComponents/BeamCheckYes";

export default class LoadDeterminationScreen extends React.Component {
    constructor (props){
        super(props);
        this.state={

            lengthUnits: "m",

//          BEAM SELECTION
            beamSelect: "Please tap to select beam",
            beamSelected: "",
            beamLengthText: "1",

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
            wallHeightText: "1",

            wallSelectionSuccess: false,
            FinalWallSelection:"",

//          ALL FLOOR STATES

            timberFloorSelect: true,
            timberFloorProp: false,
            concreteFloorSelect: true,
            concreteFloorProp: false,

            floorLengthReady:false,
            floorLengthText: "1",
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
            flatRoofLengthText: "1",
            FinalFlatRoofSelection: "",
            flatRoofSelectionSuccess: false,

            // Pitched Roof states
            PitchedRoofLengthReady: false,
            PitchedRoofLengthText: "1",
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

    changeBeamLength = (beamLengthText) => {
        this.setState({beamLengthText: beamLengthText})
    }

    beamCheckLogic = () => {
        if((this.state.wallHeightText > 0 || this.state.floorLengthText > 0 || this.state.flatRoofLengthText > 0 || this.state.PitchedRoofLengthText > 0) && this.state.beamSelected !== this.state.beamSelect){
            this.setState({beamCheckReady: true});
            console.log("beamCheckReady is true");
        } else {
            this.setState({beamCheckReady: false});
            console.log("beamCheckReady is false");
        }

        this.state.wallHeightText > 0 ? this.setState({wallSelectionSuccess: true}) : this.setState({wallSelectionSuccess: false});

        this.state.floorLengthText > 0 ? this.setState({floorSelectionSucess: true}) : this.setState({floorSelectionSucess: false});

        this.state.flatRoofLengthText > 0 ? this.setState({flatRoofSelectionSuccess: true}) : this.setState({flatRoofSelectionSuccess: false});

        this.state.PitchedRoofLengthText > 0 ? this.setState({pitchedRoofSelectionSuccess: true}) : this.setState({pitchedRoofSelectionSuccess: false});
    }

    navigateTo = (nav) => {
        this.props.navigation.navigate(nav);
    }

    navigateToWithProps = (nav, transfer) => {
        this.props.navigation.navigate(nav,transfer)
    }

    styleChangeHandler = () => {
       return this.state.cavityWallSelect || this.state.cavityWallProp ? styles.imageContainer : styles.imageDeselect
    }

  
    render() {

        {/*Principle of passing props from one screen to another. This is step 2. We receive props here. Go to SteelBeamListScreen for step 1, where we send props to here
        Now that we have reached step 2, we need to get props from the previous screen. we get it here by defining a const called beamSelect, in this case, and using the method navigation.getParam("beamSelect", "Tap to select steel beam") which accepts two arguments. The first is the "beamSelect which is the name within the object, labelled in the previous screen. the second is the default value we want to set this const variable to be. so in the end, the beamSelect in the previous screen is stored in the const beamSelect.  " */}
        const {navigation} = this.props;
        const beamSelect = navigation.getParam("beamSelect", this.state.beamSelect);
        
  return (
    <KeyboardAvoidingView 
            keyboardVerticalOffset= {Header.HEIGHT + 20} style = {styles.container}
            behavior="padding" enabled>
        <ScrollView>
            <View style={{flex: 1, flexDirection: "column",  alignItems:"center"}}>
                <Headering 
                headerName="Beam Selection"
                />
                <Button iconRight block light
                    onPress={() => {this.navigateTo("SteelList")}}>
                    <Text>{beamSelect}</Text>
                    <Icon name='arrow-forward' />
                </Button>
                {/* The below conditional rendering is for if a section size is selected, we just want to prompt the user to enter the length of the beam */}
                {
                beamSelect !== this.state.beamSelect &&

                    <View style={{flex:1}}>
                        <NormalText 
                        message="Please enter beam length estimate (m)"/>         
                        <InputValue 
                        changeTextHandler={(beamLengthText) => this.changeBeamLength(beamLengthText)}
                        current={this.state.beamLengthText}/> 
                    </View>
                }
                    <Headering
                        headerName="Load Selection"/>
            </View>
            

{/* TODO: We need a button or something else that the user can press to move to the other screen and select from the list of beams. */}
        
        <Toggle 
        toggleText="Is the beam carrying a wall?"
        switchChange={this.toggleSwitchWall}
        current={this.state.toggleWallSwitch}
        />

        {/* Conditional rendering in the below curly braces. */}
        {
            //the below works because in JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false. Therefore, if the condition is true, the element right after && will appear in the output. If it is false, React will ignore and skip it.
            this.state.toggleWallSwitch &&
            <View>
                <NormalText 
                message="Please select wall type"
                />
                <View style={{flexDirection:"row", justifyContent:"space-around"}} >
                    <WallDisplay 
                        onPress={() => {this.cavityWallSelect()}}
                        styleChange={this.state.cavityWallSelect || this.state.cavityWallProp ? styles.imageContainer : styles.imageDeselect}
                        image={require("../assets/Images/cavity_brick_block.png")}
                        text="Cavity Wall"
                    />
                    <WallDisplay 
                        onPress={() => {this.solidWallSelect()}}
                        styleChange={this.state.solidWallSelect || this.state.solidWallProp ? styles.imageContainer : styles.imageDeselect}
                        image={require("../assets/Images/cavity_block_block.png")}
                        text="Solid Wall"
                    />
                    <WallDisplay 
                        onPress={() => {this.timberWallSelect()}}
                        styleChange={this.state.timberWallSelect || this.state.timberWallProp ? styles.imageContainer : styles.imageDeselect}
                        image={require("../assets/Images/timber_wall_for_app.png")}
                        text="Timber Wall"
                    />      
                </View>
            </View>
        }
        {/* The below is conditional rendering for if CAVITY WALL is selected. */}
        {
            this.state.cavityWallProp &&
            <View>
                <NormalText 
                message="Please select Cavity Wall type"
                />
                <View style={{flexDirection:"row", justifyContent:"space-around"}} >
                    <WallDisplay 
                        onPress={() => {this.brickBlockSelect()}}
                        styleChange={this.state.brickBlockSelect || this.state.brickBlockPropSelect ? styles.imageContainer : styles.imageDeselect}
                        image={require("../assets/Images/cavity_brick_block.png")}
                        text="Brick + Block"
                        />
                    <WallDisplay 
                        onPress={() => {this.BlockBlockSelect()}}
                        styleChange={this.state.blockBlockSelect || this.state.blockBlockPropSelect ? styles.imageContainer : styles.imageDeselect}
                        image={require("../assets/Images/cavity_block_block.png")}
                        text="Block + Block"
                        />   
                </View>
            </View>
        }
        {/* The below is conditional rendering for if SOLID WALL is selected. */}
        {
            this.state.solidWallProp &&
            <View>
                <NormalText 
                message="Please select Solid Wall type"
                />
                <View style={{flexDirection:"row", justifyContent:"space-around"}} >
                    <WallDisplay 
                        onPress={() => {this.solidBrickSelect()}}
                        styleChange={this.state.solidBrickSelect || this.state.solidBrickPropSelect ? styles.imageContainer : styles.imageDeselect}
                        image={require("../assets/Images/solid_brick_wall_for_app.png")}
                        text="Solid Brick Wall"
                        />
                    <WallDisplay 
                        onPress={() => {this.solidBlockSelect()}}
                        styleChange={this.state.solidBlockSelect || this.state.solidBlockPropSelect ? styles.imageContainer : styles.imageDeselect}
                        image={require("../assets/Images/solid_block_wall_for_app.png")}
                        text="Solid Block Wall"
                        />    
                </View>
            </View>
        }
        {/* The below is conditional rendering for if TIMBER WALL is selected. */}
        {
            this.state.timberWallProp &&
            <View>
                <NormalText 
                message="Please select Timber Wall type"
                />
                <View style={{flexDirection:"row", justifyContent:"space-around"}} >
                    <WallDisplay 
                        onPress={() => {this.timberInternalSelect()}}
                        styleChange={this.state.timberInternalSelect || this.state.timberInternalPropSelect ? styles.imageContainer : styles.imageDeselect}
                        image={require("../assets/Images/timber_wall_for_app.png")}
                        text="Internal Timber Wall"
                        />
                    <WallDisplay 
                        onPress={() => {this.timberExternalSelect()}}
                        styleChange={this.state.timberExternalSelect || this.state.timberExternalPropSelect ? styles.imageContainer : styles.imageDeselect}
                        image={require("../assets/Images/timber_wall_for_app.png")}
                        text="External Timber Wall"
                        />   
                </View>
            </View>
        }
        {/* The below is conditional rendering for when we want WALL HEIGHT from the user. */}
        {
            this.state.wallHeightReady  &&
            <View>
                <NormalText 
                    message="Please enter wall height estimate (m)"/>      
                <InputValue 
                    changeTextHandler={(wallHeightText) => this.changeWallHeight(wallHeightText)}
                    current={this.state.wallHeightText}/>
                <FinalSelections 
                    selected="Wall Selected = "
                    selectedType={this.state.FinalWallSelection}
                    units="m"
                    selectedParam="Wall Height = "
                    selectedParamValue={this.state.wallHeightText}/>
            </View>
        }
        {/* The below is conditional for SUCCESSFUL selection of WALL LOAD */}
        {
            this.state.wallSelectionSuccess &&
            <View>
                <SuccessfulSelection 
                    successText="Wall Selection Successful"/>  
            </View>
        }
{/* The below switch is for selection of floor. for details about how the switch works, scroll up to the first switch, for wall. */}

        <Toggle 
            toggleText="Is the beam carrying a floor?"
            switchChange={this.toggleSwitchFloor}
            current={this.state.toggleFloorSwitch}
        />

{/* Conditional rendering in the below curly braces for Floor selection. */}
        {
            //the below works because in JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false. Therefore, if the condition is true, the element right after && will appear in the output. If it is false, React will ignore and skip it.
            this.state.toggleFloorSwitch &&
            <View>
                <NormalText 
                    message="Please select floor type"/>
                <View>
                    <FloorDisplay 
                        onPress={() => {this.timberFloorJoistSelect()}}
                        styleChange={this.state.timberFloorSelect || this.state.timberFloorProp ? styles.imageContainerHorizontal : styles.imageContainerHorizontalDeselect}
                        image={require("../assets/Images/timber_floor_for_app.png")}
                        text="Timber Floor Joist"
                        resizeMode="contain"/>
                    <FloorDisplay 
                        onPress={() => {this.RConcreteFloorSelect()}}
                        styleChange={this.state.concreteFloorSelect || this.state.concreteFloorProp ? styles.imageContainerHorizontal : styles.imageContainerHorizontalDeselect}
                        image={require("../assets/Images/concrete_floor_for_app.png")}
                        text="Concrete Floor"
                        resizeMode="contain"/>    
                </View>
            </View>
        }
        {/* The below is conditional rendering for when we want FLOOR LENGTH from the user. */}
        {
            this.state.floorLengthReady  &&
            <View>
                <NormalText 
                    message="Please enter floor length estimate (m)"/>
                <InputValue 
                    changeTextHandler={(floorLengthText) => this.changeFloorLength(floorLengthText)}
                    current={this.state.floorLengthText}/>
                <FinalSelections 
                    selected="Floor Selected = "
                    selectedType={this.state.finalFloorSelection}
                    units="m"
                    selectedParam="Floor Length = "
                    selectedParamValue={this.state.floorLengthText}/>
            </View>
        }
        {/* The below is conditional for SUCCESSFUL selection of FLOOR LOAD */}
        {
            this.state.floorSelectionSucess &&
            <View>
                <SuccessfulSelection 
                    successText="Floor Selection Successful"/>
            </View>
        }
        <Toggle 
            toggleText="Is the beam carrying a roof?"
            switchChange={this.toggleSwitchRoof}
            current={this.state.toggleRoofSwitch}/>
        {/* Conditional rendering in the below curly braces for  ROOF selection. */}
        {
            //the below works because in JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false. Therefore, if the condition is true, the element right after && will appear in the output. If it is false, React will ignore and skip it.
            this.state.toggleRoofSwitch &&
            <View>
                <NormalText 
                    message="Please Select Roof Type"/>  
                <View>
                    <FloorDisplay 
                        onPress={() => {this.flatRoofSelect()}}
                        styleChange={this.state.flatRoofSelect || this.state.flatRoofProp ? styles.imageContainerHorizontal : styles.imageContainerHorizontalDeselect}
                        image={require("../assets/Images/timber_floor_for_app.png")}
                        text="Flat Roof"
                        resizeMode="contain"/>
                    <FloorDisplay 
                        onPress={() => {this.pitchedRoofSelect()}}
                        styleChange={this.state.pitchedRoofSelect || this.state.pitchedRoofProp ? styles.imageContainerHorizontal : styles.imageContainerHorizontalDeselect}
                        image={require("../assets/Images/timber_floor_for_app.png")}
                        text="Pitched Roof"
                        resizeMode="contain"/>   
                </View>
            </View>
        }
        {/* The below is conditional rendering for if Flat Roof is selected. */}
        {
            this.state.flatRoofProp &&
            <View>
                <NormalText 
                    message="Please Select Flat Roof Type"/> 
                <View>
                    <FloorDisplay 
                        onPress={() => {this.timberFlatRoofJoistSelect()}}
                        styleChange={this.state.timberFlatRoofSelect || this.state.timberFlatRoofProp ? styles.imageContainerHorizontal : styles.imageContainerHorizontalDeselect}
                        image={require("../assets/Images/timber_floor_for_app.png")}
                        text="Timber Flat Roof"
                        resizeMode="contain"/>
                    <FloorDisplay 
                        onPress={() => {this.concreteFlatRoofJoistSelect()}}
                        styleChange={this.state.concreteFlatRoofSelect || this.state.concreteFlatRoofProp ? styles.imageContainerHorizontal : styles.imageContainerHorizontalDeselect}
                        image={require("../assets/Images/concrete_floor_for_app.png")}
                        text="Concrete Flat Roof"
                        resizeMode="contain"/>
                </View>
            </View>
        }
        {/*TODO: if timber flat roof is selected we need user to enter length*/
            this.state.flatRoofLengthReady &&
            <View>
                <View>
                    <NormalText 
                        message="Please enter Flat Roof length estimate (m)"/>
                    <InputValue 
                        changeTextHandler={(flatRoofLengthText) => this.changeFlatRoofLength(flatRoofLengthText)}
                        current={this.state.flatRoofLengthText}/>        
                    <FinalSelections 
                        selected="Flat Roof Selected = "
                        selectedType={this.state.FinalFlatRoofSelection}
                        units="m"
                        selectedParam="Flat Roof Length = "
                        selectedParamValue={this.state.flatRoofLengthText}/>
                </View>
            </View>
       }
        {/*
            TODO: if concrete flat roof is selected we need user to enter length
        */}
        {/*
            TODO: if Pitched roof is selected, we need to figure out what parameters to enter to make pitched roof calcs work. 
        */}
        {/* The below is conditional for BEAM CHECK CONDITIONS NOT MET if wall and section are NOT selected */}
        {     
            !this.state.beamCheckReady  && beamSelect === this.state.beamSelect && 
                <BeamCheckNO 
                    alertMessage= {"Please select beam and load (e.g wall load, floor load etc...)"}
                    buttonMessage="Cannot check my beam yet"
                    />
        }
        {/* The below is conditional for BEAM CHECK CONDITIONS NOT MET if load is selected but NO section size defined */}
        {     
            this.state.beamCheckReady  && beamSelect === this.state.beamSelect &&
                <BeamCheckNO 
                    alertMessage= {"Please select beam"}
                    buttonMessage="Cannot check my beam yet"
                    />
        }
        {/* The below is conditional for BEAM CHECK CONDITIONS NOT MET if load is NOT selected but section size is defined */}
        {     
            !this.state.beamCheckReady  && beamSelect !== this.state.beamSelect &&
                <BeamCheckNO 
                    alertMessage= {"Please select load (e.g wall load, floor load etc...)"}
                    buttonMessage="Cannot check my beam yet"
                    />
        }
        {/* The below is conditional for BEAM CHECK CONDITIONS MET */}
        {
            this.state.beamCheckReady && beamSelect !== this.state.beamSelect &&
                
                <BeamCheckYes 
                buttonMessage="Check my beam"
                onPress={() => 
                    {this.navigateToWithProps(
                        "beamCheck",       
                        {
                        sectionSize: beamSelect,
                        sectionLength: this.state.beamLengthText,
                        wallType: this.state.FinalWallSelection,
                        wallHeight: this.state.wallHeightText,
                        floorType: this.state.finalFloorSelection,
                        floorLength: this.state.floorLengthText,
                        flatRoofType: this.state.FinalFlatRoofSelection,
                        flatRoofLength: this.state.flatRoofLengthText,
                        wallSuccess: this.state.wallSelectionSuccess,
                        floorSuccess: this.state.floorSelectionSucess,
                        flatRoofSuccess: this.state.flatRoofSelectionSuccess,
                        pitchedRoofSuccess: this.state.pitchedRoofSelectionSuccess 
                        })
                    }
                }
                />      
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
    borderWidth:1
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
