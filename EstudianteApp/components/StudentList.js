import React, { useContext } from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';
import { StudentContext } from '../context/StudentContext';

const StudentList = () => {
  const { students } = useContext(StudentContext);

  return (
    <FlatList
      data={students}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Text style={styles.item}>{item.name}</Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});

export default StudentList;