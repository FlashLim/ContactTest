import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

function ContactDetail(props) {
  const item = props?.route?.params;

  const contact = {
    email: item.email,
    firstName: item.firstName,
    id: item.id,
    lastName: item.lastName,
    phone: item.phone,
  };

  return (
    <TouchableOpacity>
      <Text>CLICK BACK</Text>
    </TouchableOpacity>
  );
}

export default ContactDetail;
