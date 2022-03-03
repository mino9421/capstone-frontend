import { useState, useEffect } from 'react'
import axios from 'axios';
import { Text, View, Button, TextInput, StyleSheet, CheckBox  } from 'react-native'

export default function AddRestaurant({navigation}){
    const [name, onChangeName] =useState(null)
    const [address, onChangeAddress] = useState(null)
    const [menuFileName, onChangeMenuFileName] =useState(null)
    const [style, onChangeStyle] = useState(null)
    const [opening_hours, onChangeOpening_hours] = useState(null)
    const [phone, onChangePhone] = useState(null)

   function send(){



    var myData = {
        name : name,
        address : address,
        menuFileName : menuFileName,
        style : style,
        opening_hours : opening_hours,
        phone : phone,
        

       

    }
    console.log(myData)
    axios.post("localhost:9090/api/v1/restaurant", myData)
    .then(function (response) {
      console.log(response)

     
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
             value={name}
            onChangeText={onChangeName}
          />
          <Text style={styles.textStyle}>Address</Text>
          <TextInput
            placeholder='Enter Address'
            value={address}
            onChangeText={onChangeAddress}
          />
           <Text style={styles.textStyle}>Menu File Name </Text>
          <TextInput
            placeholder='Menu File Name'
            value={menuFileName}
            onChangeText={onChangeMenuFileName}
          />
           <Text style={styles.textStyle}>Cuisine</Text>
          <TextInput
            placeholder='Cuisine / Style of food'
            value={style}
            onChangeText={onChangeStyle}
          />
          <Text style={styles.textStyle}>Hours</Text>
          <TextInput
            placeholder='Hours'
            value={opening_hours}
            onChangeText={onChangeOpening_hours}
          />
           <Text style={styles.textStyle}>Phone</Text>
          <TextInput
            placeholder='Phone'
            value={phone}
            onChangeText={onChangePhone}
          />
           
         
          
         
          <Button
            title="Add Restaurant"
            onPress= {()=>{
                send()
                navigation.navigate('UserRestaurants')
                
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