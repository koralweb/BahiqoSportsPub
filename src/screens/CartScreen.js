import React from 'react';
import Header from '../components/Header';
import {
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
      <View>
        <Text>Ваша корзина пуста</Text>
        <TouchableOpacity onPress={() => navigation.push('Catalog')}>
          <Text>Перейти в каталог</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.globalCont}>
      <Header navigation={navigation} />
      <Text>Корзина</Text>
      {products.list.some(el => el.added) ? (
        <ScrollView>
          {renderProducts()}
          <TouchableOpacity>
            <Text>Оформить заказ</Text>
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
});

export default observer(CartScreen);
