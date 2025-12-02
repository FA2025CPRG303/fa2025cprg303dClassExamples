import { ScrollView, Text, View } from "react-native";
import { ThemeContextProvider } from "../contexts/theme-context";

export default function ThemeLayout({children}){
    return(
        <ThemeContextProvider>
            {children}
        </ThemeContextProvider>
    );

    // Example
    /*
    return(
        <ScrollView>
            <View>
                <Text>This is my header</Text>
                <NavBar />
            </View>
            {children}
            <View>
                <Text>This is my footer</Text>
            </View>
        </ScrollView>
    );
    */
}