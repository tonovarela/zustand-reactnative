import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/home/HomeSceen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { ProfileScreen } from '../screens/profile/Profile.Screen';


export const BottomTabNavigator = () => {
    
        const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={
            {
                //headerShown:false,
                tabBarShowLabel: true,                
                tabBarStyle: {
                    backgroundColor: '#000000',
                },
                tabBarIconStyle: {
                    fontSize: 20,
                    color: '#fff',
                },
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: '#fff',
            }
        }>
            <Tab.Screen name="HomeScreen"  component={HomeScreen} />
            <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
            <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
        </Tab.Navigator>
    )
}