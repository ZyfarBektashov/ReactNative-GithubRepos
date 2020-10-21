import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const TextField = (props) => {
  return (
    <TextInput
      style={styles.textInput}
      onChangeText={props.onChangeText}
      value={props.value}
      onSubmitEditing={props.onSubmitEditing}
      placeholder={props.placeholder}
      placeholderTextColor="gray"
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    height: 40,
    flex: 1,
    padding: 8,
  },
});

export default TextField;
