import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {TextInput, Button} from 'react-native';

export default function App() {

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result,
        setResult] = useState('');

    const handleAdd = () => {
        const sum = parseInt(num1) + parseInt(num2);
        setResult(`Result: ${sum.toString()}`);    };

    return (
        <View style={styles.container}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter the first number"
          value={num1}
          onChangeText={text => setNum1(text)}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter the second number"
          value={num2}
          onChangeText={text => setNum2(text)}
        />
        <Button title="Add" onPress={handleAdd} />
        <Text style={styles.result}>{result}</Text>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    input: {
      width: '80%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    result: {
      marginTop: 20,
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
  
