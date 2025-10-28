import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function UserHeader({ nombre, ocupacion }) {
  return (
    <>
      <Text style={styles.nombre}>{nombre}</Text>
      <Text style={styles.ocupacion}>{ocupacion}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  nombre: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  ocupacion: {
    fontSize: 16,
    color: '#555'
  }
});