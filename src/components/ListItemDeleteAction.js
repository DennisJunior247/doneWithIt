import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../config/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const ListItemDeleteAction = ({onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon name="delete" color={colors.white} size={30} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListItemDeleteAction;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
