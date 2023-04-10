import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import IconIonicons from 'react-native-vector-icons/Ionicons'
import IconOcticons from 'react-native-vector-icons/Octicons'
import {Dimensions} from 'react-native';
import { dataOnboarding } from './Onboarding1';

const windowWidth = Dimensions.get('window').width;
export default function Onboarding3({navigation}){
    const index = 2
    return (
        <View style = {styles.container}>
            <View style={{flexDirection:'row', justifyContent:'space-between', width:windowWidth - 100, alignItems:'center', top: -120}}>
                {
                    index != 0 ? (
                        <TouchableOpacity onPress={() => navigation.navigate(`Onboarding${index-1+1}`) }>
                                <IconIonicons name = 'arrow-back-outline' size = {30} style={{top: 2}} color= '#3E4F88'/>
                        </TouchableOpacity>
                        // </View>
                    ) : (<View style={{height: 35, margin:'auto'}}></View>)
                }
                {
                    index != 2 &&
                    <View style={{marginLeft:'auto'}}> 
                        <TouchableOpacity onPress={() => navigation.navigate(`Onboarding2`, )}>
                            <Text style = {{color:'#3E4F88', fontSize:18, fontWeight:'600'}}>Skip</Text>
                        </TouchableOpacity>
                    </View>

                }
            </View>

            <Image source={dataOnboarding[index].image} style={{width:330, height: 174}}/>
            <Text style = {styles.title}>{dataOnboarding[index].title}</Text>
            <Text style = {styles.content}>{dataOnboarding[index].content}</Text>
            
            <View style={styles.progress}>
                {
                    Array(3).fill(1).map((item, idx) => {
                        if (index == idx)  return <IconOcticons name = 'dot-fill' size = {14} color = '#3E4F88' style={styles.iconDot} key = {idx}/>
                        else return <IconOcticons name = 'dot-fill' size = {14} color = '#BDBDBD' style={styles.iconDot} key = {idx}/>
                    })
                }
            </View>
                {
                index != 2 ? (
                    <View style={{bottom: -70, minHeight: 120}}>
                        <TouchableOpacity onPress={() => {
                            () => navigation.navigate(`Onboarding${index+1+1}`, )}
                        }>
                            <View style={styles.buttonNext}>
                                <Text style = {{fontSize: 20, marginRight: 2, fontWeight: '700', color: '#3E4F88', marginLeft: 6}}>Next</Text>
                                <IconIonicons name = 'arrow-forward-outline' size = {18} style={{top: 2}} color= '#3E4F88'/>
                            </View>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style={{bottom: -120, minHeight: 120}}>
                        <TouchableOpacity onPress={() => {

                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'StackHomeScreen' }],
                        })
                        }

                        }>
                            <View style={{backgroundColor:'#3E4F88', width: windowWidth-100, paddingVertical: 10, alignItems:'center', borderRadius:10}}>
                                    <Text style = {{color: 'white', fontWeight:'700', fontSize:18}}>Get Started</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )
            }
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
        marginTop: 50,
        // bottom: -70,
    },
    progress: {
        flexDirection: 'row',
        maxWidth: 100,
        justifyContent: 'space-between',
    },
    iconDot: {
        marginHorizontal: 2,
    },
    backBTN: {
        position: 'relative',
        left: windowWidth * -1 / 2 + 50,
    }
  });
  