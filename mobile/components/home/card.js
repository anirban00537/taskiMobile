import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon, Card, Text} from '@ui-kitten/components';

const card = ({navigation, index}) => {
  const textJson = {
    title: 'Прочитано',
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
    <Card style={styles.card} onPress={() => navigation.navigate('Details')}>
      <View style={styles.cardContainerRow}>
        <View style={styles.cardContainerColumn}>
          <Text>{textJson.title}</Text>
          <Text style={styles.cardListDetailsText}>{renderTenWords()}</Text>
        </View>
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
  card: {
    marginHorizontal: 12,
    marginVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    shadowColor: '#a4b0be',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardContainerColumn: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardListDetailsText: {
    fontSize: 12,
    color: '#a4b0be',
    // only one line of text
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    width: '100%',
  },
});
