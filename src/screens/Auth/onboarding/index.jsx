import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Onboarding from 'react-native-onboarding-swiper';
import welcomeImage1 from '../../../assets/welcome1.png'
import welcomeImage2 from '../../../assets/welcome2.png'
import welcomeImage3 from '../../../assets/welcome3.png'
import styles from './style'
const OnboardingC = ({ navigation }) => {
    return (

        <Onboarding
            onDone={() => navigation.navigate('initial')}
            onSkip={() => navigation.navigate('initial')}
            pages={[
                {
                    backgroundColor: '#3bd1d1',
                    image: <Image source={welcomeImage1} style={styles.image} />,
                    title: 'Mechanic Seller',
                    subtitle: 'Welcome to mechanic seller application we\'re happy to have you',
                },
                {
                    backgroundColor: '#0c7070',
                    image: <Image source={welcomeImage2} style={styles.image} />,
                    title: 'Shop Management',
                    subtitle: 'You can create a shop and upload products right away.',
                },
                {
                    backgroundColor: '#079ff7',
                    image: <Image source={welcomeImage3} style={styles.image} />,
                    title: 'Multiple shops',
                    subtitle: 'You can create multiple shops and manage them separately.',
                },
            ]}
        />
    )
}

export default OnboardingC