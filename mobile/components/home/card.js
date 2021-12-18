import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Card, Layout, Text} from '@ui-kitten/components';

const card = () => {
  return (
    <Card style={styles.card}>
      <Text>With Header</Text>
    </Card>
  );
};

export default card;

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    margin: 8,
  },
});
