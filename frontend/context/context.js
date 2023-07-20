import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const initialState = {
    name: "",
    accounts: [
      {
        accountName: "",
        accountBalance: "",
        accountImage: ""
      },
    ],
    incomeCategories: [
      {
        categoryName: "",
        categoryImage: "",
        budget: undefined
      }
    ],
    expenseCategory: [
      {
        categoryImage: "",
        categoryName: "",
        budget: undefined
      }
    ],
    totalIncome: undefined,
    totalExpense: undefined,
    incomeRecord: [
      {
        category: "",
        amount: undefined,
        categoryImage: "",
        bank: "",
        notes: "",
        date: undefined,
        time: undefined,
      }
    ],
    expenseRecord: [
      {
        category: "",
        amount: undefined,
        categoryImage: "",
        bank: "",
        notes: "",
        date: undefined,
        time: undefined
      }
    ]
  };

  // Load state from local storage on app startup
  const [appState, setAppState] = useState(initialState);

  useEffect(() => {
    const loadAppState = async () => {
      try {
        const storedState = await AsyncStorage.getItem('appState');
        if (storedState) {
          setAppState(JSON.parse(storedState));
        }
      } catch (error) {
        console.log("Error loading state from local storage:", error);
      }
    };

    loadAppState();
  }, []);

  // Save state to local storage whenever it changes
  useEffect(() => {
    const saveAppState = async () => {
      try {
        await AsyncStorage.setItem('appState', JSON.stringify(appState));
      } catch (error) {
        console.log("Error saving state to local storage:", error);
      }
    };

    saveAppState();
  }, [appState]);

  return (
    <MyContext.Provider value={{ appState, setAppState }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
