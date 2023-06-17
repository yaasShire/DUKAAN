import { View, Text } from 'react-native'
import React from 'react'
import { Tab } from '@rneui/themed'
import { globalStyles } from '../../../../../../globalConstants/styles'

const TopBar = ({ index, setIndex }) => {
    return (
        <Tab
            value={index}
            onChange={(e) => setIndex(e)}
            indicatorStyle={{
                backgroundColor: '#fff',
                height: 3,
                borderRadius: 20,
                paddingHorizontal: 20
            }}
            variant="default"
            style={{ borderRadius: 5, backgroundColor: globalStyles.colors.logoColor }}
        >
            <Tab.Item
                title="Info"
                titleStyle={{ fontSize: 12, color: "#fff" }}
                icon={{ name: 'price-tag', type: 'foundation', color: 'white' }}
                style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
            />
            <Tab.Item
                title="Inventory"
                titleStyle={{ fontSize: 12, color: "#fff" }}
                icon={{ name: 'inventory', type: 'materialIcons', color: 'white' }}
            />
            <Tab.Item
                title="Categories"
                titleStyle={{ fontSize: 12, color: "#fff" }}

                icon={{ name: 'burst-sale', type: 'foundation', color: 'white' }}
                style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}


            />
        </Tab>
    )
}

export default TopBar