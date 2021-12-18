import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import axios from 'axios';
const profile = () => {
  const getdata = async () => {
    axios.get('http://192.168.0.107:5000/').then(res => {
      console.log(res.data, 'nooooooooooo undefined');
    });
  };
  getdata();
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category="h1">profile</Text>
    </Layout>
  );
};

export default profile;
