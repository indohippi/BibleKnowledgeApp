import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import categories from '../data/categories';

const CategoriesScreen = ({ navigation }) => {
  return (
    <View>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Button
            title={item.name}
            onPress={() => navigation.navigate('Quiz', { categoryId: item.id })}
          />
        )}
      />
    </View>
  );
};

export default CategoriesScreen;
