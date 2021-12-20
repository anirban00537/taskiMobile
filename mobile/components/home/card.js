import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon, Card, Text} from '@ui-kitten/components';

const card = ({navigation}) => {
  return (
    <Card onPress={() => navigation.navigate('Details')}>
      <View style={styles.cardContainerRow}>
        <Text>With Header</Text>
        <View>
          <Icon
            name="arrow-ios-forward-outline"
            width={24}
            height={24}
            fill={'#a4b0be'}
          />
        </View>
      </View>
    </Card>
  );
};

export default card;

const styles = StyleSheet.create({
  cardContainerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardBtn: {
    margin: 8,
    backgroundColor: '#7bed9f',
    borderColor: '#7bed9f',
  },
});
