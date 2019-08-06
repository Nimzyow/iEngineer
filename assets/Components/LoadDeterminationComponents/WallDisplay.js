import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { Text } from "native-base";

const WallDisplay = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}>
                <Image style={props.styleChange}
                source= {props.image} />
                <View style={{alignItems:"center"}}>
                    <Text style={{fontSize:16}}>{props.text}</Text>
                </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    header:{
        alignItems:"center", 
        //borderWidth:1, 
        marginTop:30
      },
    headerText: {
        fontSize:19,
        fontFamily: 'Arial Hebrew'
    }
  });

  export default WallDisplay;