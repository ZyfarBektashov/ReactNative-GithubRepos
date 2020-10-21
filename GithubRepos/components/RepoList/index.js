import React from 'react';
import {FlatList} from 'react-native';
import RepoItem from '../RepoItem';

const RepoList = (props) => {
  const renderItem = ({item}) => <RepoItem item={item} />;

  return (
    <FlatList
      data={props.data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
};

export default RepoList;
