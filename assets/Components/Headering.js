import React from 'react';
import {StyleSheet, View } from 'react-native';
import { Text } from "native-base";

const Headering = (props) => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{props.headerName}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
      marginTop:20, 
      marginBottom:10
    },
    headerText: {
      fontSize:25, 
      fontStyle:"normal", 
      fontWeight:"bold"
    }
  });

  export default Headering;