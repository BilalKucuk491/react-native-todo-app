import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { addTask } from '../redux/taskSlice';

const TodoHeader = () => {
  const dispatch = useDispatch();
  const [todo, SetTodo] = useState('');
  const onSubmitTask = () => {
    if (todo.trim().length === 0) {
      Alert.alert('Please enter a task');
      SetTodo('');
      return;
    }
    dispatch(
      addTask({
        task: todo,
      }),
    );
    SetTodo('');
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 10,
        }}>
        Todo List
      </Text>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* text  input */}

        <TextInput
          style={{
            borderColor: 'gray',
            borderWidth: 1,
            padding: 10,
            margin: 10,
            width: '90%',
            borderRadius: 5,
          }}
          placeholder="Add Todo"
          onChangeText={text => SetTodo(text)}
          value={todo}
        />

        {/* button */}
        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            padding: 10,
            margin: 10,
            width: '90%',
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={onSubmitTask}>
          <Text style={{color: 'white'}}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoHeader;

const styles = StyleSheet.create({});
