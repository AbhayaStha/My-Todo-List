import React, { createContext, useContext, useState, useEffect } from 'react';
import { getTodos, saveTodos } from '../dataModel/TodoData';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        loadTodos();
    }, []);

    const loadTodos = async () => {
        const storedTodos = await getTodos();
        setTodos(storedTodos);
    };

    const addTodo = (newTodo) => {
        const updatedTodos = [...todos, newTodo];
        setTodos(updatedTodos);
        saveTodos(updatedTodos);
    };

    const markAsFinished = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].finished = true;
        setTodos(updatedTodos);
        saveTodos(updatedTodos);
    };

    const deleteTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
        saveTodos(updatedTodos);
    };

    const toggleExpanded = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].expanded = !updatedTodos[index].expanded;
        setTodos(updatedTodos);
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, markAsFinished, deleteTodo, toggleExpanded }}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodoContext = () => useContext(TodoContext);
