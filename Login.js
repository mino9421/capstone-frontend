import * as React from 'react'
import axios from 'axios';
import { Text, View, Button, TextInput, Alert  } from 'react-native'


export default function Login(){
    const [email, onChangeEmail] = React.useState(null)
    const [password, onChangePassword] = React.useState(null)

    const submitData =()=>{
        console.log(JSON.stringify(email))
        console.log(JSON.stringify(password))
    }

    var myData = {
        user : email,
        pass : password
    }

    axios.post("/Login", myData)
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })

    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View>
          <Text>Emails</Text>
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
            onPress={submitData}
          />
        </View>
      </View>
    );
}