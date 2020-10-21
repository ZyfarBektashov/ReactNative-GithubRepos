import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const RepoItem = ({item}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
      <Text>{item.full_name}</Text>
      <Text>{item.language}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    borderColor: 'gray',
    borderWidth: 1,
  },
  title: {
    fontSize: 24,
  },
});

export default RepoItem;
