import React, {useState} from 'react';
import {ScrollView, View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  CategoriesIcon,
  TopicsIcon,
  AuthorsIcon,
  PodcastsIcon,
  EpisodesIcon,
} from '../components/Icons';

const ScrollableTab = props => {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <ScrollView horizontal>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <CategoriesIcon type={selectedTab == 0} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <TopicsIcon type={selectedTab == 1} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setSelectedTab(2);
          }}>
          <AuthorsIcon type={selectedTab == 2} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setSelectedTab(3);
          }}>
          <PodcastsIcon type={selectedTab == 3} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setSelectedTab(4);
          }}>
          <EpisodesIcon type={selectedTab == 4} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  tabContainer: {flexDirection: 'row'},
  tab: {margin: 15},
});
export default ScrollableTab;
