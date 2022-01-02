import React, {useEffect} from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';
import TopProfile from '../components/profile/topProfile';
import axios from 'axios';
const profile = () => {
  const getdata = async () => {
    axios.get('http://192.168.0.105:5000/').then(res => {
      console.log(res.data, 'nooooooooooo undefined');
    });
  };

  useEffect(() => {
    getdata();
  }, []);
  return (
    <Layout style={styles.container}>
      <TopProfile />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default profile;
