import React from 'react';
import Header from '../components/Header';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import globalStyles from '../data/globalStyles';

const TranslationsScreen = ({navigation}) => {
  return (
    <View style={styles.globalCont}>
      <Header navigation={navigation} />
      <ScrollView>
        <Text>Translations Screen</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
});

export default TranslationsScreen;
