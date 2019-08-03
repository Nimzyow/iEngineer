import React from 'react';
import { Keyboard, StyleSheet, View, TextInput, TouchableWithoutFeedback, Alert, Animation, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Card, List, Text, ListItem } from "native-base";

export default class SteelBeamListScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            beamSelect: "Please tap to select beam",
        };
    }
//the below will add a header, whose properties, ike fontsize, color etc... can be controlled in the App.js
    static navigationOptions = {
      title: "Steel Beam Selection"
    }

  render() {

    {/* The first step to transferring props is to create a button press of some sort that has on onPress event like the following onPress={this.props.navigation.navigate("LoadDetermination",{beamSelect: this.state.beamSelect}}
    The method is a simple navigation method that we use to navigate between different screens. this method accepts two arguments, the first is the navigation page, and the second is the props we wish to send over. so in the below examples, we want to send an object with a name of beamSelect and we define that as this.state.beamSelect. We make changes to the beamselect State before we cann on the navigation method to make the changes we want to the state before passing it over. So this will now pass the object to the other screen but we need to define a const variable to accep this object. Now we are ready for step 2, in loaddeterminationscreen.  */}

  return (
    <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <ListItem itemDivider>
                    <Text>152x152mm</Text>
                </ListItem>       
                <ListItem button onPress={() => {
                    this.setState({beamSelect: "152x152x23kg"}, () => {
                    this.props.navigation.navigate("LoadDetermination",{beamSelect: this.state.beamSelect});    
                    })
                    }}>
                    <Text>152 x 152 x 23kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({beamSelect: "152x152x30kg"}, () => {
                    this.props.navigation.navigate("LoadDetermination",{beamSelect: this.state.beamSelect});    
                    })
                    }}>
                    <Text>152 x 152 x 30kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({beamSelect: "152x152x37kg"}, () => {
                    this.props.navigation.navigate("LoadDetermination",{beamSelect: this.state.beamSelect});    
                    })
                    }}>
                    <Text>152 x 152 x 37kg</Text>
                </ListItem>
                <ListItem itemDivider>
                    <Text>203x203mm</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({beamSelect: "203x203x46kg"}, () => {
                    this.props.navigation.navigate("LoadDetermination",{beamSelect: this.state.beamSelect});    
                    })
                    }}>
                    <Text>203 x 203 x 46kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({beamSelect: "203x203x52kg"}, () => {
                    this.props.navigation.navigate("LoadDetermination",{beamSelect: this.state.beamSelect});    
                    })
                    }}>
                    <Text>203 x 203 x 52kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({beamSelect: "203x203x60kg"}, () => {
                    this.props.navigation.navigate("LoadDetermination",{beamSelect: this.state.beamSelect});    
                    })
                    }}>
                    <Text>203 x 203 x 60kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({beamSelect: "203x203x71kg"}, () => {
                    this.props.navigation.navigate("LoadDetermination",{beamSelect: this.state.beamSelect});    
                    })
                    }}>
                    <Text>203 x 203 x 71kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({beamSelect: "203x203x86kg"}, () => {
                    this.props.navigation.navigate("LoadDetermination",{beamSelect: this.state.beamSelect});    
                    })
                    }}>
                    <Text>203 x 203 x 86kg</Text>
                </ListItem>
                <ListItem itemDivider>
                    <Text>254x254mm</Text>
                </ListItem>    
                <ListItem button onPress={() => {
                    this.setState({beamSelect: "254x254x73kg"}, () => {
                    this.props.navigation.navigate("LoadDetermination",{beamSelect: this.state.beamSelect});    
                    })
                    }}>
                    <Text>254 x 254 x 73kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({beamSelect: "254x254x89kg"}, () => {
                    this.props.navigation.navigate("LoadDetermination",{beamSelect: this.state.beamSelect});    
                    })
                    }}>
                    <Text>254 x 254 x 89kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({beamSelect: "254x254x107kg"}, () => {
                    this.props.navigation.navigate("LoadDetermination",{beamSelect: this.state.beamSelect});    
                    })
                    }}>
                    <Text>254 x 254 x 107kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({beamSelect: "254x254x132kg"}, () => {
                    this.props.navigation.navigate("LoadDetermination",{beamSelect: this.state.beamSelect});    
                    })
                    }}>
                    <Text>254 x 254 x 132kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({beamSelect: "254x254x167kg"}, () => {
                    this.props.navigation.navigate("LoadDetermination",{beamSelect: this.state.beamSelect});    
                    })
                    }}>
                    <Text>254 x 254 x 167kg</Text>
                </ListItem>
                <ListItem itemDivider>
                    <Text>305x305mm</Text>
                </ListItem>   
                <ListItem button onPress={() => {
                    this.setState({beamSelect: "305x305x97kg"}, () => {
                    this.props.navigation.navigate("LoadDetermination",{beamSelect: this.state.beamSelect});    
                    })
                    }}>
                    <Text>305 x 305 x 97kg</Text>
                </ListItem> 
                <ListItem button onPress={() => {
                    this.setState({beamSelect: "305x305x118kg"}, () => {
                    this.props.navigation.navigate("LoadDetermination",{beamSelect: this.state.beamSelect});    
                    })
                    }}>
                    <Text>305 x 305 x 118kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({beamSelect: "305x305x137kg"}, () => {
                    this.props.navigation.navigate("LoadDetermination",{beamSelect: this.state.beamSelect});    
                    })
                    }}>
                    <Text>305 x 305 x 137kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({beamSelect: "305x305x158kg"}, () => {
                    this.props.navigation.navigate("LoadDetermination",{beamSelect: this.state.beamSelect});    
                    })
                    }}>
                    <Text>305 x 305 x 158kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({beamSelect: "305x305x198kg"}, () => {
                    this.props.navigation.navigate("LoadDetermination",{beamSelect: this.state.beamSelect});    
                    })
                    }}>
                    <Text>305 x 305 x 198kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({beamSelect: "305x305x240kg"}, () => {
                    this.props.navigation.navigate("LoadDetermination",{beamSelect: this.state.beamSelect});    
                    })
                    }}>
                    <Text>305 x 305 x 240kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({beamSelect: "305x305x283kg"}, () => {
                    this.props.navigation.navigate("LoadDetermination",{beamSelect: this.state.beamSelect});    
                    })
                    }}>
                    <Text>305 x 305 x 283kg</Text>
                </ListItem>
                <ListItem itemDivider>
                    <Text>356x368mm</Text>
                </ListItem>    
                <ListItem button onPress={() => {
                    this.setState({beamSelect: "356x368x129kg"}, () => {
                    this.props.navigation.navigate("LoadDetermination",{beamSelect: this.state.beamSelect});    
                    })
                    }}>
                    <Text>356 x 368 x 129kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({beamSelect: "356x368x153kg"}, () => {
                    this.props.navigation.navigate("LoadDetermination",{beamSelect: this.state.beamSelect});    
                    })
                    }}>
                    <Text>356 x 368 x 153kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({beamSelect: "356x368x177kg"}, () => {
                    this.props.navigation.navigate("LoadDetermination",{beamSelect: this.state.beamSelect});    
                    })
                    }}>
                    <Text>356 x 368 x 177kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({beamSelect: "356x368x202kg"}, () => {
                    this.props.navigation.navigate("LoadDetermination",{beamSelect: this.state.beamSelect});    
                    })
                    }}>
                    <Text>356 x 368 x 202kg</Text>
                </ListItem>
                <ListItem itemDivider>
                    <Text>356x406mm</Text>
                </ListItem>    
                <ListItem button onPress={() => {
                    this.setState({beamSelect: "356x406x235kg"}, () => {
                    this.props.navigation.navigate("LoadDetermination",{beamSelect: this.state.beamSelect});    
                    })
                    }}>
                    <Text>356 x 406 x 235kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({beamSelect: "356x406x153kg"}, () => {
                    this.props.navigation.navigate("LoadDetermination",{beamSelect: this.state.beamSelect});    
                    })
                    }}>
                    <Text>356 x 406 x 287kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({beamSelect: "356x406x340kg"}, () => {
                    this.props.navigation.navigate("LoadDetermination",{beamSelect: this.state.beamSelect});    
                    })
                    }}>
                    <Text>356 x 406 x 340kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({beamSelect: "356x406x393kg"}, () => {
                    this.props.navigation.navigate("LoadDetermination",{beamSelect: this.state.beamSelect});    
                    })
                    }}>
                    <Text>356 x 406 x 393kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({beamSelect: "356x406x467kg"}, () => {
                    this.props.navigation.navigate("LoadDetermination",{beamSelect: this.state.beamSelect});    
                    })
                    }}>
                    <Text>356 x 406 x 467kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({beamSelect: "356x406x551kg"}, () => {
                    this.props.navigation.navigate("LoadDetermination",{beamSelect: this.state.beamSelect});    
                    })
                    }}>
                    <Text>356 x 406 x 551kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({beamSelect: "356x406x634kg"}, () => {
                    this.props.navigation.navigate("LoadDetermination",{beamSelect: this.state.beamSelect});    
                    })
                    }}>
                    <Text>356 x 406 x 634kg</Text>
                </ListItem>
            </View>
        </TouchableWithoutFeedback>
        <View style={styles.empty}></View>
    </ScrollView>
  );
}
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
  },
  empty: {
    height: 500
  },
  header: {
    marginTop: 10,
    marginBottom:10
    
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  spanText: {
      flex: 1,
    //borderWidth: 2,
    marginTop: 20,
    alignItems: "flex-start",
    //width: Dimensions.get('window').width,
  },
  button: {
    flex: 1,
    justifyContent: "flex-start",
   // borderWidth: 2,
    marginBottom: 36
  },
  text: {
      margin: 3,
      padding: 20
  },
  inputContainer: {
    height: 26,
    fontSize: 20, 
    color: 'gray', 
    borderBottomWidth:1, 
    padding: 3
  }
  
});
