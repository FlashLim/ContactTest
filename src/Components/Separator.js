import React from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../Utilities/Colors';

function Separator() {
  return (
    <View
      style={{
        height: StyleSheet.hairlineWidth,
        width: '100%',
        backgroundColor: colors.DUSTY_GRAY,
      }}
    />
  );
}

export default React.memo(Separator);
