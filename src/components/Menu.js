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
        <Text>{el.title}</Text>
      </TouchableOpacity>
    ));
  };

  return menuList.map(el => (
    <View style={styles.cont}>
      {renderMenuItems()}
      <Image source={require('../assets/logo.png')} />
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
  },
});

export default Menu;
