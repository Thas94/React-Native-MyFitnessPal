import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';
import FoodListItem from '../components/FoodListItem';
import { useState } from 'react';

const foodItems = [
  {label: 'Pizza', cal: 75, brand: 'Dominos'},
  {label: 'Apple', cal: 100, brand: 'yesshs'},
  {label: 'Banana', cal: 25, brand: 'lclc'}
];

export default function App() {

  const [search, setSearch] = useState('');
  const performSearch = () => {
    console.warn('Searching: ', search);
  }

  return (
    <View style={styles.container}>
      <TextInput value={search} onChangeText={setSearch} placeholder='Search...' style={styles.input}/>
      {search && <Button title='Search' onPress={performSearch}/>}

      <Text>{search}</Text>
      <FlatList 
        data={foodItems}
        renderItem={({item}) => <FoodListItem item={item}/>}
        contentContainerStyle={{gap: 5}}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  input: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    borderRadius: 20
  }
});
