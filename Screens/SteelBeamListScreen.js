import React from 'react';
import { Keyboard, StyleSheet, View, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Text, ListItem } from "native-base";

export default class SteelBeamListScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            beamSelect: "Please tap to select beam",
            inertia: 0,
            maxThickness: 0,
            depth: 0,
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
                    this.setState({
                        beamSelect: "152x152x23kg",
                        inertia: 1250,
                        maxThickness: 6.8,
                        depth: 152.4
                }, () => {
                    this.props.navigation.navigate("LoadDetermination",{
                        beamSelect: this.state.beamSelect,
                        inertia: this.state.inertia,
                        maxThickness: this.state.maxThickness,
                        depth: this.state.depth
                    });})}}> 
                    <Text>152 x 152 x 23kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({
                        beamSelect: "152x152x30kg",
                        inertia: 1748,
                        maxThickness: 9.4,
                        depth: 157.6
                    }, () => {
                        this.props.navigation.navigate("LoadDetermination",{
                            beamSelect: this.state.beamSelect,
                            inertia: this.state.inertia,
                            maxThickness: this.state.maxThickness,
                            depth: this.state.depth
                        });})}}> 
                    <Text>152 x 152 x 30kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({
                        beamSelect: "152x152x37kg",
                        inertia: 2210,
                        maxThickness: 11.5,
                        depth: 161.8
            }, () => {
                this.props.navigation.navigate("LoadDetermination",{
                    beamSelect: this.state.beamSelect,
                    inertia: this.state.inertia,
                    maxThickness: this.state.maxThickness,
                    depth: this.state.depth
                    });})}}>   
                    <Text>152 x 152 x 37kg</Text>
                </ListItem>
                <ListItem itemDivider>
                    <Text>203x203mm</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({
                        beamSelect: "203x203x46kg",
                        inertia: 4605,
                        maxThickness: 11.0,
                        depth: 203.2
                    }, () => {
                        this.props.navigation.navigate("LoadDetermination",{
                            beamSelect: this.state.beamSelect,
                            inertia: this.state.inertia,
                            maxThickness: this.state.maxThickness,
                            depth: this.state.depth
                        });})}}> 
                    <Text>203 x 203 x 46kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({
                        beamSelect: "203x203x52kg",
                        inertia: 5296,
                        maxThickness: 12.5,
                        depth: 206.2
                    }, () => {
                        this.props.navigation.navigate("LoadDetermination",{
                            beamSelect: this.state.beamSelect,
                            inertia: this.state.inertia,
                            maxThickness: this.state.maxThickness,
                            depth: this.state.depth
                        });})}}> 
                    <Text>203 x 203 x 52kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({
                        beamSelect: "203x203x60kg",
                        inertia: 6162,
                        maxThickness: 14.2,
                        depth: 209.6
                    }, () => {
                        this.props.navigation.navigate("LoadDetermination",{
                            beamSelect: this.state.beamSelect,
                            inertia: this.state.inertia,
                            maxThickness: this.state.maxThickness,
                            depth: this.state.depth
                        });})}}> 
                    <Text>203 x 203 x 60kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({
                        beamSelect: "203x203x71kg",
                        inertia: 7655,
                        maxThickness: 17.3,
                        depth: 215.8
                    }, () => {
                        this.props.navigation.navigate("LoadDetermination",{
                            beamSelect: this.state.beamSelect,
                            inertia: this.state.inertia,
                            maxThickness: this.state.maxThickness,
                            depth: this.state.depth
                        });})}}> 
                    <Text>203 x 203 x 71kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({
                        beamSelect: "203x203x86kg",
                        inertia: 9486,
                        maxThickness: 20.5,
                        depth: 222.2
                    }, () => {
                        this.props.navigation.navigate("LoadDetermination",{
                            beamSelect: this.state.beamSelect,
                            inertia: this.state.inertia,
                            maxThickness: this.state.maxThickness,
                            depth: this.state.depth
                        });})}}> 
                    <Text>203 x 203 x 86kg</Text>
                </ListItem>
                <ListItem itemDivider>
                    <Text>254x254mm</Text>
                </ListItem>    
                <ListItem button onPress={() => {
                    this.setState({
                        beamSelect: "254x254x73kg",
                        inertia: 11643,
                        maxThickness: 14.2,
                        depth: 254.1
                    }, () => {
                        this.props.navigation.navigate("LoadDetermination",{
                            beamSelect: this.state.beamSelect,
                            inertia: this.state.inertia,
                            maxThickness: this.state.maxThickness,
                            depth: this.state.depth
                        });})}}> 
                    <Text>254 x 254 x 73kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({
                        beamSelect: "254x254x89kg",
                        inertia: 14504,
                        maxThickness: 17.3,
                        depth: 260.3 
                    }, () => {
                        this.props.navigation.navigate("LoadDetermination",{
                            beamSelect: this.state.beamSelect,
                            inertia: this.state.inertia,
                            maxThickness: this.state.maxThickness,
                            depth: this.state.depth
                        });})}}> 
                    <Text>254 x 254 x 89kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({
                        beamSelect: "254x254x107kg",
                        inertia: 17747,
                        maxThickness: 20.5,
                        depth: 266.7
                    }, () => {
                        this.props.navigation.navigate("LoadDetermination",{
                            beamSelect: this.state.beamSelect,
                            inertia: this.state.inertia,
                            maxThickness: this.state.maxThickness,
                            depth: this.state.depth
                        });})}}> 
                    <Text>254 x 254 x 107kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({
                        beamSelect: "254x254x132kg",
                        inertia: 22765,
                        maxThickness: 25.3,
                        depth: 276.3
                    }, () => {
                        this.props.navigation.navigate("LoadDetermination",{
                            beamSelect: this.state.beamSelect,
                            inertia: this.state.inertia,
                            maxThickness: this.state.maxThickness,
                            depth: this.state.depth
                        });})}}> 
                    <Text>254 x 254 x 132kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({
                        beamSelect: "254x254x167kg",
                        inertia: 30234,
                        maxThickness: 31.7 ,
                        depth: 289.1  
                    }, () => {
                        this.props.navigation.navigate("LoadDetermination",{
                            beamSelect: this.state.beamSelect,
                            inertia: this.state.inertia,
                            maxThickness: this.state.maxThickness,
                            depth: this.state.depth
                        });})}}> 
                    <Text>254 x 254 x 167kg</Text>
                </ListItem>
                <ListItem itemDivider>
                    <Text>305x305mm</Text>
                </ListItem>   
                <ListItem button onPress={() => {
                    this.setState({
                        beamSelect: "305x305x97kg",
                        inertia:22504,
                        maxThickness: 15.4,
                        depth: 307.9
                    }, () => {
                        this.props.navigation.navigate("LoadDetermination",{
                            beamSelect: this.state.beamSelect,
                            inertia: this.state.inertia,
                            maxThickness: this.state.maxThickness,
                            depth: this.state.depth
                        });})}}> 
                    <Text>305 x 305 x 97kg</Text>
                </ListItem> 
                <ListItem button onPress={() => {
                    this.setState({
                        beamSelect: "305x305x118kg",
                        inertia: 27927,
                        maxThickness: 18.7,
                        depth: 314.5
                    }, () => {
                        this.props.navigation.navigate("LoadDetermination",{
                            beamSelect: this.state.beamSelect,
                            inertia: this.state.inertia,
                            maxThickness: this.state.maxThickness,
                            depth: this.state.depth
                        });})}}> 
                    <Text>305 x 305 x 118kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({
                        beamSelect: "305x305x137kg",
                        inertia: 33070,
                        maxThickness: 21.7,
                        depth: 320.5
                    }, () => {
                        this.props.navigation.navigate("LoadDetermination",{
                            beamSelect: this.state.beamSelect,
                            inertia: this.state.inertia,
                            maxThickness: this.state.maxThickness,
                            depth: this.state.depth
                        });})}}> 
                    <Text>305 x 305 x 137kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({
                        beamSelect: "305x305x158kg",
                        inertia: 39002,
                        maxThickness: 25.0,
                        depth: 327.1
                    }, () => {
                        this.props.navigation.navigate("LoadDetermination",{
                            beamSelect: this.state.beamSelect,
                            inertia: this.state.inertia,
                            maxThickness: this.state.maxThickness,
                            depth: this.state.depth
                        });})}}> 
                    <Text>305 x 305 x 158kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({
                        beamSelect: "305x305x198kg",
                        inertia: 51159,
                        maxThickness: 31.4,
                        depth: 339.9
                    }, () => {
                        this.props.navigation.navigate("LoadDetermination",{
                            beamSelect: this.state.beamSelect,
                            inertia: this.state.inertia,
                            maxThickness: this.state.maxThickness,
                            depth: this.state.depth
                        });})}}> 
                    <Text>305 x 305 x 198kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({
                        beamSelect: "305x305x240kg",
                        inertia: 64458,
                        maxThickness: 37.7,
                        depth: 352.5
                    }, () => {
                        this.props.navigation.navigate("LoadDetermination",{
                            beamSelect: this.state.beamSelect,
                            inertia: this.state.inertia,
                            maxThickness: this.state.maxThickness,
                            depth: this.state.depth
                        });})}}> 
                    <Text>305 x 305 x 240kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({
                        beamSelect: "305x305x283kg",
                        inertia: 79127,
                        maxThickness: 44.1,
                        depth: 365.3
                    }, () => {
                        this.props.navigation.navigate("LoadDetermination",{
                            beamSelect: this.state.beamSelect,
                            inertia: this.state.inertia,
                            maxThickness: this.state.maxThickness,
                            depth: this.state.depth
                            });})}}> 
                    <Text>305 x 305 x 283kg</Text>
                </ListItem>
                <ListItem itemDivider>
                    <Text>356x368mm</Text>
                </ListItem>    
                <ListItem button onPress={() => {
                    this.setState({
                        beamSelect: "356x368x129kg",
                        inertia: 40591,
                        maxThickness: 17.5,
                        depth: 362.0
                    }, () => {
                        this.props.navigation.navigate("LoadDetermination",{
                            beamSelect: this.state.beamSelect,
                            inertia: this.state.inertia,
                            maxThickness: this.state.maxThickness,
                            depth: this.state.depth
                        });})}}> 
                    <Text>356 x 368 x 129kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({
                        beamSelect: "356x368x153kg",
                        inertia: 48935,
                        maxThickness: 20.7,
                        depth: 362.0
                    }, () => {
                        this.props.navigation.navigate("LoadDetermination",{
                            beamSelect: this.state.beamSelect,
                            inertia: this.state.inertia,
                            maxThickness: this.state.maxThickness,
                            depth: this.state.depth
                        });})}}> 
                    <Text>356 x 368 x 153kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({
                        beamSelect: "356x368x177kg",
                        inertia: 57464,
                        maxThickness: 23.8,
                        depth: 368.2
                    }, () => {
                        this.props.navigation.navigate("LoadDetermination",{
                            beamSelect: this.state.beamSelect,
                            inertia: this.state.inertia,
                            maxThickness: this.state.maxThickness,
                            depth: this.state.depth
                            });})}}> 
                    <Text>356 x 368 x 177kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({
                        beamSelect: "356x368x202kg",
                        inertia: 66607,
                        maxThickness: 27.0,
                        depth: 374.6
                    }, () => {
                        this.props.navigation.navigate("LoadDetermination",{
                            beamSelect: this.state.beamSelect,
                            inertia: this.state.inertia,
                            maxThickness: this.state.maxThickness,
                            depth: this.state.depth
                        });})}}> 
                    <Text>356 x 368 x 202kg</Text>
                </ListItem>
                <ListItem itemDivider>
                    <Text>356x406mm</Text>
                </ListItem>    
                <ListItem button onPress={() => {
                    this.setState({
                        beamSelect: "356x406x235kg",
                        inertia: 79431,
                        maxThickness: 30.2,
                        depth: 381.0
                    }, () => {
                        this.props.navigation.navigate("LoadDetermination",{
                            beamSelect: this.state.beamSelect,
                            inertia: this.state.inertia,
                            maxThickness: this.state.maxThickness,
                            depth: this.state.depth
                        });})}}> 
                    <Text>356 x 406 x 235kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({
                        beamSelect: "356x406x287kg",
                        inertia: 100221,
                        maxThickness: 36.5,
                        depth: 393.6
                    }, () => {
                        this.props.navigation.navigate("LoadDetermination",{
                            beamSelect: this.state.beamSelect,
                            inertia: this.state.inertia,
                            maxThickness: this.state.maxThickness,
                            depth: this.state.depth
                        });})}}> 
                    <Text>356 x 406 x 287kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({
                        beamSelect: "356x406x340kg",
                        inertia: 122889,
                        maxThickness: 42.9,
                        depth: 406.4
                    }, () => {
                        this.props.navigation.navigate("LoadDetermination",{
                            beamSelect: this.state.beamSelect,
                            inertia: this.state.inertia,
                            maxThickness: this.state.maxThickness,
                            depth: this.state.depth
                        });})}}> 
                    <Text>356 x 406 x 340kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({
                        beamSelect: "356x406x393kg",
                        inertia: 146964,
                        maxThickness: 49.2,
                        depth: 419.0
                    }, () => {
                        this.props.navigation.navigate("LoadDetermination",{
                            beamSelect: this.state.beamSelect,
                            inertia: this.state.inertia,
                            maxThickness: this.state.maxThickness,
                            depth: this.state.depth
                        });})}}> 
                    <Text>356 x 406 x 393kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({
                        beamSelect: "356x406x467kg",
                        inertia: 183349,
                        maxThickness: 58.0,
                        depth: 436.6
                    }, () => {
                        this.props.navigation.navigate("LoadDetermination",{
                            beamSelect: this.state.beamSelect,
                            inertia: this.state.inertia,
                            maxThickness: this.state.maxThickness,
                            depth: this.state.depth
                        });})}}> 
                    <Text>356 x 406 x 467kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({
                        beamSelect: "356x406x551kg",
                        inertia: 227284,
                        maxThickness: 67.5,
                        depth: 455.6
                    }, () => {
                        this.props.navigation.navigate("LoadDetermination",{
                            beamSelect: this.state.beamSelect,
                            inertia: this.state.inertia,
                            maxThickness: this.state.maxThickness,
                            depth: this.state.depth
                        });})}}> 
                    <Text>356 x 406 x 551kg</Text>
                </ListItem>
                <ListItem button onPress={() => {
                    this.setState({
                        beamSelect: "356x406x634kg",
                        inertia: 275191,
                        maxThickness: 77.0,
                        depth: 474.6
                    }, () => {
                        this.props.navigation.navigate("LoadDetermination",{
                            beamSelect: this.state.beamSelect,
                            inertia: this.state.inertia,
                            maxThickness: this.state.maxThickness,
                            depth: this.state.depth
                            });})}}> 
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
