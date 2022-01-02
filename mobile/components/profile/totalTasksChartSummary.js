import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {PieChart} from 'react-native-chart-kit';
const screenWidth = Dimensions.get('window').width;
const chartConfig = {
  backgroundGradientFrom: '#40407a',
  backgroundGradientTo: '#2c2c54',
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
};
const data = [
  {
    name: 'Seoul',
    population: 21500000,
    color: '#3742fa',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Toronto',
    population: 2800000,
    color: '#5352ed',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
];
const totalTasksChartSummary = () => {
  return (
    <View style={styles.container}>
      <PieChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        accessor={'population'}
        backgroundColor={'transparent'}
        paddingLeft={'15'}
        hasLegend={true}
        legendOffset={-10}
        style={styles.chart}
      />
    </View>
  );
};

export default totalTasksChartSummary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chart: {
    marginTop: 10,
    marginBottom: 10,
  },
});
