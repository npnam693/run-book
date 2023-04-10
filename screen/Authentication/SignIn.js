import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {useState} from  'react'
import {Button, Input}  from 'react-native-elements'
import Icon from 'react-native-vector-icons/ionicon';



export default function Login({navigation}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View>
            <View>
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
                borderRadius: 10
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    
})