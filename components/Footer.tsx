import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Footer() {
    return (
        <View style={footerStyle.container}>
            <Text style={footerStyle.footerText}>
                All rights reserved by Little Lemon, 2022{' '}
            </Text>
        </View>
    );
}

const footerStyle = StyleSheet.create({
    container: {
        backgroundColor: '#F4CE14',
        paddingBottom: 15,
        paddingTop: 10,
    },
    footerText: {
        fontSize: 15,
        color: 'black',
        textAlign: 'center',
    }
});