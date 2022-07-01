import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import colors from '../styles/colors';

const ActivityIndicatorA = () => {
  return (
    <ActivityIndicator
      style={styles.container}
      color={colors.white}
      size="large"
    />
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 1,
  },
});

export default ActivityIndicatorA;
