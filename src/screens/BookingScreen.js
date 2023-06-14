import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import globalStyles from '../data/globalStyles';
import products from '../mobx/products';

const BookingScreen = ({navigation, route}) => {
  const [fromCart, setFromCart] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    if (!showThankYou) {
      return;
    }
    setTimeout(() => {
      products.clearCart();
      navigation.push('Home');
    }, 2000);
  }, [showThankYou]);

  useEffect(() => {
    if (route.params) {
      setFromCart(true);
    }
  }, []);

  return (
    <View style={styles.globalCont}>
      <Header navigation={navigation} />
      {showThankYou ? (
        <>
          <Text style={{...styles.title, textAlign: 'center'}}>
            Спасибо за оформление заказа
          </Text>
          <Text style={{textAlign: 'center'}}>
            Наши менеджеры свяжутся с вами в ближайшее время
          </Text>
        </>
      ) : (
        <ScrollView>
          {fromCart ? (
            <Text style={styles.title}>Оформить заказ</Text>
          ) : (
            <Text style={styles.title}>Бронь столиков</Text>
          )}

          <View>
            <View style={styles.list}>
              <View style={styles.inner}>
                <Text style={styles.name}>Имя</Text>
                <TextInput style={styles.input} />
              </View>
            </View>
            <View style={styles.list}>
              <View style={styles.inner}>
                <Text style={styles.name}>Телефон</Text>
                <TextInput style={styles.input} />
              </View>
            </View>

            <View style={styles.list}>
              <View style={{width: '50%'}}>
                <Text style={styles.time}>Время</Text>
                <TextInput style={styles.input} />
              </View>

              <View style={{width: '50%'}}>
                <Text style={styles.data}>Дата</Text>
                <TextInput style={styles.input} />
              </View>
            </View>

            <View>
              <Text style={styles.comment}>Комменатрий</Text>
              <TextInput
                style={styles.commentInput}
                placeholder="Оставьте свое сообщение"
              />
            </View>
          </View>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => setShowThankYou(true)}>
            <Text style={styles.btnText}>Далее</Text>
          </TouchableOpacity>
        </ScrollView>
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
  list: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  name: {
    marginBottom: 10,
    fontSize: 15,
    fontWeight: 500,
    color: 'black',
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'silver',
    height: 30,
    flexGrow: 1,
    paddingLeft: 10,
  },
  namb: {
    marginLeft: 27,
    marginBottom: 10,
    fontSize: 15,
    fontWeight: 500,
    color: 'black',
  },
  Inputnamb: {
    borderWidth: 1,
    width: 70,
    borderRadius: 4,
    borderColor: 'silver',
    marginLeft: 25,
  },
  time: {
    marginBottom: 10,
    fontSize: 15,
    fontWeight: 500,
    color: 'black',
  },
  timeInput: {
    borderWidth: 1,
    width: 170,
    borderRadius: 4,
    borderColor: 'silver',
  },
  data: {
    marginLeft: 27,
    marginBottom: 10,
    fontSize: 15,
    fontWeight: 500,
    color: 'black',
  },
  dataInput: {
    borderWidth: 1,
    width: 160,
    borderRadius: 4,
    borderColor: 'silver',
    marginLeft: 15,
  },
  comment: {
    marginLeft: 15,
    marginBottom: 10,
    fontSize: 15,
    fontWeight: 500,
    color: 'black',
  },
  commentInput: {
    borderWidth: 1,
    width: Dimensions.get('window').width - 20,
    height: 50,
    borderRadius: 4,
    borderColor: 'silver',
    marginLeft: 10,
    paddingLeft: 10,
  },
  btn: {
    backgroundColor: '#FF3F2F',
    width: 350,
    height: 50,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 70,
    borderRadius: 4,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 500,
    color: 'white',
    paddingTop: 10,
  },
  inner: {
    width: '100%',
  },
});

export default BookingScreen;
