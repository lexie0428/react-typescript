import React, { useState, useEffect } from 'react'
import List from './List';
import { ITodo } from '../types/types';
import axios from 'axios';
import TodoItem from './TodoItem';

function TodosPage() {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
      fetchTodos();
    }, [])
  
    async function fetchTodos() {
      try {
        const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
        setTodos(response.data)
      } catch (e) {
        alert(e)
      }
    }
    return (
        <div>
            <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />} />
        </div>
    )
}

export default TodosPage
