import React from 'react';
import Header from '../components/Header';
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import globalStyles from '../data/globalStyles';

const AboutScreen = ({navigation}) => {
  return (
    <View style={styles.globalCont}>
      <Header navigation={navigation} />
      <ScrollView>
        <Text style={styles.title}>О нас</Text>
        <View style={styles.inner}>
        <Text style={styles.aboutTitle}>Начало</Text>
        <Text style={styles.desc}>Мы — Суши Кафе, ваши надежные проводники в удивительный мир японской кулинарии. Наши шеф-повара, вдохновленные старинными традициями и современными тенденциями, создают уникальные блюда, которые поражают вкусом и эстетикой.</Text>
      </View>

      <View style={styles.inner}>
        <Text style={styles.aboutTitle}>Блюда</Text>
        <Text style={styles.desc}>В нашем кафе вы всегда найдете свежайшие суши и сашими, а также множество других традиционных японских блюд. Наш ассортимент подходит как для любителей классики, так и для тех, кто хочет попробовать что-то новое и необычное.</Text>
      </View>
      <View style={styles.img}>
      <Image source={require('../assets/logo.png')} />
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
  inner: {
    marginBottom: 20,
    marginHorizontal: 10,
    backgroundColor: '#E5E5E5',
    borderRadius: 5,
  },
  aboutTitle: {
    fontSize: 20,
    fontWeight: 400,
    color: "black",
    margin: 15,
  },
  desc: {
    fontSize: 15,
    color: "black",
    margin: 15,
  },
  img: {
    alignItems: 'center',
    marginTop: 25,
  },
});

export default AboutScreen;
