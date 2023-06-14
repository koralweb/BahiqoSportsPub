import React, {useState} from 'react';
import Header from '../components/Header';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import globalStyles from '../data/globalStyles';
import productsList from '../data/productsList';
import products from '../mobx/products';
import Product from '../components/Catalog/Product';
import SingleProduct from '../components/Catalog/SingleProduct';

const CatalogScreen = ({navigation}) => {
  const [single, setSingle] = useState(null);
  const [type, setType] = useState('All');
  const renderTypesList = () => {
    const arr = ['All'];
    productsList.forEach(prod => {
      if (!arr.includes(prod.type)) {
        arr.push(prod.type);
      }
    });
    return arr.map(t => (
      <TouchableOpacity
        onPress={() => setType(t)}
        style={styles.typeItem}
        key={t}>
        <Text style={styles.type}>{t}</Text>
      </TouchableOpacity>
    ));
  };

  const renderProducts = () => {
    return products.list
      .filter(el => {
        if (type === 'All') {
          return true;
        }
        if (type === el.type) {
          return true;
        }
        return false;
      })
      .map(prod => (
        <Product setSingle={setSingle} key={prod.title} prod={prod} />
      ));
  };

  return (
    <View style={styles.globalCont}>
      <Header navigation={navigation} />
      <View style={styles.typesList}>{renderTypesList()}</View>
      <ScrollView>{renderProducts()}</ScrollView>
      {single && <SingleProduct single={single} setSingle={setSingle} />}
    </View>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
  typesList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  type: {
    color: 'black',
    fontWeight: 500,
    marginBottom: 10,
  },
});

export default CatalogScreen;
