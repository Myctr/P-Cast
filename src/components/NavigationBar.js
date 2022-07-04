import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {MenuIcon, BackIcon} from './Icons';

const NavigationBar = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.backClicked}>
        <BackIcon />
      </TouchableOpacity>
      <TouchableOpacity onPress={props.menuClicked}>
        <MenuIcon />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default NavigationBar;
