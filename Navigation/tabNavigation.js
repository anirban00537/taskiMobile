import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Profile from '../screens/profile';
import Calender from '../screens/calender';
import {Button, Icon} from '@ui-kitten/components';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    //tab bar lebel null
    <Tab.Navigator
      tabBarOptions={{
        tabBarLabel: null,
        activeTintColor: '#fff',
        inactiveTintColor: '#fff',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              name="home-outline"
              width={24}
              height={24}
              fill={focused ? '#f00' : '#000'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Calender"
        component={Calender}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              name="calendar-outline"
              width={24}
              height={24}
              fill={focused ? '#f00' : '#000'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              name="person-outline"
              width={24}
              height={24}
              fill={focused ? '#f00' : '#000'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
