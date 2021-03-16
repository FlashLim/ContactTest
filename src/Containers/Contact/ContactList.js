import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

function ContactList() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={() => navigation.navigate('ContactDetail')}>
        <Text>CLICK MEEEEE</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ContactList;
