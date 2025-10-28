import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import UserProfile from './components/UserProfile';

export default function App() {
  const users = [
    { nombre: 'Ana López', edad: 28, ciudad: 'Tegucigalpa', ocupacion: 'Diseñadora UX' },
    { nombre: 'Carlos Pérez', edad: 35, ciudad: 'San Pedro Sula', ocupacion: 'Desarrollador Backend' },
    { nombre: 'Lucía Torres', edad: 22, ciudad: 'La Ceiba', ocupacion: 'Estudiante de Ingeniería' }
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {users.map((user, index) => (
        <UserProfile key={index} usuario={user} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
});