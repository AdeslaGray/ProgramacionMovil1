import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function UserDetails({ edad, ciudad }) {
  return (
    <>
      <Text style={styles.detalle}>Edad: {edad}</Text>
      <Text style={styles.detalle}>Ciudad: {ciudad}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  detalle: {
    fontSize: 14,
    color: '#333'
  }
});