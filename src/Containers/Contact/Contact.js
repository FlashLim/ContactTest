import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import colors from '../../Utilities/Colors';
import ContactFlatList from './Components/ContactFlatList';
import {loadContacts} from './ContactSlice';

const data = require('../../../assets/staticData/data.json');
function ContactList() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(loadContacts(data));
  }, [dispatch]);

  useEffect(() => {
    const addButton = _props => (
      <TouchableOpacity {..._props} style={{ paddingHorizontal: 10 }} onPress={() => navigation.navigate('ContactDetail')}>
        <Text style={{color: colors.Orange, fontSize: 18}}>Add</Text>
      </TouchableOpacity>
    );

    navigation.setOptions({
      headerRight: addButton,
    });
  }, [dispatch, navigation]);

  return (
    <View style={{flex: 1}}>
      <ContactFlatList />
    </View>
  );
}

export default ContactList;
