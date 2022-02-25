import * as React from 'react'
import axios from 'axios';
import { Text, View, Button, TextInput, Alert  } from 'react-native'





export function Register({navigation}){
    const [email, onChangeEmail] = React.useState(null)
    const [password, onChangePassword] = React.useState(null)
    const [firstName, onChangeFirstName] = React.useState(null)
    const [lastName, onChangeLastName] = React.useState(null)
    const [phone, onChangePhone] = React.useState(null)
    const [age, onChangeAge] = React.useState(null)
    const [symptoms, onChangeSymptoms] = React.useState(null)

    const submitData =()=>{
        console.log(JSON.stringify(email))
        console.log(JSON.stringify(password))
        console.log(JSON.stringify(firstName))
        console.log(JSON.stringify(lastName))
        console.log(JSON.stringify(phone))
        console.log(JSON.stringify(age))
        console.log(JSON.stringify(symptoms))
    }

   

   function send(){

    var myData = {
        email : email,
        password : password,
        firstName : firstName,
        lastName : lastName,
        phone : phone,
        age : age,
        symptoms : symptoms
       

    }
    console.log(myData)
    axios.post("http://localhost:9090/api/v1/customers", myData)
    .then(function (response) {
      console.log(response)

     
    })
    .catch(function (error) {
      console.log(error)
    })
   }

    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#389FB9" }}>
        <View style={{backgroundColor: "#CAACD7",justifyContent: 'space-evenly', padding: 50}}>
          <Text style={{color: "#2D4BA7", fontWeight: 600}}>Email</Text>
          <TextInput
            placeholder='Enter email address'
            // value={guests}
            onChangeText={onChangeEmail}
          />
          <Text style={{color: "#2D4BA7", fontWeight: 600}}>Password</Text>
          <TextInput
            placeholder='Enter Password'
            value={password}
            onChangeText={onChangePassword}
          />
           <Text style={{color: "#2D4BA7", fontWeight: 600}}>firstName</Text>
          <TextInput
            placeholder='firstName'
            value={firstName}
            onChangeText={onChangeFirstName}
          />
           <Text style={{color: "#2D4BA7", fontWeight: 600}}>lastName</Text>
          <TextInput
            placeholder='lastName'
            value={lastName}
            onChangeText={onChangeLastName}
          />
           <Text style={{color: "#2D4BA7", fontWeight: 600}}>phone</Text>
          <TextInput
            placeholder='phone'
            value={phone}
            onChangeText={onChangePhone}
          />
           
           <Text style={{color: "#2D4BA7", fontWeight: 600}}>Age</Text>
          <TextInput
            placeholder='Age'
            value={age}
            onChangeText={onChangeAge}
          />
          <Text style={{color: "#2D4BA7", fontWeight: 600}}>symptoms</Text>
          <TextInput
            placeholder='symptoms'
            value={symptoms}
            onChangeText={onChangeSymptoms}
          />
         
          <Button
            title="Register"
            onPress= {()=>{
                send()
                navigation.navigate('Login')
                
            }}
            
          />
        </View>
      </View>
    );
}