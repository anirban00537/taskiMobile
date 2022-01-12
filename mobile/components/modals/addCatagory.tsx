import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Card, Modal, Input, Text, Layout} from '@ui-kitten/components';

type Props = {
  visible: boolean;
  setVisible: any;
};

const AddCatagoryModal = ({visible, setVisible}: Props) => {
  return (
    <Layout style={styles.container}>
      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}>
        <Card style={styles.card}>
          <Input placeholder="Catagory Name" style={styles.input} />
          <Button onPress={() => setVisible(false)}>Add a catagory</Button>
        </Card>
      </Modal>
    </Layout>
  );
};
export default AddCatagoryModal;
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    maxWidth: 400,
  },
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    borderRadius: 8,
    maxWidth: 400,
  },
  input: {
    marginBottom: 16,
    width: 300,
    maxWidth: 400,
  },
});
