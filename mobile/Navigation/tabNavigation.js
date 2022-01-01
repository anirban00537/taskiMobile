import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  Button,
} from '@ui-kitten/components';

import Home from '../screens/home';
import Profile from '../screens/profile';
import Calender from '../screens/calender';

const {Navigator, Screen} = createBottomTabNavigator();

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen
      name="Users"
      component={Home}
      options={{
        headerShown: false,
      }}
    />
    <Screen
      name="Calender"
      component={Calender}
      options={{
        headerShown: false,
      }}
    />
    <Screen
      name="Orders"
      component={Profile}
      options={{
        headerShown: false,
      }}
    />
  </Navigator>
);

const BottomTabBar = ({navigation, state}) => {
  const onSelect = index => {
    navigation.navigate(state.routeNames[index]);
  };
  // #a4b0be tintColor activeColor
  const selectedIndex = state.index;

  return (
    <BottomNavigation
      selectedIndex={selectedIndex}
      onSelect={onSelect}
      appearance="noIndicator"
      indicatorAppearance="noIndicator">
      <BottomNavigationTab
        title="Home"
        icon={props => <Icon {...props} name="home-outline" />}
      />
      <BottomNavigationTab
        title="Calender"
        icon={props => <Icon {...props} name="calendar-outline" />}
      />
      <BottomNavigationTab
        title="Profile"
        icon={props => <Icon {...props} name="person-outline" />}
      />
    </BottomNavigation>
  );
};

export default TabNavigator;
