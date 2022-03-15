import { useState, useEffect, Component } from 'react'
import axios from 'axios';
import { Text, View, Button, TextInput, StyleSheet, TouchableOpacity  } from 'react-native'
import { useIsFocused } from '@react-navigation/native'


export default function RestuarantList({navigation}){
  const isFocused = useIsFocused()

    const [restaurants, onChangeRestaurants] = useState([])
    
  
 
    useEffect( 
        ()=>{
        
            axios.get("http://localhost:9090/api/v1/restaurants")
  
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
              <div
  
                 onClick={()  => navigation.navigate("UserReservation", {restaurant: restaurant})}
                 >

                <div key={restaurant._id}>
                    
                    <p>Restaurant Id: {restaurant._id}</p>
                    <p>Name:{restaurant.name}</p>
                    <p>Adress:{restaurant.address}</p>
                    <p>Cuisine:{restaurant.style}</p>
                    <p>Description:{restaurant.description}</p>
                    
                    
                </div>
             </div>
                
               
                
            )
        }
        
        )}
       
        return <div><p>{list()}</p></div>;
}