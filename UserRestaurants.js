import { useState, useEffect } from 'react'
import axios from 'axios';
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
              
            <div key={restaurant._id}>
                
              <p>Restaurant Id: {restaurant._id}</p>
              <p>Name:{restaurant.name}</p>
              <p>Address:{restaurant.address}</p>
              <p>Cuisine:{restaurant.style}</p>
              <p>Description:{restaurant.description}</p>

              <button
                onClick= {()=>{
                navigation.navigate('EditRestaurant',{restaurant: restaurant})
                }}
              >Edit Restaurant</button>

            </div>
            
          )
      })
    }
        console.log(restaurants)
        return <div><p>{list()}</p></div>;
}