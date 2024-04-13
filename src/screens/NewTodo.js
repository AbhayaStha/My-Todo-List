import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, ToastAndroid } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTodoContext } from './component/TodoContext';
import colors from '../constant/color';

export const NewTodo = ({ navigation }) => {
    const { addTodo } = useTodoContext();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSave = () => {
        if (title.trim() && description.trim()) {
            const newTodo = {
                title: title.trim(),
                description: description.trim(),
                finished: false,
                expanded: false,
            };
            addTodo(newTodo);
            setTitle('');
            setDescription('');
            ToastAndroid.show('Todo Added Successfully', ToastAndroid.SHORT);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Add New Todo</Text>
                <View style={styles.separator} />
                <Text style={styles.inputLabel}>Title</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='My new todo title'
                    value={title}
                    onChangeText={setTitle}
                />
                <Text style={styles.inputLabel}>Description</Text>
                <TextInput
                    style={styles.multilineTextInput}
                    placeholder='Enter description'
                    value={description}
                    onChangeText={setDescription}
                    multiline
                    textAlignVertical='top'
                    numberOfLines={5}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Ionicons name = 'backspace-outline' size={25} color='white'/>
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleSave}>
                    <Ionicons name='save-outline' size={20} color='white' />
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundPrimary,
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
        backgroundColor: colors.separator,
        marginVertical: 10,
    },
    inputLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5,
        alignSelf: 'flex-start',
    },
    textInput: {
        fontSize: 15,
        padding: 10,
        borderRadius: 5,
        borderColor: colors.borderColor,
        borderWidth: 1,
        marginBottom: 10,
    },
    multilineTextInput: {
        fontSize: 15,
        padding: 10,
        borderRadius: 5,
        borderColor: colors.borderColor,
        borderWidth: 1,
        marginBottom: 20,
        textAlignVertical: 'top',
        minHeight: 75,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    button: {
        backgroundColor: colors.buttonPrimary,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 12,
        marginLeft: 5,
    },
});
