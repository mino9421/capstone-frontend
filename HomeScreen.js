import { useState, useEffect } from 'react'
import axios from 'axios';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native'

export default function HomeScreen({navigation}) {

  const [guests, onChangeGuests] = useState(null);
  const [day, onChangeDay] = useState(null);
  const [month, onChangeMonth] = useState(null);
  const [year, onChangeYear] = useState(null);
  const [time, onChangeTime] = useState(null);
 

  const submitData = () => {
    
   
    var timeSplit = time.split(":")
   
    var myDate = new Date(year, month, day, timeSplit[0] , timeSplit[1])

   console.log(myDate)
   
    var myData = {
      reservation_maker: "61fed5dcd17185ff5269f018",
      reservation_at: "62180a0de8b0487519699ceb",
      numGuests: guests,
      start: myDate
    }
    

    axios.post("http://localhost:9090/api/v1/reservations", myData)
  
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })

  };

  const logout = () => {
    localStorage.removeItem('user')
    navigation.navigate('Login')
  }

  useEffect( 
    ()=>{
      navigation.reset({
        index: 0,
        routes: [{ name: 'HomeScreen' }],
      });
    }, []
  );
  
  return (
    <View style={styles.parentView}>
      <View style={styles.formBox}>
        <Text style={styles.textStyle}>Number of Guests</Text>
        <TextInput
          style={styles.inputBox}
          placeholder='Enter the number of guest'
          onChangeText={onChangeGuests}
        />

        <Text style={styles.textStyle}>Day</Text>
        <TextInput
          style={styles.inputBox}
          placeholder='Enter numeric day (02)'
          value={day}
          onChangeText={onChangeDay}
        />
        <Text style={styles.textStyle}>Month</Text>
        <TextInput
          style={styles.inputBox}
          placeholder='Enter numeric month (11)'
          value={month}
          onChangeText={onChangeMonth}
        />
        <Text style={styles.textStyle}>Year</Text>
        <TextInput
          style={styles.inputBox}
          placeholder='Enter numeric year (2022)'
          value={year}
          onChangeText={onChangeYear}
        />

        <Text style={styles.textStyle}>Time</Text>
        <TextInput
          style={styles.inputBox}
          placeholder='13:05'
          value={time}
          keyboardType='numeric'
          onChangeText={onChangeTime}
        />
       
        <Button
          title="Reservation"
          onPress={submitData}
          
        />
        <Button
          title="Logout"
          onPress={logout}
          
        />
      </View>
    
    </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   // alignItems: 'center',
    justifyContent: 'center',
  },
  parentView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#389FB9"
  },
  formBox: {
    backgroundColor: "#CAACD7",
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 500,
    width: 500,
    padding: 50,
    borderRadius: 15
  },
  textStyle: {
    color: "#2D4BA7",
    fontWeight: 600
  },
  btnBox: {
    height: 75,
    justifyContent: 'space-between'
  },
  inputBox: {
    width: 200
  }
});