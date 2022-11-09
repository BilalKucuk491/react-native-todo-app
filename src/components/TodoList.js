import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {deleteTask} from '../redux/taskSlice';
import {useDispatch} from 'react-redux';

const TodoList = () => {
  const dispatch = useDispatch();

  const todos = useSelector(state => state.tasks);

  const onDelete = id => {
    dispatch(
      deleteTask({
        id: id,
      }),
    );
  };

  const RenderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.name}</Text>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={()=> onDelete(item.id)}>
          <IoniconsIcon name="trash" size={32} color="black" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={todos}
        renderItem={RenderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#de3737',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
  delete: {
    fontSize: 24,
    color: 'black',
    alignItems: 'center',
  },
});
