import AsyncStorage from '@react-native-async-storage/async-storage';

const TODO_KEY = 'TODOS';

export const getTodos = async () => {
  const todosJson = await AsyncStorage.getItem(TODO_KEY);
  return todosJson ? JSON.parse(todosJson) : [];
};

export const saveTodos = async (todos) => {
  const todosJson = JSON.stringify(todos);
  await AsyncStorage.setItem(TODO_KEY, todosJson);
};
