import React from 'react';
import {TextInput as TextInputRn, View, StyleSheet} from 'react-native';
import colors from '../styles/colors';
import SearchSvg from '../../assets/svg/search.svg';
const SearchBar = props => {
  return (
    <View style={styles.container}>
      <TextInputRn
        style={styles.textInput}
        value={props.value}
        onChangeText={props.setValue}
        keyboardType={'default'}
        placeholder={'Search'}
        placeholderTextColor={colors.placeholderText}
        autoCapitalize={true}
        returnKeyType="search"
      />
      <View style={styles.iconContainer}>
        <SearchSvg />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    borderRadius: 16,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: colors.black,
    justifyContent: 'space-between',
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
export default SearchBar;
