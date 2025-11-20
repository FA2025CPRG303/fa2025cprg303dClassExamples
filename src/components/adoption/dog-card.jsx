import { StyleSheet, Text, View } from "react-native";
export default function DogCardComp({dogObj}){
    let {dogAge, dogBreed:breed} = dogObj;
    return(
        <View style={dogStyles.container}>
            <Text style={dogStyles.dogName}>{dogObj.dogName}</Text>
            <Text>Age: {dogAge}</Text>
            <Text>Breed: {breed}</Text>
        </View>
    );
}

const dogStyles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
        borderRadius: 20,
        padding: 20,
        marginVertical: 10,
    },
    dogName: {
        fontSize: 26,
        color: 'green'
    }
});