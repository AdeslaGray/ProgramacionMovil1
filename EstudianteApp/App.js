import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { StudentProvider } from './context/StudentContext';
import StudentList from './components/StudentList';
import AddStudentForm from './components/AddStudentForm';

export default function App() {
  return (
    <StudentProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Lista de Estudiantes</Text>
        <AddStudentForm />
        <StudentList />
      </SafeAreaView>
    </StudentProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
  },
});