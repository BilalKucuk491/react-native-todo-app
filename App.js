import React from 'react';
import {SafeAreaView} from 'react-native';
import TodoHeader from './src/components/TodoHeader';
import TodoList from './src/components/TodoList';
import store from './src/redux/store';
import {Provider} from 'react-redux';
const RootApp = () => {
  return (
    <SafeAreaView>
      <TodoHeader />
      <TodoList />
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <RootApp />
    </Provider>
  );
};

export default App;
