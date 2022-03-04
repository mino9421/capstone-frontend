import { useState, useEffect } from 'react'
import axios from 'axios';
import { Text, View, Button, TextInput, StyleSheet  } from 'react-native'






export default function EditUserProfile({navigation, route} ){
    
    

    
 
    var restaurant = route.params.restaurant

    const [name, onChangeName] =useState(restaurant.name)
    const [address, onChangeAddress] = useState(restaurant.address)
    const [menuFileName, onChangeMenuFileName] =useState(restaurant.menuFileName)
    const [style, onChangeStyle] = useState(restaurant.style)
    const [opening_hours, onChangeOpening_hours] = useState(restaurant.opening_hours)
    const [phone, onChangePhone] = useState(restaurant.phone)
    const [managed_by, onChangeManaged_by] = useState(restaurant.managed_by)
    const [_id, onChange_Id] = useState(restaurant._id)


    const submitData =()=>{
        console.log(JSON.stringify(email))
        console.log(JSON.stringify(password))
        console.log(JSON.stringify(firstName))
        console.log(JSON.stringify(lastName))
        console.log(JSON.stringify(phone))
        console.log(JSON.stringify(age))
        console.log(JSON.stringify(symptoms))
    }

    

   // http://localhost:9090/api/v1/customers/6219185706aef0e68ea118b9

   function send(){

    var myData = {
        _id : _id,
        name : name,
        address : address,
        menuFileName : menuFileName,
        style : style,
        opening_hours : opening_hours,
        phone : phone,
        managed_by: managed_by

    }

   console.log(myData)

    //http://localhost:9090/api/v1/restaurant/62227e7de4ec9055901c11b6

    axios.post(`http://localhost:9090/api/v1/restaurant/${restaurant._id}`, myData)
    .then(function (response) {
      console.log(response)
     
      navigation.navigate('UserRestaurants')

     
    })
    .catch(function (error) {
      console.log(error)
    })
   }

    return(
        <View style={styles.parentView}>
        <View style={styles.formBox}>
          <Text style={styles.textStyle}>Name</Text>
          <TextInput
            placeholder='Enter name of restaurant'
            defaultValue={restaurant.name}
            onChangeText={onChangeName}
          />
          <Text style={styles.textStyle}>Address</Text>
          <TextInput
            placeholder='Enter Address'
            defaultValue={restaurant.address}
            onChangeText={onChangeAddress}
          />
           <Text style={styles.textStyle}>Menu File Name </Text>
          <TextInput
            placeholder='Menu File Name'
            defaultValue={restaurant.menuFileName}
            onChangeText={onChangeMenuFileName}
          />
           <Text style={styles.textStyle}>Cuisine</Text>
          <TextInput
            placeholder='Cuisine / Style of food'
            defaultValue={restaurant.style}
            onChangeText={onChangeStyle}
          />
          
           <Text style={styles.textStyle}>Phone</Text>
          <TextInput
            placeholder='Phone'
            defaultValue={restaurant.phone}
            onChangeText={onChangePhone}
          />
         
          <Button
            title="Apply"
            onPress= {()=>{
                send()
                
                
            }}
            
          />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   // alignItems: 'center',
    justifyContent: 'center',
  },
  parentView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#389FB9"
  },
  formBox: {
    backgroundColor: "#CAACD7",
    justifyContent: 'space-evenly',
    height: 250,
    padding: 50,
    borderRadius: 15
  },
  textStyle: {
    color: "#2D4BA7",
    fontWeight: 600
  },
  btnBox: {
    height: 75,
    justifyContent: 'space-between'
  }
});