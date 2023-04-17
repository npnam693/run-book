import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function QRcode() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [data, setData] = useState({ data: '', type: '', isIDstudent: '' })

    const isValidCode = (data) => {
        return String(data).match(/([1][6-9][0-9]{5})|([2][0-2][0-9]{5})/)
    }

    // useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
    // }, []);/

    const handleBarCodeScanned = ({ type, data }) => {

        setData({ type, data, })
        setScanned(true);
        // alert(Bar code with type ${type} and data ${data} has been scanned!);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {
                scanned ?
                    <View style={{
                        backgroundColor: 'white',
                        alignItems: 'center',
                        padding: 20
                    }}>
                        <View style={{ width: 300, marginBottom: 50 }}>
                            {isValidCode(data.data) ? (
                                <>
                                    <Text style={{ fontSize: 20 }}>Bar code has been scanned!</Text>
                                    <Text style={{ fontSize: 20 }}>Type: {data.type}</Text>
                                    <Text style={{ fontSize: 20, color: 'blue' }}>Data: {data.data}</Text>
                                </>
                            ) : (
                                <Text style={{ fontSize: 20, color: 'red' }}>Invalid code: {data.data}</Text>
                            )}
                        </View>
                        <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />

                    </View>
                    :
                    <View>

                    </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
});