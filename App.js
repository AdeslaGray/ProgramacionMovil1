import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import CalculatorFrame from './components/CalculatorFrame';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <CalculatorFrame />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
});