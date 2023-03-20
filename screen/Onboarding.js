import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useState } from 'react'
const dataOnboarding = [
    {
        title :'Find walking buddy',
        content: 'Find running buddy quickly and easily by sharing your location.',
        image: require('../assets/image/OB1.png'),
    },
    {
        title :'Set your goal',
        content: 'Set up your target & share with others to stay motivated',
        image: require('../assets/image/OB2.png'),
    },
    {
        title :'Explore your city',
        content: 'Discover new landmarks, parks, and neighborhoods as you run.',
        image: require('../assets/image/OB3.png'),
    }
]

export default function Onboarding(){
    const [index, setIndex] = useState(0)
    return (
        <View style = {styles.container}>
            <Image source={dataOnboarding[index].image} style={{width:331, height: 174}}/>
            <Text style = {styles.title}>{dataOnboarding[index].title}</Text>
            <Text style = {styles.content}>{dataOnboarding[index].content}</Text>
            
            <TouchableOpacity onPress={() => {
                setIndex(index  + 1)
                if (index == 2) setIndex(0)}
            }>
                <View style={styles.buttonNext}>
                    <Text style = {{fontSize: 20, marginRight: 5, fontWeight: '700', color: '#3E4F88'}}>Next</Text>
                    <Icon name = 'arrow-right' size = {18} style={{top: 2}}/>
                </View>
            </TouchableOpacity>
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
    title: {
        // minHeight: 50,
        fontSize: 20,
        fontWeight: '700',
        color : '#3E4F88',
        marginTop: 60,
    },
    content: {
        fontSize: 16,
        minHeight: 60,
        color : '#3E4F88',
        paddingHorizontal: 50,
        textAlign: 'center',
        marginTop: 10,
    },
    buttonNext: {
        flexDirection: 'row',
        alignItems: 'center',
        
    }
  });
  