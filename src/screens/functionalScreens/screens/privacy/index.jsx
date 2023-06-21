import { View, StatusBar } from 'react-native'
import { Text } from 'react-native-paper'
import React from 'react'
import styles from './style'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppHeader from '../../../../components/molecules/header'
import { ScrollView } from 'react-native-gesture-handler'
const Privacy = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <SafeAreaView />
            <AppHeader title='Privacy & Policy' backButton navigation={navigation} />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollTextWrapper}>
                <Text style={styles.titleText}>Read our privacy carefully</Text>
                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut in officia provident, ipsa ut, nihil porro et vitae beatae
                    laborum exercitationem quia consequuntur ex perspiciatis, repudiandae qui magni temporibus quod. Alias placeat rem, saepe magnam ab,
                    rerum magni modi quibusdam asperiores voluptate similique explicabo hic minima eveniet tempora. Dolorem maxime, ex sapiente alias cumque ducimus excepturi
                    tempora labore corrupti. Qui reprehenderit officia cumque incidunt quidem minima consequatur dolore ea debitis. Nulla mollitia dicta, quos, nobis provident
                    similique perspiciatis temporibus accusamus officiis dolores quisquam nisi alias ipsa,
                    corrupti ut in tenetur voluptates quasi natus optio. Sit minima vero perspiciatis sequi maiores!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut in officia provident, ipsa ut, nihil porro et vitae beatae
                    laborum exercitationem quia consequuntur ex perspiciatis, repudiandae qui magni temporibus quod. Alias placeat rem, saepe magnam ab,
                    rerum magni modi quibusdam asperiores voluptate similique explicabo hic minima eveniet tempora. Dolorem maxime, ex sapiente alias cumque ducimus excepturi
                    tempora labore corrupti. Qui reprehenderit officia cumque incidunt quidem minima consequatur dolore ea debitis. Nulla mollitia dicta, quos, nobis provident
                    similique perspiciatis temporibus accusamus officiis dolores quisquam nisi alias ipsa,
                    corrupti ut in tenetur voluptates quasi natus optio. Sit minima vero perspiciatis sequi maiores!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut in officia provident, ipsa ut, nihil porro et vitae beatae
                    laborum exercitationem quia consequuntur ex perspiciatis, repudiandae qui magni temporibus quod. Alias placeat rem, saepe magnam ab,
                    rerum magni modi quibusdam asperiores voluptate similique explicabo hic minima eveniet tempora. Dolorem maxime, ex sapiente alias cumque ducimus excepturi
                    tempora labore corrupti. Qui reprehenderit officia cumque incidunt quidem minima consequatur dolore ea debitis. Nulla mollitia dicta, quos, nobis provident
                    similique perspiciatis temporibus accusamus officiis dolores quisquam nisi alias ipsa,
                    corrupti ut in tenetur voluptates quasi natus optio. Sit minima vero perspiciatis sequi maiores!
                </Text>
            </ScrollView>
        </View>
    )
}

export default Privacy