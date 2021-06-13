import React from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, StyleSheet, Image, TouchableHighlight} from 'react-native';
import AppText from './AppText';

import colors from '../config/colors';

function ListItem({
  renderRightActions,
  IconComponent,
  title,
  onPress,
  subTitle,
  image,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailContainer}>
            <AppText numberOfLines={1} style={styles.title}>
              {title}
            </AppText>
            {subTitle && (
              <AppText numberOfLines={2} style={styles.subTitle}>
                {subTitle}
              </AppText>
            )}
          </View>
          <Icon color={colors.medium} name="chevron-right" />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems:"center",
    padding: 15,
    // justifyContent: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,

  },
  subTitle: {
    color: colors.medium,
  },
  detailContainer: {
    flex:1,
    marginLeft: 10,
    justifyContent:"center"
  },
  title: {
    fontWeight: '500',
  },
});

export default ListItem;
