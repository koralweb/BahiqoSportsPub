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
        <Text>{prod.title}</Text>
        <Text>{prod.desc}</Text>
        <TouchableOpacity onPress={() => products.removeProduct(prod.id)}>
          <FontAwesomeIcon icon={'trash'} />
        </TouchableOpacity>
      </View>
      <View>
        <Text>{prod.price}руб</Text>
        <Counter cnt={cnt} setCnt={setCnt} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    borderWidth: 1,
    marginBottom: 10,
    marginHorizontal: 10,
    backgroundColor: 'silver',
    flexDirection: 'row',
  },
  titleDesc: {
    width: '70%',
  },
});

export default Product;
