import React from 'react';
import {StyleSheet, View } from 'react-native';
import { Text } from "native-base";

const NormalText = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>
                {props.message}
            </Text>
        </View>
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

  export default NormalText;