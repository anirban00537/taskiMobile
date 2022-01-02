import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const chartConfig = {
  backgroundGradientFrom: '#40407a',
  backgroundGradientTo: '#2c2c54',
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 5,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
  style: {
    borderRadius: 16,
  },
};

import {ContributionGraph} from 'react-native-chart-kit';

const commitsData = [
  {date: '2017-01-02', count: 1},
  {date: '2017-01-03', count: 2},
  {date: '2017-01-04', count: 3},
  {date: '2017-01-05', count: 4},
  {date: '2017-01-06', count: 5},
  {date: '2017-01-30', count: 2},
  {date: '2017-01-31', count: 3},
  {date: '2017-03-01', count: 2},
  {date: '2017-04-02', count: 4},
  {date: '2017-03-05', count: 2},
  {date: '2017-02-30', count: 4},
];
const ContributionChart = () => {
  return (
    <View style={styles.container}>
      <ContributionGraph
        values={commitsData}
        endDate={new Date('2017-04-01')}
        numDays={105}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        style={styles.chart}
      />
    </View>
  );
};

export default ContributionChart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chart: {},
});
