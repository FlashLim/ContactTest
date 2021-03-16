import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Avatar from './Avatar';

function ContactFlatListItem(props) {
  const item = props.item;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ContactDetail', {...item, index: props.index})
      }>
      <View style={styles.container}>
        <Avatar styles={{ marginRight: 10 }} />
        <Text style={styles.text}>{`${item.firstName} ${item.lastName}`}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default React.memo(ContactFlatListItem);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  text: {
    flex: 1,
  },
});
