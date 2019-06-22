import React from 'react';
import { StyleSheet, Text, View, TextInput, Animated, Keyboard, TouchableWithoutFeedback } from 'react-native';


class FloatingLabelInput extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isFocused: false
    };
  }

  componentWillMount(){
    this._animatedIsFocused = new Animated.Value(this.props.value === "" ? 0 : 1);
  }

  componentDidUpdate(){
    Animated.timing(this._animatedIsFocused, {
      toValue: this.state.isFocused || this.props.value !== "" ? 1 : 0,
      duration: 200,
    }).start();
  }

  //methods to handle is focused and is blurred.
handleFocus = () => this.setState({isFocused: true});
handleBlur = () => this.setState({isFocused: false});

render() {
  const { label, ...props} = this.props;
  const { isFocused } = this.state;
  const labelStyle = {
    position: "absolute",
    left: 0,
   // top: !isFocused ? 18 : 0,
    top: this._animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [18,0],
    }),
    fontSize: !isFocused ? 20 : 14,
    fontSize: this._animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [20, 14]
    }) ,
    color: !isFocused ? "#aaa" : "#000",
    color: this._animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: ["#aaa", "#000"],
    }),
  };

  return( 
    <View style={{ paddingTop: 18, marginTop: 10}}>
      {/* The text and the style for the text below is set up so that it is positioned within the TextInput container when it is NOT focused. When it is focused, the text will reduce in size and go on TOP of the TextInput container. 
        */}
      <Animated.Text style={labelStyle}>
        {label}
      </Animated.Text>
      {/* The bottom TextIput contained ...props which will be received from the App class. we will define the label, value and onChangeText in the App class.   */}
      <TextInput 
        {...props}
        style={{
          height: 26,
          fontSize: 20,
          color: "#000",
          borderBottomWidth: 1,
          borderBottomColor: "#555"
        }}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        keyboardType="numeric"
        blurOnSubmit      
      />
    </View>
    );
  }
};

export default FloatingLabelInput;