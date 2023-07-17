import React from 'react';
import { View, TextInput, Text } from 'react-native';

const Credentials = ({
  value,
  onChangeText,
  placeholder = '',
  label = '',
  secureTextEntry = false,
}) => {
  return (
    <View style={{ width : "90%" }} >
      {label !== '' && <Text>{label}</Text>}
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: 'rgba( 0 , 0 , 0 , 0.6 )',
          padding: 10,
          borderRadius: 15,
        }}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry} // This controls whether the input is password type
      />
    </View>
  );
};

export default Credentials;
