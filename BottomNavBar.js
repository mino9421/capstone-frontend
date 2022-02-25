import * as React from 'react'
import axios from 'axios';
import { Text, View, Button, TextInput, Alert  } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import CustomerProfile from './components/CustomerProfile';

function HomeScreen() {

  const [guests, onChangeGuests] = React.useState(null);
  const [date, onChangeDate] = React.useState(null);
  const [time, onChangeTime] = React.useState(null);
  const [duration, onChangeDuration] = React.useState(null);

  const submitData = () => {
    console.log(JSON.stringify(guests))
    console.log(JSON.stringify(date))
    console.log(JSON.stringify(time))
    console.log(JSON.stringify(duration))

    var oldDate = new Date("Thu Jan 01 1970 21:30:00 GMT +0530(IST)");
    var myData = {
      reservation_maker: "61fed5dcd17185ff5269f018",
      reservation_at: "62180a0de8b0487519699ceb",
      numGuests: guests,
      start: oldDate,
      end: oldDate
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
        <Text>Date</Text>
        <TextInput
          placeholder='dd/mm/yy'
          value={date}
          onChangeText={onChangeDate}
        />
        <Text>Time</Text>
        <TextInput
          placeholder='13:05'
          value={time}
          keyboardType='numeric'
          onChangeText={onChangeTime}
        />
        <Text>Duration</Text>
        <TextInput
          placeholder='in minutes'
          value={duration}
          keyboardType='numeric'
          onChangeText={onChangeDuration}
        />
        <Button
          title="Reservation"
          onPress={submitData}
        />
      </View>
      <View>
        <Text>hi</Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
      </View>
    </View>
  );
}
  
function Login() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Login!</Text>
      </View>
    );
}

const Tab = createMaterialBottomTabNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#f0edf6"
          inactiveColor="#3e2465"
          barStyle={{ backgroundColor: '#694fad' }}
        >
          <Tab.Screen name="Reservation" component={HomeScreen} />
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="Profile" component={CustomerProfile} />
        </Tab.Navigator>
      </NavigationContainer>
    );
}
  