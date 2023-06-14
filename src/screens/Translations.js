import React from 'react';
import Header from '../components/Header';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import globalStyles from '../data/globalStyles';

const TranslationsScreen = ({navigation}) => {
  return (
    <View style={styles.globalCont}>
      <Header navigation={navigation} />
      <ScrollView>
        <Text style={styles.title}>Трансляции</Text>

        <View style={styles.list}>
          <Text style={styles.name}>Название</Text>
          <Text style={styles.comand}>Команда</Text>
          <Text style={styles.comand}>Команда</Text>
          <Text style={styles.dats}>24.06 - 18.00</Text>
        </View>
        <View style={styles.list}>
          <View style={styles.inner}>
           <Text style={styles.name}>Название</Text>
           <Text style={styles.comand}>Команда</Text>
           <Text style={styles.comand}>Команда</Text>
           <Text style={styles.dats}>24.06 - 18.00</Text>
          </View>
          
        </View>
        <View style={styles.list}>
          <Text style={styles.name}>Название</Text>
          <Text style={styles.comand}>Команда</Text>
          <Text style={styles.comand}>Команда</Text>
          <Text style={styles.dats}>24.06 - 18.00</Text>
        </View>
        <View style={styles.list}>
          <View style={styles.inner}>
            <Text style={styles.name}>Название</Text>
            <Text style={styles.comand}>Команда</Text>
            <Text style={styles.comand}>Команда</Text>
            <Text style={styles.dats}>24.06 - 18.00</Text>
           </View>
        </View>
        <View style={styles.list}>
          <Text style={styles.name}>Название</Text>
          <Text style={styles.comand}>Команда</Text>
          <Text style={styles.comand}>Команда</Text>
          <Text style={styles.dats}>24.06 - 18.00</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
  title: {
    fontSize: 30,
    fontWeight: 500,
    color: "black",
    margin: 15,
  },
  list: {
    marginLeft: 15,
    marginBottom: 15,
    marginRight: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 500,
    color: "black",  
  },
  comand: {
    fontSize: 20,
    fontWeight: 500,
    color: "silver",
  },
  dats: {
    fontSize: 20,
    fontWeight: 500,
    color: "black",
  },
  inner: {
    backgroundColor: "#E5E5E5",
  },
});

export default TranslationsScreen;
