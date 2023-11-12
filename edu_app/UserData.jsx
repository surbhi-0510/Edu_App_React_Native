import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';

export const UserData = () => {
  const [myData, setMyData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getUserData = async () => {
    try {
      const response = await fetch(
        'https://thapatechnical.github.io/userapi/users.json',
      );
      const data = await response.json();
      // console.log(data)
      setMyData(data);
      setIsLoading(false);
    } catch (err) {
      console.log('error in getUserData: ', err);
    }
  };

  const showUserData = ({item}) => {
    return (
      <View style={styles.card}>
        <View style={styles.imgContainer}>
          <Image style={styles.imgStyle} source={{uri: item.image}} />
        </View>
        <View>
          <View style={styles.bioDataContainer}>
            <Text style={styles.bioData}>BioData</Text>
            <Text style={styles.idNumber}>
              {item.id < 10 ? `#0${item.id}` : `#${item.id}`}
            </Text>
          </View>
          <View style={styles.mainContainer}>
            <Text style={styles.myName}>Name: {item.name}</Text>
            <Text style={styles.myName}>
              Email:
              <Text style={[{textTransform: 'lowercase'}]}>{item.email}</Text>
            </Text>

            <Text style={styles.myName}>Mobile: {item.mobile}</Text>
          </View>
        </View>
      </View>
    );
  };

  useEffect(() => {
    getUserData();
  }, []);

  return isLoading ? (
    <View style={styles.activity}>
      <ActivityIndicator size={'large'} color={'#a18ce5'} />
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.mainHeader}>List of Students</Text>
      <FlatList
        horizontal
        keyExtractor={key => key.id}
        data={myData}
        renderItem={({item}) => showUserData({item})}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:"20%",
  },
  mainContainer: {
    width: '100%',
    minHeight: '100%',
    paddingVertical: 50,
    backgroundColor: '#ebedee',
  },
  card: {
    width: 250,
    height: 350,
    backgroundColor: '#fff',
    borderRadius: 5,
    margin: 20,
  },
  bioDataContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#353535',
    // paddingVertical: 10,
    padding: 10,
    fontFamily: 'fantasy',
  },
  idNumber: {
    fontSize: 20,
    color: 'rgba(255,255,255,0.5)',
    fontWeight: '400',
  },
  bioData: {
    fontSize: 30,
    color: '#fff',
    fontWeight: '400',
  },
  mainHeader: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: '600',
    color: '#a18ce5',
    paddingBottom:10,
  },
  imgContainer: {
    padding: 10,
  },
  imgStyle: {
    width: '100%',
    height: 180,
  },
  mainContainer: {
    padding: 10,
    backgroundColor: '#353535',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  myName: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 10,
    alignSelf: 'flex-start',
    textTransform: 'capitalize',
    fontFamily: 'fantasy',
    fontWeight: '400',
  },
  activity: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
