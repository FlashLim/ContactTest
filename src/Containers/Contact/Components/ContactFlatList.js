import React from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {refreshContacts} from '../ContactSlice';
import ContactFlatListItem from './ContactFlatListItem';

const data = require('../../../../assets/staticData/data.json');

function ContactFlatList() {
  const contactData = useSelector(state => state.contact.contacts);
  const dispatch = useDispatch();

  return (
    <FlatList
      data={contactData}
      renderItem={item => <ContactFlatListItem {...item} />}
      key={item => item.id}
      onRefresh={() => dispatch(refreshContacts(data))}
      refreshing={false}
    />
  );
}

export default React.memo(ContactFlatList);
