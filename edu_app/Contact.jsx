import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from 'react-native-check-box';

export const Contact = ({navigation}) => {
  const [agree, setAgree] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

  const submitHandler = () => {
    if (name == '' && email == '' && mobile == '' && message == '') {
      Alert.alert('Please fill all the fields...');
    } else {
      Alert.alert(
        `Thank you ${name} for contacting us..`,
        'We will reach you as soon as possible :D',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      );
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Level Up your Knowledge</Text>
      <Text style={styles.description}>
        You can reach use anytime through helpdesk@anytime.com
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Username:</Text>
        <TextInput
          placeholder="Eg. abcd"
          style={styles.inputStyle}
          value={name}
          onChangeText={text => setName(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Email:</Text>
        <TextInput
          placeholder="Eg. abc@def.com"
          style={styles.inputStyle}
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Mobile:</Text>
        <TextInput
          placeholder="Eg. 1234567890"
          style={styles.inputStyle}
          value={mobile}
          onChangeText={text => setMobile(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>What do you want to know?</Text>
        <TextInput
          placeholder="Tell us about yourself"
          style={[styles.inputStyle, styles.multiLineStyle]}
          value={message}
          onChangeText={text => setMessage(text)}
          numberOfLines={5}
          multiline={true}
        />
      </View>

      {/* checkbox */}
      <View style={styles.termsContainer}>
        <CheckBox
          isChecked={agree}
          onClick={() => setAgree(!agree)}
          checkBoxColor={agree ? '#E362CE' : 'grey'}
        />
        <Text>I have read and agreed all the Terms and Conditions*</Text>
      </View>

      {/* submitButton */}
      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {
            backgroundColor: agree ? '#E362CE' : 'grey',
          },
        ]}
        disabled={!agree}
        onPress={() => submitHandler()}>
        <Text style={styles.buttonText}>Contact Us</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  mainHeader: {
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 15,
    fontWeight: '500',
    color: '#344055',
    textTransform: 'capitalize',
    lineHeight: 30,
    fontFamily: 'serif',
  },
  description: {
    fontSize: 20,
    color: '#7d7d7d',
    paddingBottom: 20,
    fontFamily: 'serif',
    lineHeight: 25,
  },
  inputContainer: {
    marginTop: 20,
  },
  labels: {},
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 3,
  },
  multiLineStyle: {
    paddingVertical: 4,
  },
  buttonStyle: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  buttonText: {
    color: '#eee',
  },
  termsContainer: {
    flexDirection: 'row',
    gap: 5,
    marginTop: 15,
  },
});
