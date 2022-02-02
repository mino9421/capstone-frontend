import React from 'react';
import { View, Text, Button } from 'react-native';

export default ({ history }) => (
    <View>
        <Text>This is the QR code page</Text>

        <Text>QR code goes here</Text>
        <Button title="Go Back" onPress={() => history.push("/")} />
    </View>
);
