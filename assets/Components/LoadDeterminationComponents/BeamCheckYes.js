import React from 'react';
import {StyleSheet, View, Alert } from 'react-native';
import { Text, Button } from "native-base";

const BeamCheckYes = (props) => {
    return (
        <View style={{marginTop: 40, marginBottom: 40}}>
                    <View style={{flexDirection:"row", justifyContent:"center"}}>
                        <Button onPress={props.onPress} 
                        rounded success 
                        style={{alignItems:"center",  paddingLeft:10, paddingRight:10}}>
                            <Text style={styles.headerText}>{props.buttonMessage}</Text>
                        </Button>
                    </View>
                </View>
    )
}

const styles = StyleSheet.create({
    
    container: {
        flex:1, 
        marginTop: 40, 
        marginBottom: 40
    },
    containerPosition:{
        flexDirection:"row", 
        justifyContent:"center", 
        alignItems:"flex-end"
    },
    Switch:{
        //marginTop: 12
    },
    headerText: {
        fontSize:19,
        fontFamily: 'Arial Hebrew'
    },
    buttonContainer:{
        alignItems:"center",  
        paddingLeft:10, 
        paddingRight:10
    }
  });

  export default BeamCheckYes;