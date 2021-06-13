import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const RentPayment = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View></View>
      </View>
      <View></View>
    </View>
  );
};

export default RentPayment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  profile: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});
