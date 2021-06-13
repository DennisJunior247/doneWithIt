import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import AccountNavigator from "./AccountNavigator"
import ListingEditScreen from '../screens/ListEditingScreen';
import FeedNavigator from "./Feednavigator"
import NewListingButton from "./NewListingButton"
import Icons from "react-native-vector-icons/MaterialCommunityIcons"


const Tab =  createBottomTabNavigator()

export default AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({color, size}) => <Icons name="home" color={color} size={size} />,
      }}
    />
    <Tab.Screen
      name="ListingEditScreen"
      component={ListingEditScreen}
      options={({navigation}) => ({
        tabBarButton: () => (
          <NewListingButton
            onPress={() => navigation.navigate('ListingEditScreen')}
          />
        ),
        tabBarIcon: ({color, size}) => <Icons color={color} size={size} />,
      })}
    />
    <Tab.Screen
      name="Account Settings"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({color, size}) => <Icons name="account" color={color} size={size} />,
      }}
    />
  </Tab.Navigator>
);