import React from 'react';
import { View, Text } from 'react-native';
import questions from '../data/questions';

const QuizScreen = ({ route }) => {
  const { categoryId } = route.params;
  const categoryQuestions = questions.filter(q => q.categoryId === categoryId);

  return (
    <View>
      {categoryQuestions.map((question, index) => (
        <View key={index}>
          <Text>{question.question}</Text>
          {/* Options and logic to handle answers */}
        </View>
      ))}
    </View>
  );
};

export default QuizScreen;
