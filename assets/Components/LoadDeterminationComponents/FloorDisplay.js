import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { Text } from "native-base";

const FloorDisplay = (props) => {
    return (
        <View>
            <TouchableOpacity
                onPress={props.onPress}
                style={styles.container}>
            <Image 
                resizeMode={props.resizeMode}
                style={props.styleChange}
                source= {props.image} />       
            </TouchableOpacity>
            <View style={{alignItems:"center"}}>
                <Text style={{fontSize:16}}>{props.text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row"
      },
  });

  export default FloorDisplay;