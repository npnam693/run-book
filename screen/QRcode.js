import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Dimensions } from 'react-native';
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
            >
                <View style={styles.borderBarcode}>

                </View>
            </BarCodeScanner>
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
    absoluteFillObject: {
        position: 'relative',
        height: 400,
        width: 400,
        overflow: 'hidden',
    },
    borderBarcode: {
        backgroundColor: 'transparent',
        position: 'absolute',
        zIndex: 2,
        width: 250,
        height: 250,
        borderRadius: 20,
        top: '50%',
        left: '50%',
        transform: [{ translateX: -125 }, { translateY: -125 }],
        borderWidth: 6,
        borderColor: 'white',
        borderStyle: 'dashed',
    }
});