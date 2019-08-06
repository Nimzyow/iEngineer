import React from 'react';
import {StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Text } from "native-base";

const HomeCards = (props) => {
    return (
        <TouchableOpacity
            onPress={props.navigateTo}>
                <Card style={styles.cardContainer}>
                    <Text style={styles.cardText}>
                        {props.cardName}
                    </Text>
               </Card>
            </TouchableOpacity> 
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      //alignItems: "flex-start"
      //justifyContent: 'center',
    },
    cardContainer: {
      height: 230
    },
    cardText: {
      fontSize: 18,
      paddingTop:20
    }
  });

  export default HomeCards;