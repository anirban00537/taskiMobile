import React, {useEffect} from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {StyleSheet, ScrollView} from 'react-native';
import TopProfile from '../components/profile/topProfile';
import ContributionChart from '../components/profile/contributionChart';
import TotalTasksChartSummary from '../components/profile/totalTasksChartSummary';

const profile = () => {
  return (
    <Layout style={styles.container}>
      <ScrollView>
        <TopProfile />

        <Layout style={styles.layoutTwo}>
          <Text style={styles.AcitivityText}>Activity Chart</Text>
          <ContributionChart />
          <Text style={styles.AcitivityText}>Total task chart</Text>
          <TotalTasksChartSummary />
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
