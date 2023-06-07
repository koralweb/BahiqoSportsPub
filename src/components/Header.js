import React, {useState} from 'react';
import {observer} from 'mobx-react-lite';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Menu from './Menu';

const Header = ({navigation, isHome}) => {
  const [showMenu, setShowMenu] = useState(false);

  const renderMenu = () => {
    if (isHome || showMenu) {
      return <Menu navigation={navigation} />;
    }
  };

  return (
    <View style={styles.cont}>
      <TouchableOpacity
        style={{
          ...styles.iconBlock,
          backgroundColor: isHome ? '#fff' : '#FF3F2F',
        }}
        onPress={() => setShowMenu(!showMenu)}>
        {!isHome && <FontAwesomeIcon icon={'bars'} color={'#fff'} size={25} />}
      </TouchableOpacity>

      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <TouchableOpacity
        style={styles.iconBlock}
        onPress={() => navigation.push('Cart')}>
        <FontAwesomeIcon icon={'shopping-basket'} color={'#fff'} size={25} />
      </TouchableOpacity>
      {renderMenu()}
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    paddingTop: 35,
    marginBottom: 10,
    height: 100,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: 'relative',
    zIndex: 2,
  },
  logo: {
    width: 179 / 1.1,
    height: 71 / 1.1,
    marginHorizontal: 20,
  },
  iconBlock: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FF3F2F',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default observer(Header);
