import { useEffect, useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import QR from 'qrcode'


export default function QRcode({ history, route }){

    const [src, setSrc] = useState('')

    useEffect(() => {
        QR.toDataURL(`http://localhost:19006/${route.params.restaurant._id}`).then(setSrc)
    }, [])



    return(
        <View style={styles.container}>
            <Text>QR Code Scan with phone</Text>
            <Image
            style={styles.logo}
            source={{uri:src}}
            /> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: 250,
      height: 250,
    },
  });