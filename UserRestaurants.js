import { useState, useEffect, Component } from 'react'
import axios from 'axios';
import { Text, View, Button, TextInput, StyleSheet  } from 'react-native'
import { useIsFocused } from '@react-navigation/native'


export default function CustomerRestaurants({navigation}){
  const isFocused = useIsFocused()
    let user = JSON.parse(localStorage.getItem('user'))

    const [restaurants, onChangeRestaurants] = useState([])
    
   
 
    useEffect( 
        ()=>{
          user = JSON.parse(localStorage.getItem('user'))
            axios.post("http://localhost:9090/api/v1/restaurants", {manager : user._id} )
  
            .then(function (response) {
              console.log(response)
              onChangeRestaurants(response.data.restaurants)
              
              
            })
            .catch(function (error) {
              console.log(error)
            })
        }, [isFocused]
      );

      

    

    
    const list = () => { 
        
        return restaurants.map((restaurant) => {
            
            return( 
                
                <View key={restaurant._id}>
                    
                    <Text>Restaurant Id: {restaurant._id}</Text>
                    <Text>Name:{restaurant.name}</Text>
                    <Text>Adress:{restaurant.address}</Text>
                    <Text>Cuisine:{restaurant.style}</Text>
                    <Text>Description:{restaurant.description}</Text>
                    
          <Button
            title="Edit Restaurant"
            onPress= {()=>{
            navigation.navigate('EditRestaurant',{restaurant: restaurant})
            }}
          />
                </View>
                
            )
        }
        
        )}
        console.log(restaurants)
        return <View><Text>{list()}</Text></View>;
}