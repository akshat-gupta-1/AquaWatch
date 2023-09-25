import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    flex: 1,
    alignSelf: 'stretch',
  },
});

const HomeScreen = () => {
  return <View style={styles.page}></View>;
};

export default HomeScreen;
