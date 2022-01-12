import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';

const topProfile = () => {
  return (
    <Layout>
      <View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            }}
          />
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.email}>anirban@gmail.com</Text>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
  },
  infoSection: {
    marginTop: 20,
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  email: {
    fontSize: 16,
    color: '#fff',
  },
});

export default topProfile;
