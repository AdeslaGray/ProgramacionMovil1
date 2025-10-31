import React, { createContext, useState, useEffect } from 'react';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([
    { id: '1', name: 'Juan' },
    { id: '2', name: 'María' },
    { id: '3', name: 'Carlos' },
  ]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const moreStudents = [
        { id: '4', name: 'Ana' },
        { id: '5', name: 'Luis' },
        { id: '6', name: 'Sofía' },
        { id: '7', name: 'Pedro' },
        { id: '8', name: 'Lucía' },
        { id: '9', name: 'Andrés' },
        { id: '10', name: 'Valeria' },
      ];
      setStudents(prev => [...prev, ...moreStudents]);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  const addStudent = (name) => {
    const newStudent = {
      id: (students.length + 1).toString(),
      name,
    };
    setStudents(prev => [...prev, newStudent]);
  };

  return (
    <StudentContext.Provider value={{ students, addStudent }}>
      {children}
    </StudentContext.Provider>
  );
};