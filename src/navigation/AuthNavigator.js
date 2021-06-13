import React from "react"
import {createStackNavigator} from '@react-navigation/stack';
import Theme from "./navigationTheme"

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();

 export default  AuthNavigation = ()=>(
<Stack.Navigator>
  <Stack.Screen
    name="WelcomeScreen"
    component={WelcomeScreen}
    options={{headerShown: false}}
  />
  <Stack.Screen name="LoginScreen" component={LoginScreen} />
  <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
</Stack.Navigator>
 )