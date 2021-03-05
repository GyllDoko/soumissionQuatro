import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import OnBoardingScreen from "./Components/OnBordind";
import HomeScreen from "./Components/home";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from "./Components/profile";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ShopScreen from "./Components/shop";
import DetailPage from "./Components/detail";




const Tab = createBottomTabNavigator();

const OnboardStack = createStackNavigator();

function OnboardStackScreen(){
    return(
        <OnboardStack.Navigator headerMode="none">
            <OnboardStack.Screen name='Onboarding' component={OnBoardingScreen} />
            <OnboardStack.Screen name='Home' component={HomeScreen} />
            <OnboardStack.Screen name='detail' component={DetailPage}/>
        </OnboardStack.Navigator>
    )
}

export default function App() {
  return (
      <NavigationContainer>

          <Tab.Navigator
              initialRouteName="Onboarding"
              tabBarOptions={{
                  activeTintColor: '#1e62e9',
              }}
          >
              <Tab.Screen
                  name="Onboarding"
                  component={OnBoardingScreen}
                  options={{
                      tabBarLabel: 'Onboard',

                  }}
              />
              <Tab.Screen
                  name="Home"
                  component={HomeScreen}
                  options={{
                      tabBarLabel: 'Home',
                      tabBarIcon: ({ color, size }) => (
                          <MaterialCommunityIcons name="home" color={color} size={size} />
                      ),
                  }}
              />
              <Tab.Screen
                  name="Profile"
                  component={ProfileScreen}
                  options={{
                      tabBarLabel: 'Profile',
                      tabBarIcon: ({ color, size }) => (
                          <MaterialCommunityIcons name="account" color={color} size={size} />
                      ),
                  }}
              />
              <Tab.Screen
                  name="Shop"
                  component={ShopScreen}
                  options={{
                      tabBarLabel: 'Profile',
                      tabBarIcon: ({ color, size }) => (
                          <MaterialCommunityIcons name="cart" color={color} size={size} />
                      ),
                  }}
              />

          </Tab.Navigator>
      </NavigationContainer>

  );
}

