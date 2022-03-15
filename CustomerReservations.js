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
                
                <div key={element._id}>
                    
                    <div>User Id: {element.reservation_maker}</div>
                    <div>Restaurant Id:{element.reservation_at}</div>
                    <div>Number of Guests:{element.numGuests}</div>
                    <div>Time/Day:{element.start}</div>
                    <div>version 2</div>
                </div>
                
            )
        }
        
        )}
        console.log(reservations)
        return <div>{list()}</div>;
}