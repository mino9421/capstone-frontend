import { useState, useEffect, Component } from 'react'
import axios from 'axios';
import { Text, View, Button, TextInput, StyleSheet  } from 'react-native'


export default function CustomerResrvations({navigation}){
    let user = JSON.parse(localStorage.getItem('user'))

    const [reservations, onChangeReservations] = useState([])
    
    
   

    useEffect( 
        ()=>{
            axios.post("http://localhost:9090/api/v1/calendar", {customer : user._id})
  
            .then(function (response) {
              console.log(response)
               onChangeReservations(response.data.reservations)
              
              
            })
            .catch(function (error) {
              console.log(error)
            })
        }, []
      );

    

    
    const list = () => { 
        
        return reservations.map((element) => {
            
            return( 
                
                <View key={element._id}>
                    
                    <Text>User Id: {element.reservation_maker}</Text>
                    <Text>Restaurant Id:{element.reservation_at}</Text>
                    <Text>Number of Guests:{element.numGuests}</Text>
                    <Text>Time/Day:{element.start}</Text>
                </View>
                
            )
        }
        
        )}
        console.log(reservations)
        return <View><Text>{list()}</Text></View>;
}