import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function IMCResult({ imc, clasificacion }) {
  return (
    <View style={styles.resultContainer}>
      <Text style={styles.resultText}>IMC: {imc}</Text>
      <Text style={styles.resultText}>Clasificación: {clasificacion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  resultContainer: { marginTop: 20 },
  resultText: { fontSize: 20, fontWeight: 'bold' },
});