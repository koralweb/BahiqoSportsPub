import React from 'react';
import Header from '../components/Header';
import {ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import globalStyles from '../data/globalStyles';

const BookingScreen = ({navigation}) => {
  return (
    <View style={styles.globalCont}>
      <Header navigation={navigation} />
      <ScrollView>
        <Text style={styles.title}>Бронь столиков</Text>

        <View>
        <View style={styles.list}>
          <View style={styles.inner}>
           <Text style={styles.name}>Имя</Text>
           <TextInput style={styles.inputName}></TextInput>
          </View>
         
          <View>
           <Text  style={styles.namb}>№</Text>
           <TextInput  style={styles.Inputnamb}></TextInput>
          </View>

        </View>
        
        <View style={styles.list}>
          <View>
           <Text style={styles.time}>Время</Text>
           <TextInput style={styles.timeInput}></TextInput>
          </View>

          <View>
           <Text style={styles.data}>Дата</Text>
           <TextInput style={styles.dataInput}></TextInput>
          </View>    
        </View>

        <View>
          <Text style={styles.comment}>Комменатрий</Text>
          <TextInput style={styles.commentInput} placeholder='Оставьте свое сообщение'></TextInput>
        </View>


        </View>
        
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Далее</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,

  title: {
    fontSize: 30,
    fontWeight: 500,
    color: "black",
    margin: 15,
  },
  list: {
    flexDirection: "row",
    margin: 15,
  },
  name: {
    marginBottom: 10,
    fontSize: 15,
    fontWeight: 500,
    color: "black",
  },
  inputName: {
    borderWidth: 1,
    width: 250,
    borderRadius: 4,
    borderColor: 'silver',
  },
  namb: {
    marginLeft: 27,
    marginBottom: 10,
    fontSize: 15,
    fontWeight: 500,
    color: "black",
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
    color: "black",
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
    color: "black",
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
    color: "black",
  },
  commentInput: {
    borderWidth: 1,
    width: 350,
    height: 100,
    borderRadius: 4,
    borderColor: 'silver',
    marginLeft: 15,
  },
  btn: {
    backgroundColor: "#FF3F2F",
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
    color: "white",
    paddingTop: 10,
  },

});

export default BookingScreen;
