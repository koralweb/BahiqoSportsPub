import React from 'react';
import Header from '../components/Header';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import globalStyles from '../data/globalStyles';

const BookingScreen = ({navigation}) => {
  return (
    <View style={styles.globalCont}>
      <Header navigation={navigation} />
      <ScrollView>
        <Text>Booking Screen</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
});

export default BookingScreen;
