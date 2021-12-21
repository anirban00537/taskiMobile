import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Card, Layout, Text} from '@ui-kitten/components';

const details = () => {
  return (
    <Layout style={styles.topContainer} level="1">
      <Card style={styles.card}>
        <Text>
          The Maldives, officially the Republic of Maldives, is a small country
          in South Asia, located in the Arabian Sea of the Indian Ocean. It lies
          southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from
          the Asian continent
        </Text>
        <View style={styles.footerContainer}>
          <Button style={styles.footerControl} size="small" status="basic">
            CANCEL
          </Button>
          <Button style={styles.footerControl} size="small">
            ACCEPT
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
  },
  card: {
    flex: 1,
    margin: 2,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerControl: {
    marginHorizontal: 2,
  },
});
export default details;
