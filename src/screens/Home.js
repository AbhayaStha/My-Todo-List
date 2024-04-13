import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useTodoContext } from '../component/TodoContext';
import colors from '../constant/color';

export const Home = () => {
    const navigation = useNavigation();
    const { todos, markAsFinished, deleteTodo, toggleExpanded } = useTodoContext();

    const gotoNewTodoHandler = () => {
        navigation.navigate('Add New Todo');
    };

    const renderTodoItem = ({ item, index }) => (
        <View style={styles.todoItem}>
            <TouchableOpacity onPress={() => toggleExpanded(index)}>
                <Text style={styles.todoText}>
                    {item.title}
                    <Ionicons style= {styles.caret} name={item.expanded ? 'caret-up-outline' : 'caret-down-outline'} size={14} />
                </Text>
            </TouchableOpacity>
            {item.expanded && (
                <View style={styles.todoExpanded}>
                    <Text style={styles.todoDescription}>{item.description}</Text>
                    <View style={styles.controlPanel}>
                        {!item.finished && (
                            <TouchableOpacity onPress={() => markAsFinished(index)}>
                                <Ionicons name='checkmark' size={20} color='green' />
                            </TouchableOpacity>
                        )}
                        <TouchableOpacity onPress={() => deleteTodo(index)}>
                            <Ionicons name='trash' size={20} color='red' />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    );

    return (
        <View style={styles.container}>
        <Text style={styles.title}>My Todo List</Text>
        <View style={styles.separator}></View>
            <FlatList
                data={todos}
                renderItem={renderTodoItem}
                keyExtractor={(item, index) => index.toString()}
            />
            <TouchableOpacity style={styles.addButton} onPress={gotoNewTodoHandler}>
                <Ionicons name='add-circle-outline' size={20} color='white' />
                <Text style={styles.buttonText}>ADD NEW TODO</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundPrimary,
        // alignItems: 'center',
        // justifyContent: 'space-between',
        padding: 20,
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
    todoItem: {
      backgroundColor: colors.backgroundSecondary,
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
      shadowColor: colors.shadowColor,
      shadowOffset: { 
        width: 0, 
        height: 2 
      },
      // alignSelf: 'stretch',
      // marginBottom: 20,
      shadowOpacity: 0.96,
      shadowRadius: 3.84,
      elevation: 5,
    },
    todoText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    todoExpanded: {
        marginTop: 10,
    },
    todoDescription: {
        fontSize: 12,
        marginBottom: 10,
    },
    controlPanel: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    addButton: {
        backgroundColor: colors.buttonPrimary,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        // alignSelf: 'stretch',
        // marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
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
        color: colors.buttonText,
        fontSize: 12,
        textAlign: 'center',
        marginLeft: 5,
    },
});
