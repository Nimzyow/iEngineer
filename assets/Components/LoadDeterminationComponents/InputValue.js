import React from 'react';
import {StyleSheet, View, TextInput } from 'react-native';
import { Text, Button } from "native-base";

const InputValue = (props) => {
    return (
        <View style={styles.textContainer}>
            <TextInput
                style={styles.textInp}
                placeholder={props.placeholder}
                onChangeText={props.changeTextHandler}
                value={props.current}
                keyboardType="number-pad"/>
            <Text style={styles.text}>m</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        flex: 1,
        flexDirection:"row",
        justifyContent: "center"
    },
    textInp:  {
        width:30, 
        borderBottomWidth:1, 
        fontSize:20
    },
    text: {
        fontSize: 20
    }

  });

  export default InputValue;