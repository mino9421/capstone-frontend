import * as React from 'react'
import axios from 'axios';
import { Text, View, Button, TextInput, Alert  } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import CustomerProfile from './components/CustomerProfile';
import CalenderPicker from './CalenderPicker'
import Login from './Login'

export default function HomeScreen({navigation}) {

  const [guests, onChangeGuests] = React.useState(null);
  const [day, onChangeDay] = React.useState(null);
  const [month, onChangeMonth] = React.useState(null);
  const [year, onChangeYear] = React.useState(null);
  const [time, onChangeTime] = React.useState(null);
 

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

  

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <Text>Number of Guests</Text>
        <TextInput
          placeholder='Enter the number of guest'
          // value={guests}
          onChangeText={onChangeGuests}
        />

        <Text>Day</Text>
        <TextInput
        
          placeholder='Enter numneric day (02)'
          value={day}
          onChangeText={onChangeDay}
        />
        <Text>Month</Text>
        <TextInput
       
          placeholder='Enter numneric month (11)'
          value={month}
          onChangeText={onChangeMonth}
        />
        <Text>Year</Text>
        <TextInput
        
          placeholder='Enter numneric year (2022)'
          value={year}
          onChangeText={onChangeYear}
        />

        <Text>Time</Text>
        <TextInput
          placeholder='13:05'
          value={time}
          keyboardType='numeric'
          onChangeText={onChangeTime}
        />
       
        <Button
          title="Reservation"
          onPress={submitData}
          
        />
      </View>
      
      <View style={{}}>
        <CalenderPicker/>
      </View>

    </View>
  );
}
  
