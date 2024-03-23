import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>My Todo List</Text>
        <View style={styles.separator}></View>
        <View style={styles.todoList}>
            <View style={styles.todoItem}>
            <Text style={styles.todoText}>Buy milk</Text>
          </View>
          <View style={styles.todoItem}>
            <Text style={styles.todoText}>Buy bread</Text>
          </View>
          <View style={styles.todoItem}>
            <Text style={styles.todoText}>Buy eggs</Text>
          </View>
        </View>
      </View>
      <View style={styles.separator}></View>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.buttonText}>ADD NEW TODO</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  content: {
    flex: 1,
    alignSelf: 'stretch',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#000',
    marginVertical: 10,
  },
  todoList: {
    alignItems: 'stretch',
    marginBottom: 10,
    alignSelf: 'stretch',
  },
  todoItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.96,
    shadowRadius: 3.84,
    elevation: 5,
  },
  todoText: {
    fontSize:14,
  },
  addButton: {
    backgroundColor: '#6D8777',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    alignSelf: 'stretch',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.96,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
});
