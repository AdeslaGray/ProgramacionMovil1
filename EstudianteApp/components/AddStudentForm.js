import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { StudentContext } from '../context/StudentContext';

const AddStudentForm = () => {
  const [name, setName] = useState('');
  const { addStudent } = useContext(StudentContext);

  const handleAdd = () => {
    if (name.trim()) {
      addStudent(name);
      setName('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nombre del estudiante"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <Button title="Agregar" onPress={handleAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default AddStudentForm;