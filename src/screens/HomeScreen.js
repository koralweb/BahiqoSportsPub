import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import globalStyles from '../data/globalStyles';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.globalCont}>
      <Header navigation={navigation} isHome={true} />
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
});

export default HomeScreen;
