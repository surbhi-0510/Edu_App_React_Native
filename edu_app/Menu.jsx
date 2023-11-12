import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export const Menu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.menuContainer}>
      {/* Course */}
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Course')}>
        {/* <Text>Course</Text> */}
        <Image
          style={styles.iconStyle}
          source={{
            uri: 'https://img.icons8.com/stickers/90/000000/training.png',
          }}
        />
      </TouchableOpacity>

      {/* Student */}
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Student')}>
        <Image
          style={styles.iconStyle}
          source={{
            uri: 'https://img.icons8.com/stickers/100/000000/conference.png',
          }}
        />
      </TouchableOpacity>

      {/* About */}
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('About Us')}>
        <Image
          style={styles.iconStyle}
          source={{
            uri: 'https://img.icons8.com/stickers/100/000000/about.png',
          }}
        />
      </TouchableOpacity>

      {/* Contact */}
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Contact')}>
        <Image
          style={styles.iconStyle}
          source={{
            uri: 'https://img.icons8.com/stickers/100/000000/phone-office.png',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textStlye: {
    textTransform: 'uppercase',
    marginBottom: 50,
  },
  iconStyle: {
    width: '100%',
    height: 50,
    aspectRatio: 1,
  },
});
