import React from 'react';
import {StyleSheet, View } from 'react-native';
import { Text } from "native-base";

const FinalSelections = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {props.selected} {props.selectedType}
            </Text>
            <Text style={styles.text}>
                {props.selectedParam} {props.selectedParamValue}{props.units}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop:12, 
        alignItems:"center"
    },
    text:{
        fontSize:17,
        fontFamily: 'Arial Hebrew',
        marginTop: 12
      },
    headerText: {
        fontSize:19,
        fontFamily: 'Arial Hebrew'
    }
  });

  export default FinalSelections;