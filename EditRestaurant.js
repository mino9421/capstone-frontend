import { useState, useEffect } from 'react'
import axios from 'axios';
import { Text, View, Button, TextInput, StyleSheet  } from 'react-native'

import styled from 'styled-components'

export default function EditUserProfile({navigation, route} ){
    
  const Container = styled.div`
    display: flex;
    background-color: '#fff';
    justify-content: center;
    align-items: center;
  `

  const ParentView = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: '#389FB9';
  `

  const FormBox = styled.form`
      background-color: '#CAACD7';
      justify-content: space-evenly;
      height: 250 px;
      padding: 50 px;
      border-radius: 25 px;
  `

  const TextStyle = styled.p`
      color: "#2D4BA7";
      font-weight: 600;
  `

  const BtnBox = styled.button`
      height: 75 px;
      weight: 75 px;
      justify-content: space-between;
      background-color: '#389FB9';
  `
 
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

  function send(e){

  e.preventDefault()

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
      <div>
        <form onSubmit={send}>
          <TextStyle>Name</TextStyle>
          <input
            type='text'
            placeholder='Enter name of restaurant'
            defaultValue={restaurant.name}
            onChange={(e)=>onChangeName(e.target.value)}
          />
          <TextStyle>Address</TextStyle>
          <input
            type='text'
            placeholder='Enter Address'
            defaultValue={restaurant.address}
            onChange={(e)=>onChangeAddress(e.target.value)}
          />
            <TextStyle>Menu File Name </TextStyle>
          <input
            type="text"
            placeholder='Menu File Name'
            defaultValue={restaurant.menuFileName}
            onChange={(e)=>onChangeMenuFileName(e.target.value)}
          />
          <TextStyle>Cuisine</TextStyle>
          <input
            type="text"
            placeholder='Cuisine / Style of food'
            defaultValue={restaurant.style}
            onChange={(e)=>onChangeStyle(e.target.value)}
          />

          <TextStyle>Phone</TextStyle>
          <input
            type="text"
            placeholder='Phone'
            defaultValue={restaurant.phone}
            onChange={(e)=>onChangePhone(e.target.value)}
          />
          
          <input type="submit" value="Update" />
        </form>
      </div>
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