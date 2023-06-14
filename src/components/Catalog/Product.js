import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Product = ({prod, setSingle}) => {
  return (
    <View style={styles.cont}>
      <Image source={prod.image} style={styles.image} />
      <View style={styles.desc}>
        <Text style={styles.title}>{prod.title}</Text>
        <Text>{prod.desc}</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Text style={styles.price}>{prod.price}грн за порцию</Text>
          </TouchableOpacity>
          {prod.added ? (
            <View style={styles.added}>
              <FontAwesomeIcon icon={'check'} color={'#fff'} />
            </View>
          ) : (
            <TouchableOpacity
              style={styles.plus}
              onPress={() => setSingle(prod)}>
              <Text style={{color: 'white'}}>+</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flexDirection: 'row',
    margin: 10,
    width: 250,
  },
  desc: {
    justifyContent: 'center',
    paddingLeft: 10,
  },
  image: {
    width: 130,
    height: 130,
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    color: 'black',
  },
  price: {
    paddingTop: 7,
    backgroundColor: '#FF3F2F',
    color: 'white',
    borderRadius: 5,
    width: 180,
    height: 39,
    textAlign: 'center',
    marginRight: 10,
    marginTop: 7,
    fontSize: 17,
  },
  plus: {
    width: 39,
    height: 39,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF3F2F',
    color: 'white',
    borderRadius: 5,
    textAlign: 'center',
    marginTop: 7,
  },
  added: {
    width: 39,
    height: 39,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    borderRadius: 5,
    textAlign: 'center',
    marginTop: 7,
    backgroundColor: '#1CCD38',
  },
});

export default Product;
