import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Card, Layout, Text} from '@ui-kitten/components';

const details = ({navigation}) => {
  return (
    <Layout style={styles.topContainer} level="1">
      <Card style={styles.card}>
        <Text category="h6">Card with Header</Text>
        <Text style={styles.detaile}>
          The Maldives, officially the Republic of Maldives, is a small country
          in South Asia, located in the Arabian Sea of the Indian Ocean. It lies
          southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from
          the Asian continent
        </Text>
        <View style={styles.footerContainer}>
          <Button
            style={styles.footerControl}
            appearance="outline"
            size="small"
            status="success">
            Done
          </Button>
          <Button
            style={styles.footerControl}
            appearance="ghost"
            size="small"
            status="success"
            onPress={() => navigation.goBack()}>
            Cancel
          </Button>
        </View>
      </Card>
    </Layout>
  );
};
const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  card: {
    flex: 1,
    margin: 10,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerControl: {
    marginHorizontal: 2,
  },
  detaile: {
    fontSize: 12,
    marginVertical: 2,
    color: '#747d8c',
    marginHorizontal: 2,
    marginVertical: 9,
  },
});
export default details;
