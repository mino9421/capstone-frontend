import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottomNavBar from './BottomNavBar'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        hidden={false}
        />
      <BottomNavBar/>
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
});
