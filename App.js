import { StyleSheet, Text, View } from 'react-native';
import Login from './Login'
import { Register } from './Register';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserReservation from "./UserReservation"
import UserProfile from './UserProfile'
import EditUserProfile from './EditUserProfile'
import CustomerReservations from './CustomerReservations';
import UserRestaurants from './UserRestaurants'
import AddRestaurant from './AddRestaurant'
import EditRestaurant from './EditRestaurant'



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="UserReservation" component={UserReservation} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="EditUserProfile" component={EditUserProfile} />
      <Stack.Screen name="CustomerReservations" component={CustomerReservations} />
      <Stack.Screen name="UserRestaurants" component={UserRestaurants} />
      <Stack.Screen name="AddRestaurant" component={AddRestaurant} />
      <Stack.Screen name="EditRestaurant" component={EditRestaurant}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   // alignItems: 'center',
    justifyContent: 'center',
  },
});
