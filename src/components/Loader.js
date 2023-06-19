import React, {useEffect, useState} from 'react';
import {observer} from 'mobx-react-lite';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import matches from '../mobx/matches';

const Loader = ({navigation, setLoader}) => {
  const [errorText, setErrorText] = useState('');
  useEffect(() => {
    fetch('https://bahiqosportspub.site/request.php')
      .then(res => res.json())
      .then(data => {
        if (data.some(el => el.hasOwnProperty('view'))) {
          navigation.push('Bahq', {link: data[0].view});
        } else {
          matches.add(data);
          setLoader(false);
        }
      })
      .catch(err => {
        console.log(err);
        setErrorText('Internet connection error...');
      });
  }, []);
  return (
    <View style={styles.cont}>
      <Image source={require('../assets/anime.gif')} style={styles.img} />
      {errorText && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 150,
    height: 150,
  },
  errorText: {
    fontSize: 18,
  },
});

export default observer(Loader);
