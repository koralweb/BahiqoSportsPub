import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import globalStyles from '../data/globalStyles';
import Loader from '../components/Loader';

const HomeScreen = ({navigation}) => {
  const [loader, setLoader] = useState(true);
  return (
    <>
      {loader ? (
        <Loader setLoader={setLoader} navigation={navigation} />
      ) : (
        <View style={styles.globalCont}>
          <Header navigation={navigation} isHome={true} />
          <Text>Home Screen</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
});

export default HomeScreen;
