import React, { useRef, useEffect, useState } from 'react';
import { Animated, StyleSheet, View, Dimensions, Text, Pressable } from 'react-native';
import LottieView from 'lottie-react-native';

export default function App() {
    const animation = useRef(null);
    return (
    <View style={styles.animationContainer}>
        <LottieView
        autoPlay
        ref={animation}
        style={{
            // width: Dimensions.get('window').width,
            height: 300,
            marginTop: 20,
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('../assets/lottie/running.json')}
        />
        <Text style = {styles.logo}>RunMate</Text>
        
        <View style={styles.actionContainer}>
            <Pressable style={styles.button} onPress={() => console.log('Hello')}>
                <Text style={styles.text}>Sign In</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => console.log('Hello')}>
                <Text style={styles.text}>Create account</Text>
            </Pressable>
        </View>

            
    </View>
    );
}





const styles = StyleSheet.create({
    animationContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        flex: 1,
    },
    actionContainer: {
        paddingTop: 20,
    },
    logo: {
        fontSize: 20,
        marginBottom: 50,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 50,
        borderRadius: 8,
        elevation: 3,
        backgroundColor: '#151f7f',
        marginBottom: 20
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
  
});