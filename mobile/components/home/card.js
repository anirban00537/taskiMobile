import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Icon, Card, Text} from '@ui-kitten/components';

const card = ({navigation, index}) => {
  const textJson = {
    title: 'This is a title',
    description:
      'loream ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.',
  };

  const renderTenWords = () => {
    const words = textJson.description.split(' ');
    const words40 = words.slice(0, 10);
    const words40String = words40.join(' ');
    return words40String;
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Details')}>
      <View style={styles.cardContainerRow}>
        <View style={styles.cardContainerColumn}>
          <Text>{textJson.title}</Text>
          <Text style={styles.cardListDetailsText}>{renderTenWords()}</Text>

          <View style={styles.cardListDetailsTime}>
            <Icon name="clock-outline" width={10} height={10} fill="#5352ed" />
            <Text style={styles.cardListDetailsTimeText}> 12:00</Text>
          </View>
        </View>
        <View>
          <Icon
            name="arrow-ios-forward-outline"
            width={24}
            height={24}
            fill={'#a4b0be '}
          />
        </View>
      </View>
    </TouchableOpacity>
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
  },
  card: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#2E3A59',
  },
  cardContainerColumn: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardListDetailsText: {
    fontSize: 12,
    color: '#a4b0be',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    width: '100%',
  },
  cardListDetailsTime: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  cardListDetailsTimeText: {
    color: '#5352ed',
    fontSize: 12,
  },
});
