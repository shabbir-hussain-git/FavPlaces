import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Main from './EntryPoint/Main';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import COLORS from './Util/Colors';
import { Provider } from 'react-redux'
import store  from './store/store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'light-content'}  />
        <NavigationContainer>
            <Main></Main>
        </NavigationContainer>
      </SafeAreaView>
      </Provider>
    </>
  );
}


const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:COLORS.primary_100
  },
  barStyle:{
    
  }
})
