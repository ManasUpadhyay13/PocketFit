import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import globalStyles from '../globalStyles'
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const AddScreen = ({ setShowMenuNavigator }) => {
    return (
        <ScrollView style={globalStyles.container} >

            <View style={globalStyles.wrapper} >

                {/* header section starts */}

                <View
                    style={{
                        width: "100%",
                        height: 50,
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexDirection: "row"
                    }}
                >
                    <TouchableOpacity
                        style={{
                            width: 100,
                            borderWidth: 3,
                            justifyContent: "space-around",
                            alignItems: "center",
                            flexDirection: "row",
                            height: 35,
                            borderRadius: 5,
                            borderColor: "#F58888"
                        }}
                    >
                        <Feather name="x" size={24} color="black" />
                        <Text style={{ color: "black" }} >Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            width: 100,
                            borderWidth: 3,
                            justifyContent: "space-around",
                            alignItems: "center",
                            flexDirection: "row",
                            height: 35,
                            borderRadius: 5,
                            borderColor: "#F58888"
                        }}
                    >
                        <MaterialIcons name="done" size={24} color="black" />
                        <Text style={{ color: "black" }} >Confirm</Text>
                    </TouchableOpacity>

                </View>

                {/* header section ends */}


                {/* type of income / expense / transfer */}

                <View
                    style={{
                        width: "100%",
                        height: 50,
                        flexDirection: "row",
                    }}
                >
                    <TouchableOpacity
                        style={{
                            flex: 1 / 3,
                            borderRightWidth : 3,
                            borderRightColor : "#F58888",
                            height: "100%",
                            alignItems: 'center',
                            justifyContent: "center"
                        }}
                    >
                        <Text>Income</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            flex: 1 / 3,
                            borderRightWidth : 3,
                            borderRightColor : "#F58888",
                            height: "100%",
                            alignItems: 'center',
                            justifyContent: "center"
                        }}
                    >
                        <Text>Expense</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            flex: 1 / 3,
                            
                            height: "100%",
                            alignItems: 'center',
                            justifyContent: "center"
                        }}
                    >
                        <Text>Transfer</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </ScrollView>
    )
}

export default AddScreen