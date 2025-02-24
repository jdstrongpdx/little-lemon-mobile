import React from 'react';
import {ScrollView, Image, StyleSheet, Text, View} from 'react-native';

const Welcome = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerWrapper}>
                <Image
                    style={styles.titleLogo}
                    source={require('../img/logo.png')}
                    resizeMode="cover"
                    accessible={true}
                    accessibilityLabel={'Little Lemon Logo'}
                />

                <Text style={styles.headerText}>Little Lemon</Text>
            </View>
            <Text style={styles.regularText}>
                Little Lemon is a charming neighborhood bistro that serves simple food
                and classic cocktails in a lively but casual environment. We would love
                to hear your experience with us!
            </Text>

            <Image
                style={styles.logo}
                source={require('../img/littleLemonLogo.png')}
                resizeMode="center"
                accessible={true}
                accessibilityLabel={'Little Lemon Logo'}
            />

            <Text style={styles.title}>
                Little Lemon, your local Mediterranean Bistro
            </Text>
            <Image
                style={styles.image}
                source={require('../img/Picture1.png')}
                resizeMode="cover"
                accessible={true}
                accessibilityLabel={'Cookbook'}
            />
            <Image
                style={styles.image}
                source={require('../img/Picture2.png')}
                resizeMode="cover"
                accessible={true}
                accessibilityLabel={'Bowl of Food'}
            />
            <Image
                style={styles.image}
                source={require('../img/Picture3.png')}
                resizeMode="cover"
                accessible={true}
                accessibilityLabel={'Lemon being sliced'}
            />
            <Image
                style={styles.image}
                source={require('../img/Picture4.png')}
                resizeMode="cover"
                accessible={true}
                accessibilityLabel={'Cooked mussles in a bowl.'}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    logo: {
        height: 100,
        width: 300,
    },
    image: {
        width: 350,
        height: 250,
        borderRadius: 10,
        marginBottom: 10,
    },
    container: {
        flex: 1,
        padding: 24,
        marginTop: 25,
        backgroundColor: '#fff',
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10,
    },
    headerText: {
        paddingRight: 10,
        paddingLeft: 20,
        paddingTop: 30,
        paddingBottom: 10,
        fontSize: 30,
        textAlign: 'center',
    },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        textAlign: 'center',
    },
    titleLogo: {
        width: 100,
        height: 100,
        borderRadius: 20,
    },
    title: {
        marginTop: 16,
        paddingVertical: 10,
        color: '#333333',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Welcome;
