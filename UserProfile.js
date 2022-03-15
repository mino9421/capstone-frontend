import { useState, useEffect } from 'react'
import axios from 'axios';
import { Text, View, Button, TextInput, StyleSheet  } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { Fragment } from 'react/cjs/react.production.min';

export default function UserProfile ({navigation}){
  const isFocused = useIsFocused()
  var user = JSON.parse(localStorage.getItem('user'));

  
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
        <Fragment>
         <div>
           <label>Email</label>
           <p>{user.email}</p>

           <label>Name</label>
           <p>{user.firstName} {user.lastName}</p>

           <label>Age</label>
           <p>{user.age}</p>

           <label>Phone</label>
          <p>{user.phone}</p>

          <label>Vaccinated</label>
          <p>{JSON.stringify(user.vaccinated)}</p>

          <label>Symptoms</label>
          <p>{JSON.stringify(user.symptoms)}</p>

          <button type="button" onClick={()=>{navigation.navigate("RestuarantList")}}>Restaurant Reservation</button>
          <button type="button" onClick={()=>{navigation.navigate("./components/QRcode")}}> QR Code</button>
          <button type="button" onClick={()=>{navigation.navigate("EditUserProfile")}}>Edit Profile</button>
          <button type="button" onClick={()=>{navigation.navigate("CustomerReservations")}}>View Reservation</button>
          <button type="button" onClick={()=>{logout()}}>Logout</button>


         </div>
      {/*
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
              navigation.navigate('RestuarantList')
            }}
          />

          <Button
            title="QR Code"
            onPress= {()=>{
              navigation.navigate('./components/QRcode')
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
         */}
        </Fragment>
    )}
    
    else if(user.type == 'restaurant') {
      return(
        <Fragment>
           <div>
           <label>Email</label>
           <p>{user.email}</p>

           <label>Name</label>
           <p>{user.firstName} {user.lastName}</p>

           <label>Age</label>
           <p>{user.age}</p>

           <label>Phone</label>
          <p>{user.phone}</p>

         

          <button type="button" onClick={()=>{navigation.navigate("AddRestaurant")}}>Add Restaurant</button>
          <button type="button" onClick={()=>{navigation.navigate("UserRestaurants")}}> My Restaurants</button>
          <button type="button" onClick={()=>{navigation.navigate("EditUserProfile")}}>Edit Profile</button>
         
          <button type="button" onClick={()=>{logout()}}>Logout</button>


         </div>
{/*
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
          title="Logout"
          onPress={logout}
          />
        </View>
        */}
        </Fragment>
        
      )
    }
}