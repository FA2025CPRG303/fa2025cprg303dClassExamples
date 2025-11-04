import { Text, View } from "react-native";
export default function CounterDisplayComp(props){
    return(
        <View>
            <Text style={{fontSize:40, color:'green', textAlign:'center'}}>{props.countInt}</Text>
            {/* <SomeOtherComponent counterChange={props.countInt} /> */}
        </View>
    )
}