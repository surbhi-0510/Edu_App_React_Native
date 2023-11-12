import {
  StyleSheet,
  Linking,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export const About = () => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}>Abc Def Ghijk</Text>
      <Text style={styles.paraStyle}>I am a MERN Stack Developer</Text>

      <View>
        <Image
          style={styles.imgStyle}
          source={{
            uri: 'https://cdn1.iconfinder.com/data/icons/mix-color-3/502/Untitled-7-512.png',
            // uri: 'https://images.pexel.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          }}
        />
      </View>

      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}>About Me</Text>
        <Text style={[styles.paraStyle, styles.aboutPara]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </View>

      <Text style={styles.mainHead}>Follow me on social network</Text>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL('https://www.instagram.com/')}>
          <Image
            style={styles.iconStyle}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png',
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL('https://www.youtube.com/')}>
          <Image
            style={styles.iconStyle}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/187/187210.png',
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL('https://discord.com/')}>
          <Image
            style={styles.iconStyle}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/906/906361.png',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutContainer: {
    alignItems: 'center',
  },
  mainHeader: {
    fontSize: 20,
    marginTop: 50,
    marginBottom: 10,
    fontWeight: '500',
    color: '#344055',
    textTransform: 'uppercase',
    lineHeight: 30,
    fontFamily: 'serif',
  },
  paraStyle: {
    color: '#7d7d7d',
    paddingBottom: 30,
    fontSize: 18,
  },
  imgStyle: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  aboutLayout: {
    backgroundColor: '#ab7898',
    paddingHorizontal: 30,
    marginVertical: 30,
    // borderWidth: 2,
  },
  aboutSubHeader: {
    fontSize: 18,
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: '500',
    marginVertical: 15,
    fontFamily: 'fantasy',
    lineHeight: 30,
    alignSelf: 'center',
  },
  aboutPara: {
    color: '#fff',
  },
  mainHead: {
    paddingBottom: 30,
    fontSize: 16,
    color: 'rgba(47,127,222,100)',
  },
  menuContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonStyle: {},
  iconStyle: {
    width: '100%',
    height: 50,
    aspectRatio: 1,
  },
});
