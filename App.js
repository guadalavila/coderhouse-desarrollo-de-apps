import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Layout from './src/components/Layout';
import { Colors } from './src/utils/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" color={Colors.primary} />
      <Layout />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#8E44AD',
    fontWeight: 'bold',
    fontSize: 22
  }
});
