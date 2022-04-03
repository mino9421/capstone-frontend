import { useState, useEffect, Component } from 'react'
import axios from 'axios';
import { Text, View, Button, TextInput, StyleSheet  } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { NavigationEvents } from 'react-navigation';

export default function RestaurantEmployeeHomePage({navigation, route}){

    var restaurant = route.params.restaurant 

   

    return(
        <View>
             <Button
            title="Restaurants Customers"
            onPress= {()=>{
            navigation.navigate('RestaurantCustomers',{restaurant: restaurant})
            }}
          />
        </View>
        )

}