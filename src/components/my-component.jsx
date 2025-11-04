import { Button, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";


export default function MyFirstComponent(){

    function sayHello(){
        alert('Hello World!');
    }

    return(
        <View>
            <Text style={myStyles.myText}>This is a React-Native component</Text>
            <Image style={myStyles.myImage} source={ require('../assets/images/cat.jpg') } />
            <Image style={myStyles.myImage} source={ require('../assets/images/cat.jpg') } />
            <Image style={myStyles.myImage} source={ require('../assets/images/cat.jpg') } />
            <Image style={myStyles.myImage} source={ {uri: 'https://images.dog.ceo/breeds/kelpie/n02105412_7513.jpg'} } />
            <Button title="Say Hello!" onPress={sayHello} />
            <Pressable style={myStyles.myButton} onPress={sayHello}>
                <Text style={myStyles.myButtonText}>Say Hello</Text>
            </Pressable>
            <View>
                <Text>Simple Form</Text>
                <Text>Name:</Text>
                <TextInput style={myStyles.myTextInput} placeholder="John Smith" />
                <Text>Phone:</Text>
                <TextInput style={myStyles.myTextInput} keyboardType="numeric" />
                <Text>Password:</Text>
                <TextInput style={myStyles.myTextInput} secureTextEntry />
            </View>
        </View>
    );
}

const myStyles = StyleSheet.create({
    myText: {
        fontSize: 20,
        textAlign: 'center'
    },
    myImage: {
        width: 320,
        height: 200
    },
    myButton:{
        backgroundColor: 'green',
        padding: 10,
    },
    myButtonText: {
        fontSize:20,
        color: 'white',
        textAlign: 'center'
    },
    myTextInput: {
        borderWidth: 2,
        borderColor: 'blue'
    }

});