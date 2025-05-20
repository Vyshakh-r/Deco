// app/tabs/HomeScreen.tsx
import React from 'react';
import CategoryTabs from '../(app)/Components/CategoryTabs';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Search from '../(app)/Components/Search';
import { Stack } from 'expo-router';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.Container}>
      <Stack.Screen options={{ headerShown: false }} />
          <Search/>
          <CategoryTabs />
    </SafeAreaView>
    
  );
}
const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'#ffffff'
    }
})
