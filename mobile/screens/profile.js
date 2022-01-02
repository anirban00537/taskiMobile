import React, {useEffect} from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {StyleSheet, ScrollView} from 'react-native';
import TopProfile from '../components/profile/topProfile';
import ContributionChart from '../components/profile/contributionChart';

const profile = () => {
  return (
    <Layout style={styles.container}>
      <ScrollView>
        <TopProfile />
        <Text style={styles.AcitivityText}>Activity Chart</Text>
        <Layout style={styles.layoutTwo}>
          <ContributionChart />
        </Layout>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  layoutTwo: {},
  AcitivityText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
});

export default profile;
