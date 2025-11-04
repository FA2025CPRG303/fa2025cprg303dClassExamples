import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import MyFirstComponent from '../components/my-component';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const nav = useNavigation();

  console.log('Hello World!');

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={{ fontSize: 30, color: 'blue', textAlign: 'center' }}>
          Hello World!
        </Text>
        <Button title="Go to About" onPress={() => nav.navigate('About')} />
        <MyFirstComponent />
        <View style={ {height:100} }></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
});
