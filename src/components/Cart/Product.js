import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Counter from '../Catalog/Counter';
import products from '../../mobx/products';

const Product = ({prod}) => {
  const [cnt, setCnt] = useState(prod.count);

  return (
    <View style={styles.cont}>
      <View style={styles.titleDesc}>
        <Text style={styles.title}>{prod.title}</Text>
        <Text style={styles.prodDesc}>{prod.desc}</Text>
        <TouchableOpacity
          style={styles.delite}
          onPress={() => products.removeProduct(prod.id)}>
          <FontAwesomeIcon icon={'trash'} color={'grey'} size={22} />
        </TouchableOpacity>
      </View>
      <View style={styles.wrp}>
        <Text style={styles.price}>{prod.price}грн</Text>
        <Counter cnt={cnt} setCnt={setCnt} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    borderRadius: 4,
    marginBottom: 10,
    marginHorizontal: 10,
    backgroundColor: '#E5E5E5',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleDesc: {
    width: '70%',
    paddingLeft: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
    color: 'black',
    paddingTop: 10,
  },
  prodDesc: {
    fontSize: 15,
    fontWeight: 400,
    color: 'black',
    paddingTop: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 500,
    color: 'black',
    paddingTop: 10,
  },
  delite: {
    margin: 10,
  },
  wrp: {
    justifyContent: 'space-around',
  },
});

export default Product;
