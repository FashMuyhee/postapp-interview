import 'react-native-gesture-handler';
import RootNavigator from './src/navigation';
import { persistor, store } from './src/redux';
import { Provider } from 'react-redux';
import { RootSiblingParent } from 'react-native-root-siblings';
import { PersistGate } from 'redux-persist/integration/react';


export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <RootSiblingParent>
          <RootNavigator />
        </RootSiblingParent>
      </PersistGate>
    </Provider>
  );
}

