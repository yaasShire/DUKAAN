import React, { useRef, useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

export default function TestAnimation() {
    const animation = useRef(null);
    useEffect(() => {
        // You can control the ref programmatically, rather than using autoPlay
        animation.current?.pause();
    }, []);

    return (
        <View style={styles.animationContainer}>
            <LottieView
                ref={animation}
                duration={3000}
                loop={false}
                style={{
                    width: 300,
                    height: 300,
                    backgroundColor: 'purple',

                }}
                // Find more Lottie files at https://lottiefiles.com/featured
                source={require('../../assets/animations/success.json')}
            />
            <View style={styles.buttonContainer}>
                <Button
                    title="Restart Animation"
                    onPress={() => {
                        // animation.current?.reset();
                        animation.current?.play();
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    animationContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    buttonContainer: {
        paddingTop: 20,
    },
});