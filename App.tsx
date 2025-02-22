import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./components/Home";
import {Menu} from "react-native-paper";
import MenuItems from "./components/MenuItems";
import FeedbackForm from "./components/FeedbackForm";

export default function App() {
    return (
        <>
            <View style={styles.container}>
                <Header />
                <FeedbackForm />
                <Footer />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#495E57',
    },
});