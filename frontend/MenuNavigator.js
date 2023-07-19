import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FAB } from 'react-native-paper';

import RecordsScreen from './screens/RecordScreen';
import AnalysisScreen from './screens/AnalysisScreen';
import BudgetScreen from './screens/BudgetScreen';
import AccountsCategories from './screens/AccountsCategories';

const Tab = createBottomTabNavigator();

const MenuNavigator = () => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          name="Records"
          component={RecordsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="list" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Analysis"
          component={AnalysisScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="line-chart" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Budgets"
          component={BudgetScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="money" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="AccountsCategories"
          component={AccountsCategories}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="list-ul" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          alignItems: 'center',
          marginBottom: 16,
        }}
      >
        <TouchableOpacity>
          <FAB
            icon="plus"
            onPress={() => console.log('Plus button clicked')}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default MenuNavigator;
