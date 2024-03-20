import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import FoodListItem from '../components/FoodListItem';

const foodItems = [
  {label: 'Pizza', cal: 75, brand: 'Dominos'},
  {label: 'Apple', cal: 100, brand: 'yesshs'},
  {label: 'Banana', cal: 25, brand: 'lclc'}
];

export default function App() {
  return (
    <View style={styles.container}>
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
});
