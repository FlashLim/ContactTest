import React, {useEffect, useRef, useState} from 'react';
import {
  Keyboard,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import colors from '../../Utilities/Colors';
import Avatar from './Components/Avatar';
import ContactTextInput from './Components/ContactTextInput';
import Separator from '../../Components/Separator';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {updateContact} from './ContactSlice';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const ContactDetail = props => {
  const item = props?.route?.params;

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const avoidViewRef = useRef(null);

  const [contactState, setContactState] = useState({
    email: null,
    firstName: null,
    id: null,
    lastName: null,
    phone: null,
  });

  useEffect(() => {
    const validation = contactState.firstName && contactState.lastName;

    const cancelButton = _props => (
      <TouchableOpacity {..._props} style={{paddingHorizontal: 10}}>
        <Text style={{color: colors.Orange, fontSize: 18}}>Back</Text>
      </TouchableOpacity>
    );

    const saveButton = () => (
      <TouchableOpacity
        disabled={!validation}
        style={{paddingHorizontal: 10}}
        onPress={() => {
          dispatch(updateContact({...contactState, index: item?.index}));
          navigation.goBack(null);
        }}>
        <Text
          style={{
            color: validation ? colors.Orange : colors.DUSTY_GRAY,
            fontSize: 18,
          }}>
          Save
        </Text>
      </TouchableOpacity>
    );
    navigation.setOptions({
      headerLeft: _props => cancelButton(_props),
      headerRight: saveButton,
    });
  }, [contactState, dispatch, item?.index, navigation]);

  useEffect(() => {
    if (item) {
      const parseContact = item
        ? {
            email: item.email,
            firstName: item.firstName,
            id: item.id,
            lastName: item.lastName,
            phone: item.phone,
          }
        : {
            email: null,
            firstName: null,
            id: null,
            lastName: null,
            phone: null,
          };

      setContactState(parseContact);
    }
  }, [item]);

  function renderHeader(text) {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{text}</Text>
      </View>
    );
  }

  return (
    <KeyboardAwareScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Avatar styles={styles.avatar} />
          {renderHeader('Main Information')}
          <View style={styles.textInputContainer}>
            <ContactTextInput
              ref={firstNameRef}
              title={'First Name'}
              value={contactState.firstName}
              onChangeText={text =>
                setContactState(state => ({...state, firstName: text}))
              }
              onSubmitEditing={() => lastNameRef.current.focus()}
              returnKeyType={'next'}
            />
            <Separator />
            <ContactTextInput
              ref={lastNameRef}
              title={'Last Name'}
              value={contactState.lastName}
              onChangeText={text =>
                setContactState(state => ({...state, lastName: text}))
              }
              onSubmitEditing={() => emailRef?.current?.focus()}
              returnKeyType={'next'}
            />
          </View>
          {renderHeader('Sub Information')}
          <View style={styles.textInputContainer}>
            <ContactTextInput
              ref={emailRef}
              title={'Email'}
              value={contactState.email}
              onChangeText={text =>
                setContactState(state => ({...state, email: text}))
              }
              onSubmitEditing={() => phoneRef?.current?.focus()}
              returnKeyType={'next'}
            />
            <Separator />
            <ContactTextInput
              ref={phoneRef}
              title={'Phone'}
              value={contactState.phone}
              onChangeText={text =>
                setContactState(state => ({...state, phone: text}))
              }
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

export default ContactDetail;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.MERCURY,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  avatar: {
    height: 110,
    width: 110,
    borderRadius: 55,
    marginVertical: 20,
    alignSelf: 'center',
  },
  textInputContainer: {
    paddingHorizontal: 10,
    flex: 1,
  },
});
