import React from 'react';
import { Text as RNText } from 'react-native';

const Text = ({ text, fontSize = null, fontWeight = null, color = null }) => {
  const textStyles = {
    fontSize: fontSize || 16,
    fontWeight: fontWeight || 'normal',
    color: color || 'white',
    textAlign : 'center'
  };

  return <RNText style={textStyles}>{text}</RNText>;
};

export default Text;
