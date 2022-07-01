import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import Text from './Text';
import colors from '../styles/colors';

const ScrollableTab = props => {
  return (
    <ScrollView horizontal>
      {props.items.map(item => {
        <View style={styles.tabContainer}>
          <View style={styles.iconContainer}>{item.icon}</View>
          <Text
            color={colors.white}
            fontFamily="Roboto-Medium"
            fontSize={12}
            lineHeight={18}
            fontWeight={'500'}>
            {item.tabName}
          </Text>
        </View>;
      })}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  tabContainer: {},
  iconContainer: {},
});
export default ScrollableTab;
