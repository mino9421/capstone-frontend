import { useEffect, useState } from 'react';
import QR from 'qrcode'


export default function QRcode({ history, route }){

    const [src, setSrc] = useState('')

    useEffect(() => {
        QR.toDataURL(`http://localhost:19006/${route.params.restaurant._id}`).then(setSrc)
    }, [])



    return(
        <div style={{flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'}}>
            <p>QR Code Scan with phone</p>
            <img style={{width: 250, height: 250}} src={src} />
        </div>
    )
}