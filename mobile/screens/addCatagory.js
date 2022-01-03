import React from 'react';

import {
  Icon,
  Layout,
  List,
  ListItem,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import {StyleSheet, Text} from 'react-native';
const addCatagory = ({navigation}) => {
  const BackIcon = props => <Icon {...props} name="arrow-back" />;
  const AddIcon = props => <Icon {...props} name="plus-outline" />;
  const renderBackAction = () => (
    <TopNavigationAction onPress={() => navigation.goBack()} icon={BackIcon} />
  );
  const renderAddAction = () => <TopNavigationAction icon={AddIcon} />;
  return (
    <Layout style={styles.container}>
      <TopNavigation
        alignment="center"
        title="Add Catagory"
        subtitle="Add and manage your catagories"
        accessoryLeft={renderBackAction}
        accessoryRight={renderAddAction}
      />
      <List
        style={styles.list}
        data={[{title: 'Add Catagory'}, {title: 'All Catagory'}]}
        renderItem={({item}) => (
          <ListItem
            title={item.title}
            onPress={() => alert(`${item.title} pressed`)}
          />
        )}
      />
    </Layout>
  );
};

export default addCatagory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    marginTop: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
