import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {
  Layout,
  Icon,
  Avatar,
  MenuItem,
  OverflowMenu,
  Text,
  TopNavigation,
  TopNavigationAction,
  Button,
} from '@ui-kitten/components';
import Card from '../components/home/card';
import NavItem from '../components/home/NavItem';

const home = ({navigation}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  const [visible, setVisible] = React.useState(false);
  const onItemSelect = index => {
    setSelectedIndex(index);
    setVisible(false);
  };
  const renderToggleButton = () => (
    <Icon
      onPress={() => setVisible(true)}
      name="more-vertical-outline"
      width={24}
      height={24}
      fill={'#a4b0be'}
    />
  );
  return (
    <Layout style={styles.basecontainer}>
      <Layout style={styles.container}>
        <Layout style={styles.topContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <NavItem title="This a School titile" />
            <NavItem title="Workout" />
            <NavItem title="Gym" />
            <NavItem title="Kitchen" />
            <NavItem title="Scnaks" />
          </ScrollView>
        </Layout>
        <Layout style={styles.layoutTwo}>
          <OverflowMenu
            appearance="noDivider"
            anchor={renderToggleButton}
            visible={visible}
            selectedIndex={selectedIndex}
            onSelect={onItemSelect}
            onBackdropPress={() => setVisible(false)}>
            <MenuItem title="Users" />
            <MenuItem title="Orders" />
            <MenuItem title="Transactions" />
          </OverflowMenu>
        </Layout>
      </Layout>
      {/* card with header */}
      <ScrollView>
        <Card navigation={navigation} index={1} />
        <Card navigation={navigation} index={2} />
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  basecontainer: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    height: 60,
    marginBottom: 7,
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
    // backgroundColor: '#5352ed',
    minWidth: 50,
    borderRadius: 10,
    padding: 7,
    marginLeft: 10,
  },
  topItemActive: {
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis: '85%',
    // backgroundColor: '#5370ed',
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
