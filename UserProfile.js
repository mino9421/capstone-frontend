import { useState, useEffect } from 'react'
import axios from 'axios';
import { Text, View, Button, TextInput, StyleSheet, Image } from 'react-native'
import { useIsFocused } from '@react-navigation/native'

import QR from 'qrcode'

export default function UserProfile ({navigation}){
  const isFocused = useIsFocused()
  var user = JSON.parse(localStorage.getItem('user'));

  // const [src, setSrc] = useState('https://www.google.ca/')
  
  useEffect(() => {
     user = JSON.parse(localStorage.getItem('user'))
  } , [isFocused])
    
  const logout = () => {
    navigation.navigate('Login')
    localStorage.removeItem('user')
  }

 if (user.type == 'customer' || user.type == null)
    {
      return( 
      
        <View>

          <label>Email</label>
          <Text>{user.email}</Text>

          <label>Name</label>
          <Text>{user.firstName} {user.lastName}</Text>

          <label>Age</label>
          <Text>{user.age}</Text>

          <label>Phone</label>
          <Text>{user.phone}</Text>

          <label>Vaccinated</label>
          <Text>{JSON.stringify(user.vaccinated)}</Text>

          <label>Symptoms</label>
          <Text>{JSON.stringify(user.symptoms)}</Text>

          <Button
            title="Retaurant Reservation"
            onPress= {()=>{
              navigation.navigate('UserReservation')
            }}
          />

          <Button
            title="QR Code"
            onPress= {()=>{
              navigation.navigate('QRcode')
            }}
          />

          <Button
            title="Edit Profile"
            onPress= {()=>{
              navigation.navigate('EditUserProfile')
            }}
          />

          <Button
          title="View Reservations"
          onPress= {()=>{
            navigation.navigate('CustomerReservations')
          }}
          />

          <Button
          title="Logout"
          onPress={logout}
          />

        </View>
    )}
    
    else if(user.type == 'restaurant') {
      return(
        <View>

          <label>Email</label>
          <Text>{user.email}</Text>

          <label>Name</label>
          <Text>{user.firstName} {user.lastName}</Text>

          <label>Age</label>
          <Text>{user.age}</Text>

          <label>Phone</label>
          <Text>{user.phone}</Text>

          <Button
          title="Add Restaurant"
          onPress= {()=>{
            navigation.navigate('AddRestaurant')
          }}
          />

          <Button
            title="My Restaurants"
            onPress= {()=>{
              navigation.navigate('UserRestaurants')
            }}
          />

          <Button
            title="Edit Profile"
            onPress= {()=>{
              navigation.navigate('EditUserProfile')
            }}
          />
          <Button
            title="test"
            onPress= {()=>{
              navigation.navigate('Test')
            }}
          />

          <Button
          title="Logout"
          onPress={logout}
          />
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   // alignItems: 'center',
    justifyContent: 'center',
  },
});