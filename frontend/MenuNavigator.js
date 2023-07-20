import React, { useRef } from 'react';
import { View, TouchableOpacity, Animated, Dimensions, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FAB } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import RecordsScreen from './screens/RecordScreen';
import AnalysisScreen from './screens/AnalysisScreen';
import BudgetScreen from './screens/BudgetScreen';
import AccountsCategories from './screens/AccountsCategories';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const EmptyComponent = () => null;

const TabLabel = ({ focused, label }) => {
  // Render the label only if the tab is focused
  if (focused) {
    return <Text style={{ color: 'black', fontWeight: 'bold' }}>{label}</Text>;
  }
  return null;
};

const MenuNavigator = () => {

  function getWidth() {

    let width = Dimensions.get("window").width

    width = width - 40

    return width / 5
  }

  const tabOffSetValue = useRef(new Animated.Value(0)).current

  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: [
            {
              backgroundColor: "white",
              position: "absolute",
              bottom: 30,
              marginHorizontal: 20,
              height: 60,
              borderRadius: 10,
              shadowColor: "black",
              shadowOpacity: 0.06,
              shadowOffset: {
                width: 10,
                height: 10,
              }
            }
          ],
          tabBarLabel: ({ focused }) => {
            <TabLabel focused={focused} label={route.name} />
          }
        })}
      >
        <Tab.Screen
          name="Records"
          component={RecordsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Ionicons
                  name="newspaper-outline"
                  size={24}
                  color={focused ? "red" : "black"}
                />
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: e => {
              Animated.spring(tabOffSetValue, {
                toValue: 0,
                useNativeDriver: true
              }).start()
            }
          })}
        />
        <Tab.Screen
          name="Analysis"
          component={AnalysisScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <FontAwesome5
                  name="chart-bar"
                  size={24}
                  color={focused ? "red" : "black"}
                />
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: e => {
              Animated.spring(tabOffSetValue, {
                toValue: getWidth(),
                useNativeDriver: true
              }).start()
            }
          })}
        />

        <Tab.Screen
          name="EmptyScreen"
          component={EmptyComponent}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  width: 55,
                  height: 55,
                  backgroundColor: "red",
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 40
                }}

              >
                <Feather
                  name="plus"
                  size={26}
                  color="white"
                />
              </View>
            ),
          }}
        >
        </Tab.Screen>


        <Tab.Screen
          name="Budgets"
          component={BudgetScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon name="money" color={focused ? "red" : "black"} size={24} />
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: e => {
              Animated.spring(tabOffSetValue, {
                toValue: getWidth() * 3,
                useNativeDriver: true
              }).start()
            }
          })}
        />
        <Tab.Screen
          name="AccountsCategories"
          component={AccountsCategories}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon name="list-ul" color={focused ? "red" : "black"} size={24} />
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: e => {
              Animated.spring(tabOffSetValue, {
                toValue: getWidth() * 4,
                useNativeDriver: true
              }).start()
            }
          })}
        />
      </Tab.Navigator>
      <Animated.View
        style={{
          width: getWidth() - 20,
          borderRadius: 50,
          height: 2,
          backgroundColor: "red",
          position: "absolute",
          bottom: 90,
          left: 30,
          paddingHorizontal: 20,
          transform: [
            { translateX: tabOffSetValue }
          ],
          alignItems: "center",
          justifyContent: "center",
        }}
      >

      </Animated.View>
      {/* <View
        style={{
          position: 'absolute',
          width: "10%",
          bottom: 0,
          left: "50%",
          right: "50%",
          alignItems: 'center',
          marginBottom: 16,
          borderWidth: 1,
        }}
      >
        <TouchableOpacity>
          <FAB
            icon="plus"
            onPress={() => console.log('Plus button clicked')}
          />
        </TouchableOpacity>
      </View> */}
    </>
  );
};

export default MenuNavigator;
