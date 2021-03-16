import React from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../../../Utilities/Colors';

function Avatar() {
  return <View style={styles.avatar} />;
}

export default React.memo(Avatar);

const styles = StyleSheet.create({
  avatar: {
    height: 50,
    width: 50,
    backgroundColor: Colors.Orange,
    borderRadius: 25,
    marginRight: 10,
  },
});
