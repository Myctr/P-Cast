import React, {useEffect} from 'react';
import {View, StatusBar, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../../styles/browsePodcastStyles';
import {LiteLogo} from '../../components/Logo';
import Text from '../../components/Text';
import SearchBar from '../../components/SearchBar';
import ScrollableTab from '../../components/ScrollableTab';
import colors from '../../styles/colors';
const BrowsePodcastView = props => {
  useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.logoContainer}>
        <LiteLogo />
      </View>
      <View style={styles.heroContainer}>
        <Text
          color={colors.white}
          fontFamily="Roboto-Medium"
          fontSize={48}
          lineHeight={56.25}
          fontWeight={'700'}>
          Browse
        </Text>
      </View>
      <View style={styles.searchBarContainer}>
        <SearchBar />
      </View>
      <View style={styles.scrollableTabContainer}>
        <ScrollableTab items={[]} />
      </View>
    </View>
  );
};

export default BrowsePodcastView;
