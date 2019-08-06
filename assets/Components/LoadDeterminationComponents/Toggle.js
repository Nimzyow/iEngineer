import React from 'react';
import {StyleSheet, View, Switch } from 'react-native';
import { Text } from "native-base";

const Toggle = (props) => {
    return (
        <View style={styles.toggleContainer}> 
                <Text style={styles.textToggle}>
                    {props.toggleText}</Text>
                    {/* The below switch component REQUIRES two callbacks, onValueChange and value. The onValueChange callback will call the toggleSwitchWall function which will change the value of the toggleWallSwitch state. The togglewallSwitch state is the value (a boolean) that the switch renders.  */}
                <Switch style={styles.Switch}
                onValueChange = {props.switchChange}
                value={props.current}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    
    toggleContainer: {
        marginTop:35,
        flexDirection:"row",
        //borderWidth:1,
        justifyContent: "space-between"
        //alignItems:"flex-end",
    },
    textToggle:{
        //justifyContent:"center"
        //border:1
        //marginTop: 4,
        fontSize:19,
        fontFamily: 'Arial Hebrew'
    },
    Switch:{
        //marginTop: 12
    },
  });

  export default Toggle;