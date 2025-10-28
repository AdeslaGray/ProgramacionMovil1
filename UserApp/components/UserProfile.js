import React from 'react';
import { View, StyleSheet } from 'react-native';
import UserHeader from './UserHeader';
import UserDetails from './UserDetails';

export default function UserProfile({ usuario }) {
  const { nombre, edad, ciudad, ocupacion } = usuario;

  return (
    <View style={styles.card}>
      <UserHeader nombre={nombre} ocupacion={ocupacion} />
      <UserDetails edad={edad} ciudad={ciudad} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10
  }
});