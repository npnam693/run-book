
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {useState, useRef} from  'react'
import {Button, Input}  from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';
import LottieView from 'lottie-react-native';



export default function SignIn({navigation}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit =  () => {
        navigation.navigate('HomeLogin')
    }
    const animation = useRef(null);

    return (
        <View style={styles.container}>

                <LottieView
                autoPlay
                ref={animation}
                style={{
                    // width: Dimensions.get('window').width,
                    height: 300,
                    marginTop: 20,
                }}
                // Find more Lottie files at https://lottiefiles.com/featured
                source={require('../../assets/lottie/121421-login.json')}
                />
                <View style={styles.groupInput}>
                    <Text style={styles.title}>Email</Text>
                    <Input
                        placeholder='Email'
                        leftIcon={
                            <Icon
                                name='mail'
                                size={20}
                                color='black'
                            />
                        }
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View style={styles.groupInput}>
                    <Text style={styles.title}>Password</Text>
                    <Input
                        placeholder='Password'
                        leftIcon={
                            <Icon
                                name='lock-closed'
                                size={20}
                                color='black'
                            />
                        }
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
            <Button title='Sign In' buttonStyle = {{
                marginTop: 10,
                borderRadius: 10,
                paddingHorizontal: 100,
                paddingVertical: 10,
                size: 'large'
            }}
                onPress={handleSubmit}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center'
    },
    groupInput: {
        marginTop: 10,
        paddingHorizontal: 30,
        display: 'flex',
        width: '100%',
    },
    title: {
        fontSize: 20
    }

})
