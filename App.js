import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import RootNavigator from './src/navigation';
import { store } from './src/redux';
import { Provider } from 'react-redux';


export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}

