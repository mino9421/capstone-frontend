import React from 'react';
import { ScrollView, View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';

export default ({ history }) => (
    <SafeAreaView style={styles.container}>
        <ScrollView style={{}}>

            <View style={{
                color: 'darkblue',
                backgroundColor: 'lightgreen',
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                alignSelf: 'center',
                // position: 'relative',
                width: 350,
                borderRadius: 350 / 20,
                padding: 5,
                margin: 5
            }}>
                {/* <Button title="Settings" onPress={() => history.push("/userSettings")} />
                <Button title="Edit" onPress={() => history.push("/profileEdit")} />
                <Button title="Log Off" onPress={() => LogOff()} /> */}
                <Button title="Settings"/>
                <Button title="Edit"/>
                <Button title="Log Off"/>
            </View>

            <View style={{
                color: 'darkblue',
                backgroundColor: 'lightgreen',
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
                alignSelf: 'center',
                // position: 'relative',
                width: 350,
                borderRadius: 350/20,
                padding: 10,
                margin: 5,
            }}>

                <View>
                    <Text>This is the Profile home page</Text>
                    <Text>Name</Text>
                    <Text>BIO_1</Text>
                    <Text>BIO_2</Text>
                </View>

                <View style={{borderBottomColor: 'black', borderBottomWidth: 1}}>
                    <Text>phone number</Text>
                    <Text>email address</Text>
                    <Text>address_1</Text>
                    <Text>address_2</Text>
                    <Text>website</Text>
                    <Text>View My Documents</Text>
                </View>
                

                <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }}>
                    <Text>Social Media</Text>
                    <Text>Icons will be here</Text>
                    <Text>IG</Text>
                    <Text>FB</Text>
                </View>

                <View>
                    <Text>Images & Projects</Text>

                </View>

            </View>
        </ScrollView>
    </SafeAreaView>
    
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      //alignItems: 'center',
      justifyContent: 'center',
    },
  });