import {Icon, Button} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type Props = {
  title: string;
};

const NavItem = ({title}: Props) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Icon
        name="grid-outline"
        width={14}
        height={14}
        fill={'#a4b0be'}
        style={styles.icon}
      />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
    borderRadius: 10,
    padding: 2,
  },
  pulseIcon: {
    width: 14,
    height: 14,
  },
  text: {
    fontSize: 12,
    color: '#a4b0be',
  },
  icon: {
    marginRight: 5,
  },
});

export default NavItem;
