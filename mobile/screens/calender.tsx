import React from 'react';
import {Layout, Text, Calendar} from '@ui-kitten/components';

import {StyleSheet, ScrollView} from 'react-native';
import Card from '../components/home/card';
type Props = {
  navigation: any;
};
const calender = ({navigation}: Props) => {
  const [date, setDate] = React.useState(new Date());

  return (
    <Layout style={styles.container}>
      <Layout style={styles.topContainer}>
        <Calendar
          date={date}
          onSelect={nextDate => setDate(nextDate)}
          style={styles.calender}
        />
      </Layout>
      <ScrollView>
        {/* title  */}
        <Text style={styles.title}>Today</Text>
        <Card navigation={navigation} index={1} />
        <Card navigation={navigation} index={2} />
        <Card navigation={navigation} index={3} />
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#fff',
    height: '100%',
  },
  topContainer: {
    // backgroundColor: '#fff',
    width: '100%',
    height: '60%',
  },
  layoutTwo: {
    // backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  calender: {
    flex: 1,
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 20,
  },
});

export default calender;
