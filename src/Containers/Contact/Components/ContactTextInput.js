import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import colors from '../../../Utilities/Colors';

const ContactTextInput = React.forwardRef((props, ref) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <TextInput style={styles.input} {...props} ref={ref} />
    </View>
  );
});

export default React.memo(ContactTextInput);

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    width: 100,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  input: {
    flex: 1,
    borderColor: colors.DUSTY_GRAY,
    borderWidth: StyleSheet.hairlineWidth,
    marginLeft: 10,
    height: 45,
    borderRadius: 5,
    fontSize: 18,
    paddingHorizontal: 10,
  },
});
