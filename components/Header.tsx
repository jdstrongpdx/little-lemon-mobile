import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
        <View style={headerStyles.container}>
            <Text style={headerStyles.headerText}>
                Little Lemon
            </Text>
        </View>
    );
}

const headerStyles = StyleSheet.create({
    container: {
        backgroundColor: '#F4CE14',
    },
    headerText: {
        marginTop: 55,
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
    },
    innerText: {
        fontWeight: 'bold',
    },
});
