import * as React from 'react'
import axios from 'axios';
import { Text, View, Button, TextInput  } from 'react-native'


export default function Login({navigation}){
    const [email, onChangeEmail] = React.useState(null)
    const [password, onChangePassword] = React.useState(null)

  

   

   function send(){

    var myData = {
        email : email,
        password : password
    }
    axios.post("http://localhost:9090/login", myData)
    .then(function (response) {
      console.log(response)

      
    })
    .catch(function (error) {
      console.log(error)
    })
   }

    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',
        backgroundColor: "#389FB9" }}>
          <View style={{backgroundColor: "#CAACD7",justifyContent: 'space-evenly', height: 250, padding: 50}}>
            <View>
              <Text style={{color: "#2D4BA7", fontWeight: 600}}>Email</Text>
              <TextInput
                placeholder='Enter email address'
                // value={guests}
                onChangeText={onChangeEmail}
              />
            </View>

            <View>
              <Text style={{color: "#2D4BA7", fontWeight: 600}}>Password</Text>
              <TextInput
                placeholder='Enter Password'
                value={password}
                onChangeText={onChangePassword}
              />
            </View>

            <View style={{height: 75, justifyContent: 'space-between'}}>
              <Button
                title="Login"
                onPress= {()=>{
                    send()
                    navigation.navigate('HomeScreen')
                }}
                
              />
              <Button
                title="Register"
                onPress= {()=>{
                  navigation.navigate('Register')  
                }}
              />
            </View>
          </View>
      </View>
    );
}

