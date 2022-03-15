import * as React from 'react'
import axios from 'axios';
import { Text, View, Button, TextInput, StyleSheet  } from 'react-native'
import { Fragment } from 'react/cjs/react.production.min';





export default function EditUserProfile({navigation}){

    var user = JSON.parse(localStorage.getItem('user'))

    const [email, onChangeEmail] = React.useState(user.email)
    const [password, onChangePassword] = React.useState(user.password)
    const [firstName, onChangeFirstName] = React.useState(user.firstName)
    const [lastName, onChangeLastName] = React.useState(user.lastName)
    const [phone, onChangePhone] = React.useState(user.phone)
    const [age, onChangeAge] = React.useState(user.age)
    const [symptoms, onChangeSymptoms] = React.useState(user.symptoms)
    const [vaccinated, onChangeVaccinated] = React.useState(user.vaccinated)
    const [_id, onChange_Id] = React.useState(user._id)
    const [type, onChangeType] = React.useState(user.type)


    
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
        email : email,
        password : password,
        firstName : firstName,
        lastName : lastName,
        phone : phone,
        age : age,
        symptoms : symptoms, 
        vaccinated: vaccinated,
       type: type

    }
    console.log(myData)
    axios.post(`http://localhost:9090/api/v1/customers/${user._id}`, myData)
    .then(function (response) {
      console.log(response)
      localStorage.setItem('user', JSON.stringify(myData))
      navigation.navigate('UserProfile')

     
    })
    .catch(function (error) {
      console.log(error)
    })
   }

    return(
      <Fragment>
        <form onSubmit={send}>
       
          <p>Email</p>
          <input
          type="text"
            
            defaultValue={user.email}
            onChange={(e)=>onChangeEmail(e.target.value)}
          />
          <p >Password</p>
          <input
          type="text"
            
            defaultValue={user.password}
            onChange={(e)=>onChangePassword(e.target.value)}
          />
           <p >firstName</p>
          <input
          type="text"
            
          defaultValue={user.firstName}
            onChange={(e)=>onChangeFirstName(e.target.value)}
          />
           <p >lastName</p>
          <input
          type="text"
            
            defaultValue={user.lastName}
            onChange={(e)=>onChangeLastName(e.target.value)}
          />
           <p >phone</p>
          <input
          type="text"
           
            defaultValue={user.phone}
            onChange={(e)=>onChangePhone(e.target.value)}
          />
           
           <p >Age</p>
          <input
          type="text"
            
            defaultValue={user.age}
            onChange={(e)=>onChangeAge(e.target.value)}
          />
          <p >symptoms</p>
          <input
          type="text"
           
            defaultValue={user.symptoms}
            onChange={(e)=>onChangeSymptoms(e.target.value)}
          />
          <input type="submit" value="Submit"/>
          
        
      
      </form>
      </Fragment>
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