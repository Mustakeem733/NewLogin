

import React from 'react';

import Login from './src/Screens/Login/Login';
import SecondScreen from './src/Screens/SecondScreen';
import Navigation from './src/Navigation';
import ThirdScreen from './src/ThirdScreen';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
} from 'react-native/Libraries/NewAppScreen';




const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      {/* <Login/> */}
      {/* <SecondScreen/> */}
      <Navigation/>
      {/* <ThirdScreen/> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

});

export default App;
