import React from 'react';
import Header from '../components/Header';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import globalStyles from '../data/globalStyles';
import matches from '../mobx/matches';

let date = new Date().getDate();
const TranslationsScreen = ({navigation}) => {
  const renderMatchList = () => {
    return matches.list
      .filter(el => el.matchDate >= date)
      .map((match, idx) => (
        <View style={styles.list} key={Math.random()}>
          <View style={idx % 2 ? styles.inner : ''}>
            <Text style={styles.name}>{match.ligaOf}</Text>
            <Text style={styles.comand}>{match.team_1}</Text>
            <Text style={styles.comand}>{match.team_2}</Text>
            <Text style={styles.dats}>
              {match.matchDate}.06 - {match.matchTime}
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
