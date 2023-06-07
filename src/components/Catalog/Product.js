import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Product = ({prod, setSingle}) => {
  return (
    <View>
      <Image source={prod.image} style={styles.image} />
      <View>
        <Text>{prod.title}</Text>
        <Text>{prod.desc}</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Text>{prod.price}р за порцию</Text>
          </TouchableOpacity>
          {prod.added ? (
            <View style={styles.added}>
              <Text>V</Text>
            </View>
          ) : (
            <TouchableOpacity
              style={styles.plus}
              onPress={() => setSingle(prod)}>
              <Text>+</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  plus: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  added: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
});

export default Product;
