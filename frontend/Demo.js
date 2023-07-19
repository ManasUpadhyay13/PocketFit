import React, { useContext } from 'react'
import { View, Text } from 'react-native'

const Demo = () => {
    const { state, setState } = useContext(MyContext);

    const updateState = () => {
        setState({ ...state, key: 'new value' });
    };

    return (
        <View>
            <Text>
                {state}
            </Text>
        </View>
    )
}

export default Demo