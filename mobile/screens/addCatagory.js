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
import AddCatagoryModal from '../components/modals/addCatagory';
const addCatagory = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);
  const BackIcon = props => <Icon {...props} name="arrow-back" />;
  const AddIcon = props => <Icon {...props} name="plus-outline" />;
  const renderBackAction = () => (
    <TopNavigationAction onPress={() => navigation.goBack()} icon={BackIcon} />
  );
  const renderAddAction = () => (
    <TopNavigationAction icon={AddIcon} onPress={() => setVisible(true)} />
  );
  return (
    <Layout style={styles.container}>
      <AddCatagoryModal visible={visible} setVisible={setVisible} />
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
