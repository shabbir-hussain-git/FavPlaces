import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Main from './EntryPoint/Main';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import COLORS from './Util/Colors';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'light-content'}  />
        <NavigationContainer>
          <Main></Main>
        </NavigationContainer>
      </SafeAreaView>
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
