import * as React from 'react'
import axios from 'axios';
import { Text, View, Button, TextInput, Alert  } from 'react-native'



export function Login({navigation}){
    const [email, onChangeEmail] = React.useState(null)
    const [password, onChangePassword] = React.useState(null)

    const submitData =()=>{
        console.log(JSON.stringify(email))
        console.log(JSON.stringify(password))
    }

   

   function send(){

    var myData = {
        email : email,
        password : password
    }
    axios.post("http://localhost:9090/login", myData)
    .then(function (response) {
      console.log(response)

      return(
        <Profile/>
        )
    })
    .catch(function (error) {
      console.log(error)
    })
   }

    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View>
          <Text>Email</Text>
          <TextInput
            placeholder='Enter email address'
            // value={guests}
            onChangeText={onChangeEmail}
          />
          <Text>Password</Text>
          <TextInput
            placeholder='Enter Password'
            value={password}
            onChangeText={onChangePassword}
          />
         
          <Button
            title="Login"
            onPress= {()=>{
                send()
            }}
            
          />
        </View>
      </View>
    );
}