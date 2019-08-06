import React from 'react';
import { Keyboard, StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import HomeCards from "../assets/Components/HomeComponents/HomeCards";

export default class BeamCalcScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
    }

    static navigationOptions = {
        title: "Beam Calculation type"
    }

    navigateToHandler = (nav) => {
      this.props.navigation.navigate(nav)
    }

  render() {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <HomeCards 
              navigateTo={() => {this.navigateToHandler("SteelBeamCalc")}}
              cardName="Steel Beam Calculation"
            />
            <HomeCards 
              navigateTo={() => {}}
              cardName="Timber Beam Calculation"
            />
            <HomeCards 
              navigateTo={() => {}}
              cardName="Concrete Beam Calculation"
            /> 
          </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: "flex-start"
    //justifyContent: 'center',
  }
});
