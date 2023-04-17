import {Text, View, Button, StyleSheet} from 'react-native'

export default function HomeLogin({navigation}) {
    return (
        <View style= {styles.container}>
            <Button
                title='Scan QR code'
                onPress={() => navigation.navigate('QRcode')}
                width={50}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})