import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, ActivityIndicator} from 'react-native';
import CustomButton from '../../components/CustomButton';
import RepoList from '../../components/RepoList';
import TextField from '../../components/TextField';

const GithubRepos = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [value, onChangeText] = useState('');

  function searchRepos() {
    setLoading(true);

    fetch('https://api.github.com/search/repositories?q=' + value)
      .then((response) => response.json())
      .then((repos) => setData(repos.items))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  return (
    <SafeAreaView>
      <View style={styles.topView}>
        <TextField
          onChangeText={(text) => onChangeText(text)}
          value={value}
          onSubmitEditing={searchRepos}
          placeholder="Search repos"
        />
        <CustomButton title="Search" onPress={searchRepos} />
      </View>
      <View style={styles.bottomView}>
        {isLoading ? <ActivityIndicator /> : <RepoList data={data} />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topView: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 48,
    marginHorizontal: 16,
  },
  bottomView: {
    paddingBottom: 80,
  },
});

export default GithubRepos;
