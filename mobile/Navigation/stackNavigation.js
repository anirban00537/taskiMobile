import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './tabNavigation';
import Details from '../screens/details';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <Icon
                name="person-outline"
                width={24}
                height={24}
                fill={focused ? '#5352ed' : '#000'}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
