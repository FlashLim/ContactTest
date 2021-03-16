import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import ContactFlatList from './Components/ContactFlatList';
import {loadContacts} from './ContactSlice';

const data = require('../../../assets/staticData/data.json');
function ContactList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadContacts(data));
  }, [dispatch]);

  return (
    <View style={{flex: 1}}>
      <ContactFlatList />
    </View>
  );
}

export default ContactList;
