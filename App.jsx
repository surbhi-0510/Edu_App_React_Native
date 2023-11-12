import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './edu_app/Home';
import {About} from './edu_app/About';
import {Course} from './edu_app/Course';
import {UserData} from './edu_app/UserData';
import {Contact} from './edu_app/Contact';

function App() {
  const Stack = createNativeStackNavigator();

  const op = {
    headerTitleStyle: {
      color: 'rgb(97, 12, 159)',
      fontFamily: 'monospace',
      fontWeight: '900',
    },
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: 'rgb(250, 203, 234)',
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Home */}
        <Stack.Screen name="Home" options={{headerShown: false}}>
          {props => <Home {...props} channelName={'ABC Technical'} />}
        </Stack.Screen>

        {/* Course */}
        <Stack.Screen name="Course" component={Course} options={op} />

        {/* UserData*/}
        <Stack.Screen name="Student" component={UserData} options={op} />

        {/* About*/}
        <Stack.Screen name="About Us" component={About} options={op} />

        {/*      Contact */}
        <Stack.Screen name="Contact" component={Contact} options={op} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
