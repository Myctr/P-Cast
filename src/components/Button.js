import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';
import colors from '../styles/colors';

const Button = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      {props.children}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 51,
    backgroundColor: colors.submitBlue,
    borderRadius: 99,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.submitBlue,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.7,
    shadowRadius: 9,

    elevation: 10,
  },
});
export default Button;
