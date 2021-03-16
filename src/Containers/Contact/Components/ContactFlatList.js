import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import ContactFlatListItem from './ContactFlatListItem';

function ContactFlatList() {
  const contactData = useSelector(state => state.contact.contacts);

  return (
    <FlatList
      data={contactData}
      renderItem={item => <ContactFlatListItem {...item} />}
      key={item => item.id}
    />
  );
}

export default React.memo(ContactFlatList);
