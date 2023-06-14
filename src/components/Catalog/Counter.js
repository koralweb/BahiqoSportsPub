import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Counter = ({cnt, setCnt}) => {
  const inc = () => {
    setCnt(cnt + 1);
  };

  const dec = () => {
    if (cnt === 1) {
      return;
    }
    setCnt(cnt - 1);
  };

  return (
    <View style={styles.cont}>
      <TouchableOpacity onPress={dec} style={styles.operator}>
        <Text style={styles.text}>-</Text>
      </TouchableOpacity>
      <Text style={styles.cnt}>{cnt}</Text>
      <TouchableOpacity onPress={inc} style={styles.operator}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flexDirection: 'row',
    paddingRight: 10,
    marginTop: "auto",
  },
  operator: {
    fontSize: 35,
    fontWeight: 500,
    color: "white",
    backgroundColor: "#FF3F2F",
    width: 25,
    height: 45,
    borderRadius: 4,
    alignItems: 'center',
    marginLeft: 5,
    marginBottom: 10,
  },

  text: {
    fontSize: 30,
    fontWeight: 500,
    color: "white",
  },
  cnt: {
    fontSize: 25,
    fontWeight: 500,
    color: "black",
    padding: 5,
  },
});

export default Counter;
