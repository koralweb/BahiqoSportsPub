import React from 'react';
import Header from '../components/Header';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import globalStyles from '../data/globalStyles';
import matchesList from '../data/matchesList';

let date = new Date().getDate();
const TranslationsScreen = ({navigation}) => {
  const renderMatchList = () => {
    return matchesList
      .filter(el => el.date >= date)
      .map((match, idx) => (
        <View style={styles.list} key={Math.random()}>
          <View style={idx % 2 ? styles.inner : ''}>
            <Text style={styles.name}>{match.liga}</Text>
            <Text style={styles.comand}>{match.t1}</Text>
            <Text style={styles.comand}>{match.t2}</Text>
            <Text style={styles.dats}>
              {match.date}.06 - {match.time}
            </Text>
          </View>
        </View>
      ));
  };

  return (
    <View style={styles.globalCont}>
      <Header navigation={navigation} />
      <ScrollView>
        <Text style={styles.title}>Трансляции</Text>

        {renderMatchList()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
  title: {
    fontSize: 30,
    fontWeight: 500,
    color: 'black',
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
    color: 'black',
  },
  comand: {
    fontSize: 20,
    fontWeight: 500,
    color: 'silver',
  },
  dats: {
    fontSize: 20,
    fontWeight: 500,
    color: 'black',
  },
  inner: {
    backgroundColor: '#E5E5E5',
  },
});

export default TranslationsScreen;
