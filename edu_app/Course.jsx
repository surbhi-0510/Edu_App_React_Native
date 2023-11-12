import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Courses} from '../src/coursesApi';
// import {CourseDetails} from './CourseDetails';

export const Course = ({navigation}) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalData, setModalData] = useState([]);

  useEffect(() => {
    console.log(modalData);
  }, [modalData]);

  const courseCard = ({item}) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.courseContainer}>
          <View>
            <Image
              style={styles.cardImage}
              // source={require(`../assets/${item.image}`)}
              source={item.image}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.mainHeader}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                setModalData(item);
                return setModalVisibility(!modalVisibility);
              }}
              style={styles.buttonStyle}>
              <Text style={styles.buttonText}>Course details</Text>
            </TouchableOpacity>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisibility}
            onRequestClose={() => {
              Alert.alert(
                'Buy Course by asking for Purchasing Details in Contact Section.',
              );
              setModalVisibility(!modalVisibility);
            }}>
            <View style={styles.modalContainer}>
              <TouchableOpacity
                onPress={() => {
                  Alert.alert(
                    'Buy Course by asking for Purchasing Details in Contact Section.',
                  );
                  setModalVisibility(!modalVisibility);
                }}>
                <View style={styles.modalTextContainer}>
                  <View>
                    <Image
                      style={styles.modalImage}
                      resizeMode="contain"
                      source={modalData.image}
                    />
                  </View>
                  <Text style={styles.modalText}>{modalData.title}</Text>
                  <Text style={styles.modalDesc}>{modalData.description}</Text>
                  <Text style={styles.modalSpcl}>Specialization In:</Text>
                  <Text style={styles.modalCourse}>1. {modalData.course1}</Text>
                  <Text style={styles.modalCourse}>2. {modalData.course2}</Text>
                  <Text style={styles.modalCourse}>3. {modalData.course3}</Text>
                  <Text style={styles.modalPrice}>
                    Available at: ₹{modalData.price}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      keyExtractor={key => key.id}
      data={Courses}
      renderItem={courseCard}
    />
  );
};

const styles = StyleSheet.create({
  cardImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1.5,
  },
  mainContainer: {
    paddingHorizontal: 20,
  },
  courseContainer: {
    padding: 30,
    backgroundColor: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
    borderRadius: 5,
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 30,
  },
  mainHeader: {
    fontSize: 22,
    color: '#344055',
    textTransform: 'uppercase',
    fontWeight: '500',
    paddingVertical: 15,
    textAlign: 'center',
    fontFamily: 'serif',
  },
  description: {
    textAlign: 'left',
    fontFamily: 'fantasy',
    lineHeight: 20,
    paddingBottom: 15,
    fontSize: 16,
    color: '#7d7d7d',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: '#809fff',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'serif',
    textTransform: 'capitalize',
  },
  modalContainer: {
    // flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  },
  modalTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  modalText: {
    color: 'blue',
    fontSize: 23,
    textAlign: 'center',
  },
  modalImage: {
    width: '80%',
    height: undefined,
    aspectRatio: 1.5,
  },
  modalDesc: {
    textAlign: 'left',
    fontFamily: 'fantasy',
    lineHeight: 16,
    paddingVertical: 10,
    fontSize: 16,
    color: '#7d7d7d',
  },
  modalSpcl: {
    // fontFamily: 'fantasy',
    // lineHeight: 16,
    fontSize: 17,
    color: '#237DD5',
  },
  modalCourse: {
    color: '#45C17C',
    fontSize: 15,
  },
  modalPrice: {
    marginTop: 15,
    marginBottom: 10,
    color: '#C14575',
    fontWeight: '500',
    fontSize: 20,
  },
});
