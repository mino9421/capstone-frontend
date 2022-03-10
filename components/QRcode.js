import { useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import QRCode from 'qrcode'


export default function QRcode({ history }){

    const [src, setSrc] = useState('')


    useEffect(() => {
        QRCode.toDataURL("google.ca").then(setSrc)
    }, [])

    return(
        <View>
            <Text>This is the QR code page</Text>

            <Text>QR code goes here</Text>

            <Image
                source={src}
            />    

            <Button title="Go Back" onPress={() => history.push("/")} />
        </View>
    )
}

