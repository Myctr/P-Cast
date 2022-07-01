import React from 'react';
import {TextInput as TextInputRn, View, StyleSheet} from 'react-native';
import colors from '../styles/colors';

const TextInput = props => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>{props.icon}</View>
      <TextInputRn
        style={styles.textInput}
        value={props.value}
        onChangeText={props.setValue}
        secureTextEntry={props.secureTextEntry}
        icon={props.icon}
        keyboardType={'email-address'}
        placeholder={props.placeholder}
        placeholderTextColor={colors.placeholderText}
        autoCapitalize={props.autoCapitalize}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 58,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    borderWidth: 1,
    borderColor: colors.whiteBlur,
    flexDirection: 'row',
    padding: 10,
  },
  iconContainer: {
    justifyContent: 'center',
    marginRight: 10,
  },
  textInput: {
    color: colors.white,
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    fontWeight: '400',
  },
});
export default TextInput;
