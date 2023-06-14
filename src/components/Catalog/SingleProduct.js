import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Counter from './Counter';
import products from '../../mobx/products';

const SingleProduct = ({single: prod, setSingle}) => {
  const [cnt, setCnt] = useState(1);

  const addToCart = () => {
    products.addProduct(prod.id, cnt);
    setSingle(null);
  };

  return (
    <View style={styles.cont}>
      <TouchableOpacity
        onPress={() => setSingle(null)}
        style={styles.backButton}>
        <FontAwesomeIcon icon={'angle-left'} />
      </TouchableOpacity>
      <Text style={styles.title}>{prod.title}</Text>
      <Image style={styles.img} source={prod.image} />
      <View style={styles.priceCounter}>
        <Text style={styles.price}>{prod.price}р за порцию</Text>
        <Counter cnt={cnt} setCnt={setCnt} />
      </View>
      <TouchableOpacity style={styles.btn} onPress={addToCart}>
        <Text style={styles.btnText}>Добавить в корзину</Text>
      </TouchableOpacity>
      <Text style={styles.desc}>{prod.desc}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: Dimensions.get('window').height,
    backgroundColor: '#fff',
    zIndex: 101,
    paddingTop: 35,
  },
  backButton: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 50,
    left: 10,
    zIndex: 102,
  },
  title: {
    paddingHorizontal: 50,
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 20,
    color: 'black',
  },
  price: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 500,
    color: 'black',
  },
  priceCounter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  img: {
    width: 370,
    height: 370,
    alignSelf: 'center',
  },
  btn: {
    backgroundColor: "#FF3F2F",
    width: 350,
    height: 50,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 4,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 500,
    color: "white",
    paddingTop: 10,
  },
  desc: {
    fontSize: 15,
    color: "black",
    margin: 15,
    alignSelf: 'center',
  },
});

export default SingleProduct;
