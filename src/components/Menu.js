import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const menuList = [
  {name: 'Catalog', title: 'Каталог'},
  {name: 'About', title: 'О нас'},
  {name: 'Booking', title: 'Бронь столика'},
  {name: 'Cart', title: 'Корзина'},
  {name: 'Translations', title: 'Трансляции'},
];

const Menu = ({navigation}) => {
  const renderMenuItems = () => {
    return menuList.map(el => (
      <TouchableOpacity onPress={() => navigation.push(el.name)} key={el.name}>
        <Text style={styles.menu}>{el.title}</Text>
      </TouchableOpacity>
    ));
  };

  return menuList.map(el => (
    <View style={styles.cont}>
      {renderMenuItems()}
      <View style={styles.solid}></View>
      <Image  style={styles.img} source={require('../assets/logo.png')} />
    </View>
  ));
};

const styles = StyleSheet.create({
  cont: {
    position: 'absolute',
    top: 109,
    left: 0,
    backgroundColor: '#fff',
    width: '100%',
    height: Dimensions.get('window').height - 110,
    zIndex: 100,
    paddingTop: 90,
    alignItems: 'center',
  },
  menu: {
    color: 'black',
    fontSize: 30,
    fontWeight: 500,
  },
  img: {
    marginTop: 130,
  },
  solid: {
    width: '90%',
    height: 4,
    backgroundColor: '#FF3F2F',
    marginTop: 15,
  },
});

export default Menu;
