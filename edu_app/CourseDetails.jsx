import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const CourseDetails = () => {
  console.warn('Button pressed');
  return (
    <View>
      {/* <Text>CourseDetails</Text> */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}></Modal>
    </View>
  );
};

const styles = StyleSheet.create({});
