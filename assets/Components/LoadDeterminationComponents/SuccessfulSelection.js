import React from 'react';
import {StyleSheet } from 'react-native';
import { Text, Button } from "native-base";

const SuccessfulSelection = (props) => {
    return (
        <Button block success style={{marginTop: 20, marginBottom: 20}}>
            <Text>{props.successText}</Text>
        </Button>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
      marginTop:20, 
      marginBottom:20
    }
  });

  export default SuccessfulSelection;