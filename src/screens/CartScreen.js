import React from 'react';
import Header from '../components/Header';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import globalStyles from '../data/globalStyles';
import products from '../mobx/products';
import Product from '../components/Cart/Product';
import {observer} from 'mobx-react-lite';

const CartScreen = ({navigation}) => {
  const renderProducts = () => {
    return products.list
      .filter(el => el.added)
      .map(prod => <Product key={prod.id} prod={prod} />);
  };

  const renderEmptyCart = () => {
    return (
      <View style={styles.cart}>
        <Text style={styles.cartText}>Ваша корзина пуста</Text>
        <TouchableOpacity
          onPress={() => navigation.push('Catalog')}
          style={styles.cartBtn}>
          <Text style={styles.cartCatalog}>Перейти в каталог</Text>
        </TouchableOpacity>
        <Image style={styles.img} source={require('../assets/logo.png')} />
      </View>
    );
  };

  return (
    <View style={styles.globalCont}>
      <Header navigation={navigation} />
      <Text style={styles.title}>Корзина</Text>
      {products.list.some(el => el.added) ? (
        <ScrollView>
          {renderProducts()}
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.push('Booking', {fromCart: true})}>
            <Text style={styles.btnText}>Оформить заказ</Text>
          </TouchableOpacity>
        </ScrollView>
      ) : (
        renderEmptyCart()
      )}
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
  cart: {
    alignItems: 'center',
    marginTop: 35,
  },
  cartText: {
    fontSize: 20,
    fontWeight: 500,
    color: 'black',
    margin: 15,
  },
  cartBtn: {
    backgroundColor: '#FF3F2F',
    width: 350,
    height: 50,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 4,
  },
  cartCatalog: {
    fontSize: 20,
    fontWeight: 500,
    color: 'white',
    paddingTop: 10,
  },
  img: {
    alignSelf: 'center',
    marginTop: 250,
  },
  btn: {
    backgroundColor: '#FF3F2F',
    width: 350,
    height: 50,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 4,
    marginTop: 30,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 500,
    color: 'white',
    paddingTop: 10,
  },
});

export default observer(CartScreen);
