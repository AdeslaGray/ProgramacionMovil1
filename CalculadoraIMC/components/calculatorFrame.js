import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import IMCResult from './IMCResult';

export default function CalculatorFrame() {
  const [peso, setPeso] = useState(70);
  const [altura, setAltura] = useState(1.70);
  const [imc, setIMC] = useState(0);
  const [clasificacion, setClasificacion] = useState('');

  useEffect(() => {
    const nuevoIMC = peso / (altura * altura);
    setIMC(nuevoIMC.toFixed(2));

    if (nuevoIMC < 18.5) setClasificacion('Bajo peso');
    else if (nuevoIMC < 25) setClasificacion('Peso normal');
    else if (nuevoIMC < 30) setClasificacion('Sobrepeso');
    else setClasificacion('Obesidad');
  }, [peso, altura]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>

      <Text style={styles.label}>Peso: {peso} kg</Text>
      <View style={styles.row}>
        <Button title="+1 KG" onPress={() => setPeso(peso + 1)} />
        <Button title="-1 KG" onPress={() => setPeso(peso - 1)} />
      </View>

      <Text style={styles.label}>Altura: {(altura * 100).toFixed(0)} cm</Text>
      <View style={styles.row}>
        <Button title="+1 CM" onPress={() => setAltura(altura + 0.01)} />
        <Button title="-1 CM" onPress={() => setAltura(altura - 0.01)} />
      </View>

      <IMCResult imc={imc} clasificacion={clasificacion} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  label: { fontSize: 18, marginVertical: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 },
});