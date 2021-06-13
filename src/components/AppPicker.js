import React, {useState} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  TouchableWithoutFeedback,
  Modal,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import defaultStyles from '../config/styles';
import AppText from './AppText';
import Screen from '../components/Screen';
import PickerItem from './PickerItem';

const AppPicker = ({
  icon,
  width = '100%',
  placeholder,
  onSelectItem,
  items,
  selectedItem,
  numColumns = 3,
  PickerItemCompontent = PickerItem,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(true);
        }}>
        <View style={[styles.container, {width}]}>
          {Icon && (
            <Icon
              name={icon}
              size={20}
              style={styles.icon}
              color={defaultStyles.colors.medium}
            />
          )}
          <View style={styles.text}>
            <AppText>{selectedItem ? selectedItem.label : placeholder}</AppText>
          </View>
          <Icon
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button
            title="close"
            onPress={() => {
              setModalVisible(false);
            }}
          />
          <FlatList
            data={items}
            numColumns={numColumns}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({item}) => (
              <PickerItemCompontent
                item={item}
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    flexDirection: 'row',
    backgroundColor: defaultStyles.colors.light,
    padding: 10,
    // width: '100%',
    marginVertical: 10,
  },
  icon: {
    marginRight: 13,
    alignSelf: 'center',
  },
  text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default AppPicker;
