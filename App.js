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

const StackOnboarding = createMaterialTopTabNavigator();
const StackHome = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();


function StackHomeScreen() {
  return (
    <StackOnboarding.Navigator options={{ tabBarShowLabel: false}} tabBar={() => <View></View>} >
      <StackOnboarding.Screen name="Home" component={Home} options = {{tabBarShowLabel: false, cardOverlayEnabled: false, animation: 'none'}}/>
      <StackOnboarding.Screen name="SignIn" component={SignIn} options={{ tabBarShowLabel: false, cardOverlayEnabled: false, animation: 'none'}}/>
      <StackOnboarding.Screen name="SignUp" component={SignUp} options={{ tabBarShowLabel: false, cardOverlayEnabled: false, animation: 'none'}}/>
    </StackOnboarding.Navigator>
  )
}
function StackOnboardingScreen() {
  return (
    <StackHome.Navigator options={{ tabBarShowLabel: false}} tabBar={() => <View></View>} >
      <StackHome.Screen name="Onboarding1" component={Onboarding1} options = {{tabBarShowLabel: false, cardOverlayEnabled: false, animation: 'none'}}/>
      <StackHome.Screen name="Onboarding2" component={Onboarding2} options={{ tabBarShowLabel: false, cardOverlayEnabled: false, animation: 'none'}}/>
      <StackHome.Screen name="Onboarding3" component={Onboarding3} options={{ tabBarShowLabel: false, cardOverlayEnabled: false, animation: 'none'}}/>
    </StackHome.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="StackOnboardingScreen" component={StackOnboardingScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="StackHomeScreen" component={StackHomeScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
    // <Intro /> 
  );
}


