import React from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../../../Utilities/Colors';

function Avatar(props) {
  return <View style={[styles.avatar, {...props.styles}]} />;
}

export default Avatar;

const styles = StyleSheet.create({
  avatar: {
    height: 50,
    width: 50,
    backgroundColor: Colors.Orange,
    borderRadius: 25,
  },
});
