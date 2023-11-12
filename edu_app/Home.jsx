import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Menu} from './Menu';

export const Home = ({channelName}) => {
  const description =
    'Lorem ipsum dolor sit amet, cons sed d et dolorua. Ut enim ad minim veniam, quis  ut aliquip ex ea commodo consequat.';

  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image
          style={styles.headerImage}
          source={require('../assets/study1.jpeg')}
          // resizeMode="contain"
        />
        <Text style={styles.mainHeader}>Welcome to</Text>
        <Text
          style={[
            styles.mainHeader,
            {
              fontSize: 33,
              color: '#4c5dab',
              marginTop: 0,
            },
          ]}>
          {channelName}
        </Text>
        <Text style={styles.paraStyle}>{description}</Text>
      </View>

      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu />
        <View
          style={[
            styles.lineStyle,
            {
              marginVertical: 20,
            },
          ]}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    diplay: 'flex',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    // textAlign: 'center',
  },
  homeTop: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  headerImage: {
    height: undefined,
    width: '100%',
    aspectRatio: 1.4,
    display: 'flex',
    // alignItems: 'stretch',
    marginTop: 50,
    borderRadius: 20,
    marginBottom: 30,
  },
  mainHeader: {
    fontSize: 30,
    color: '#344055',
    textTransform: 'uppercase',
    fontFamily: 'serif',
  },
  paraStyle: {
    textAlign: 'left',
    fontSize: 18,
    color: '#7d7d7d',
    marginTop: 30,
    paddingBottom: 90,
    lineHeight: 26,
  },
  lineStyle: {
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: 'grey',
  },
});
