import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View } from 'react-native';

import Onboarding1 from './screen/Onboarding/Onboarding1';
import Onboarding2 from './screen/Onboarding/Onboarding2';
import Onboarding3 from './screen/Onboarding/Onboarding3';
import Home from './screen/Home';

const StackOnboarding = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

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
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="StackOnboardingScreen" component={StackOnboardingScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


