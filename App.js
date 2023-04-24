import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { View } from 'react-native';
import Onboarding1 from './screen/Onboarding/Onboarding1';
import Onboarding2 from './screen/Onboarding/Onboarding2';
import Onboarding3 from './screen/Onboarding/Onboarding3';

import Home from './screen/Home';
import SignIn from './screen/Authentication/SignIn';
import SignUp from './screen/Authentication/SignUp';
import HomeLogin from './screen/HomeLogIn';
import QRcode from './screen/QRcode';
import { useState } from 'react';

const StackOnboarding = createMaterialTopTabNavigator();
const StackHome = createNativeStackNavigator();
const Stack = createNativeStackNavigator();



function StackHomeScreen() {
  return (
    <StackHome.Navigator options={{ tabBarShowLabel: false}} tabBar={() => <View></View>} >
      <StackHome.Screen name="Home" component={Home} options = {{headerShown: false}}/>
      <StackHome.Screen name="SignIn" component={SignIn} options={{ headerShown: false}}/>
      <StackHome.Screen name="SignUp" component={SignUp} options={{ headerShown: false}}/>
      <StackHome.Screen name="HomeLogin" component={HomeLogin} options={{ headerShown: false}}/>
      <StackHome.Screen name="QRcode" component={QRcode} options={{ headerShown: false, tabBarShowLabel: false, cardOverlayEnabled: false }} />
    </StackHome.Navigator>
  )
}

function StackOnboardingScreen() {
  return (
    <StackOnboarding.Navigator options={{ tabBarShowLabel: false}} tabBar={() => <View></View>} >
      <StackOnboarding.Screen name="Onboarding1" component={Onboarding1} options = {{tabBarShowLabel: false, cardOverlayEnabled: false, animation: 'none'}}/>
      <StackOnboarding.Screen name="Onboarding2" component={Onboarding2} options={{ tabBarShowLabel: false, cardOverlayEnabled: false, animation: 'none'}}/>
      <StackOnboarding.Screen name="Onboarding3" component={Onboarding3} options={{ tabBarShowLabel: false, cardOverlayEnabled: false, animation: 'none'}}/>
    </StackOnboarding.Navigator>
  )
}

export default function App() {
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('joined')
      if(value !== null) {
        await AsyncStorage.setItem('joined', 1)
        setObshow(true)
      }   
      else {
        setObshow(false)
      }
    } catch(e) {
    }
  }

  const [obshow, setObshow] = useState(true)
  getData()
  console.log(obshow)

  
  return (
    <NavigationContainer>
      <Stack.Navigator >
        {
          obshow &&
          <Stack.Screen name="StackOnboardingScreen" component={StackOnboardingScreen} options={{ headerShown: false }} />
        }
        <Stack.Screen name="StackHomeScreen" component={StackHomeScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
    // <Intro /> 
  );
}


