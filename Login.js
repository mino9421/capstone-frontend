import * as React from 'react'
import axios from 'axios';
import { Text, View, Button, TextInput, StyleSheet  } from 'react-native'


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
      if(response.data.user.email !== "Password or Username are incorrect")
      {
        // set local storage 
        localStorage.setItem('user', JSON.stringify(response.data.user))
        navigation.navigate('HomeScreen')
      }else{
        console.log(response.data.user.email)
      }
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  return(
    <View style={styles.parentView}>
      <View style={styles.formBox}>
        <View>
          <Text style={styles.textStyle}>Email</Text>
          <TextInput
            placeholder='Enter email address'
            // value={guests}
            onChangeText={onChangeEmail}
          />
        </View>

        <View>
          <Text style={styles.textStyle}>Password</Text>
          <TextInput
            placeholder='Enter Password'
            value={password}
            onChangeText={onChangePassword}
          />
        </View>

        <View style={styles.btnBox}>
          <Button
            title="Login"
            onPress= {()=>{
                send()
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