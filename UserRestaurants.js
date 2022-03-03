import { useState, useEffect, Component } from 'react'
import axios from 'axios';
import { Text, View, Button, TextInput, StyleSheet  } from 'react-native'


export default function CustomerRestaurants({navigation}){
    let user = JSON.parse(localStorage.getItem('user'))

    const [restaurants, onChangeRestaurants] = useState([])
    
    
   

    useEffect( 
        ()=>{
            axios.post("http://localhost:9090/api/v1/calendar", {customer : user._id})
  
            .then(function (response) {
              console.log(response)
              onChangeRestaurants(response.data.restaurants)
              
              
            })
            .catch(function (error) {
              console.log(error)
            })
        }, []
      );

    

    
    const list = () => { 
        
        return restaurants.map((element) => {
            
            return( 
                
                <View key={element._id}>
                    
                    <Text>Restaurant Id: {element.reservation_maker}</Text>
                    <Text>Name:{element.reservation_at}</Text>
                    <Text>Adress:{element.numGuests}</Text>
                    <Text>Hours:{element.start}</Text>
                    <Text>Cuisine:{element.start}</Text>
                    <Text>Description:{element.start}</Text>
                    
                </View>
                
            )
        }
        
        )}
        console.log(restaurants)
        return <View><Text>{list()}</Text></View>;
}