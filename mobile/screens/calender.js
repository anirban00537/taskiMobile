import React from 'react';
import {Layout, Text, Calendar} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';
const calender = () => {
  const [date, setDate] = React.useState(new Date());

  return (
    <Layout style={styles.container}>
      <Calendar
        date={date}
        onSelect={nextDate => setDate(nextDate)}
        style={styles.calender}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  calender: {
    width: '100%',
    height: '100%',
  },
});

export default calender;
