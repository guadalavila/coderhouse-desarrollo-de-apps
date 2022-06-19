import * as React from 'react';
import MainNavigator from './src/navigation/MainNavigator';
import { useFonts } from 'expo-font';
import Loading from './src/components/Loading';
import { Provider } from 'react-redux';
import store from './src/store';
import { init } from './src/db';

init().then(()=> {
  console.log('DB ok');
}).catch((err)=> {
  console.log(err.message);
});

function App() {

  const [loaded] = useFonts({
    Koulen: require('./assets/Fonts/Koulen/Koulen-Regular.ttf'),
    LatoRegular: require('./assets/Fonts/Lato/Lato-Regular.ttf')
  });

  if (!loaded) {
    return <Loading/>;
  }

  return (
    <Provider store={store}>
      <MainNavigator/>
    </Provider>
  );
}

export default App;

