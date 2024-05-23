import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to the Bible Knowledge App!</Text>
      <Button
        title="Start Quiz"
        onPress={() => navigation.navigate('Categories')}
      />
    </View>
  );
};

export default HomeScreen;
