import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {useState} from  'react'
import {Button, Input}  from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';



export default function SignIn({navigation}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit =  () => {
        
    }

    return (
        <View style={styles.container}>
                <View style={styles.groupInput}>
                    <Text>Email</Text>
                    <Input
                        placeholder='Email'
                        leftIcon={
                            <Icon
                                name='user'
                                size={24}
                                color='black'
                            />
                        }
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View style={styles.groupInput}>
                    <Text>Password</Text>
                    <Input
                        placeholder='Password'
                        leftIcon={
                            <Icon
                                name='lock-closed'
                                size={24}
                                color='black'
                            />
                        }
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
            <Button title='login' buttonStyle = {{
                marginTop: 10,
                borderRadius: 10
            }}
                onPress={handleSubmit}
            />
            <TouchableOpacity
                onPress={() => navigation.navigate('SignUp')}
            >
                <Text style={{}}>Sign up</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%'
    },
    groupInput: {
        marginTop: 10,
        paddingHorizontal: 20,
        display: 'flex',
        width: '100%',
    }

})