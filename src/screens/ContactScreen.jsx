import { useNavigation } from '@react-navigation/native';
import { Button, FlatList, Text, View } from 'react-native';

export default function ContactScreen() {
  const nav = useNavigation();

  let myArray = [];
  for (let i = 0; i < 400; i++) {
    let myText = `Item #${i}`;
    myArray.push(myText);
  }



  return (
    <View>
      <Text>Contact Screen</Text>
      <Button title="Go to About" onPress={() => nav.navigate('About')} />
      <Button title="Go Back" onPress={() => nav.goBack()} />
      <Button title="Go Home" onPress={() => nav.popToTop()} />
      <Button title="Go Home" onPress={() => nav.popTo('Home')} />
      <FlatList
        data={myArray}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}
