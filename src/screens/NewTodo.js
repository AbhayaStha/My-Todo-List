import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';

export const NewTodo = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const changeTitleHandler = (val) => setTitle(val);
  const changeDescriptionHandler = (val) => setDescription(val);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Add New Todo</Text>
        <View style={styles.separator} />
        <Text style={styles.inputLabel}>Title</Text>
        <TextInput
          style={styles.textInput}
          placeholder="My new todo title"
          value={title}
          onChangeText={changeTitleHandler}
          underlineColorAndroid="transparent"
        />
        <Text style={styles.inputLabel}>Description</Text>
        <TextInput
          style={styles.multilineTextInput}
          placeholder="Enter description"
          value={description}
          onChangeText={changeDescriptionHandler}
          multiline
          textAlignVertical="top"
          numberOfLines={4}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log("hello")}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  textInput: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    alignSelf: 'stretch',
    marginBottom: 10,
  },
  multilineTextInput: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    alignSelf: 'stretch',
    marginBottom: 20,
    minHeight: 100, 
    textAlignVertical: 'top', 
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: '#6D8777',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
});
