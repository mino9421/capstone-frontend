import { useState, useEffect } from 'react'
import axios from 'axios';
import { Text, View, Button, TextInput, StyleSheet, CheckBox  } from 'react-native'







export function Register({navigation}){
    const [email, onChangeEmail] =useState(null)
    const [password, onChangePassword] = useState(null)
    const [firstName, onChangeFirstName] =useState(null)
    const [lastName, onChangeLastName] = useState(null)
    const [phone, onChangePhone] = useState(null)
    const [age, onChangeAge] = useState(null)
    const [symptoms, onChangeSymptoms] = useState(null)
    const [isSelected, setSelection] = useState(false);

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

    var type = 'customer';
if (isSelected){
  type = 'restaurant'
}

    var myData = {
        email : email,
        password : password,
        firstName : firstName,
        lastName : lastName,
        phone : phone,
        age : age,
        symptoms : symptoms,
        type : type

       

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
        <View style={styles.parentView}>
        <View style={styles.formBox}>
          <Text style={styles.textStyle}>Email</Text>
          <TextInput
            placeholder='Enter email address'
            // value={guests}
            onChangeText={onChangeEmail}
          />
          <Text style={styles.textStyle}>Password</Text>
          <TextInput
            placeholder='Enter Password'
            value={password}
            onChangeText={onChangePassword}
          />
           <Text style={styles.textStyle}>firstName</Text>
          <TextInput
            placeholder='firstName'
            value={firstName}
            onChangeText={onChangeFirstName}
          />
           <Text style={styles.textStyle}>lastName</Text>
          <TextInput
            placeholder='lastName'
            value={lastName}
            onChangeText={onChangeLastName}
          />
           <Text style={styles.textStyle}>phone</Text>
          <TextInput
            placeholder='phone'
            value={phone}
            onChangeText={onChangePhone}
          />
           
           <Text style={styles.textStyle}>Age</Text>
          <TextInput
            placeholder='Age'
            value={age}
            onChangeText={onChangeAge}
          />
          <Text style={styles.textStyle}>symptoms</Text>
          <TextInput
            placeholder='symptoms'
            value={symptoms}
            onChangeText={onChangeSymptoms}
          />
          <Text>Role</Text>
          <CheckBox
           value={isSelected}
           onValueChange={setSelection}
          
         />
                 <Text style={styles.label}>Resataurant Owner?</Text>

          
         
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