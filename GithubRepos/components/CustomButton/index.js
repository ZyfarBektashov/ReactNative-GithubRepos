import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const CustomButton = (props) => {
  return (
    <TouchableOpacity style={styles.buttonView} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    width: '20%',
    height: 40,
    backgroundColor: 'black',
    borderRadius: 8,
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});
export default CustomButton;
