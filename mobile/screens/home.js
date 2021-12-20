import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Layout, Text, Icon} from '@ui-kitten/components';
import Card from '../components/home/card';
const home = ({navigation}) => {
  return (
    <>
      <Layout style={styles.container}>
        <Layout style={styles.topContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.topItemActive}>
              <Text style={styles.tapText}>Reading</Text>
            </View>
            <View style={styles.topItem}>
              <Text style={styles.tapText}>School and art</Text>
            </View>
            <View style={styles.topItem}>
              <Text style={styles.tapText}>Pornog</Text>
            </View>
          </ScrollView>
        </Layout>
        <Layout style={styles.layoutTwo}>
          <Icon name="settings" width={24} height={24} fill={'#a4b0be'} />
        </Layout>
      </Layout>
      {/* card with header */}
      <ScrollView>
        <Card navigation={navigation} />
        <Card navigation={navigation} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
  },
  topContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexBasis: '85%',
    flexDirection: 'row',
  },
  layoutTwo: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flexBasis: '15%',
  },
  topItem: {
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis: '85%',
    backgroundColor: '#7bed9f',
    minWidth: 50,
    borderRadius: 10,
    padding: 7,
    marginLeft: 10,
  },
  topItemActive: {
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis: '85%',
    backgroundColor: '#2ed573',
    minWidth: 50,
    borderRadius: 10,
    padding: 7,
    marginLeft: 10,
  },
  tapText: {
    color: '#fff',
    fontSize: 12,
  },
});
export default home;
