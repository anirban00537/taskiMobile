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
        dateStyle={styles.date}
        textStyle={styles.text}
        selectedDateStyle={styles.selectedDate}
        selectedTextStyle={styles.selectedText}
        disabledDateStyle={styles.disabledDate}
        disabledTextStyle={styles.disabledText}
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
  date: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  selectedDate: {
    backgroundColor: '#008080',
  },
  selectedText: {
    color: '#fff',
  },
  disabledDate: {
    backgroundColor: '#fff',
  },
  disabledText: {
    color: '#000',
  },
});

export default calender;
