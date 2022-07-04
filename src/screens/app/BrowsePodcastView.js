import React, {useEffect, useState} from 'react';
import {View, StatusBar, ScrollView} from 'react-native';
//STORING & NETWORK
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
//COMPONENTS
import {
  ScrollableTab,
  SearchBar,
  Text,
  LiteLogo,
  PodcastListItem,
  ActivityIndicator,
} from '../../components';
//CONSTANTS
import {base_url, search} from '../../constants/API_URL';

//STYLES
import styles from '../../styles/browsePodcastStyles';

import colors from '../../styles/colors';

const BrowsePodcastView = props => {
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [pcastData, setPcastData] = useState([]);

  useEffect(() => {
    searchHandler();
  }, []);
  const searchHandler = async () => {
    setLoading(true);
    const token = await AsyncStorage.getItem('token');
    let url = base_url + search + '?text=' + searchText;
    axios
      .get(url, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then(res => {
        setPcastData(res.data);
        setLoading(false);
      })
      .catch(err => {
        alert(err);
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      {loading && <ActivityIndicator />}
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
        <SearchBar
          value={searchText}
          setValue={setSearchText}
          onEndEditing={searchHandler}
        />
      </View>
      <View style={styles.scrollableTabContainer}>
        <ScrollableTab />
      </View>
      <View style={styles.podcastItemsContainer}>
        <View style={styles.podcastListHeaderContainer}>
          <Text
            color={colors.placeholderText}
            fontFamily="Roboto-Medium"
            fontSize={16}
            lineHeight={18.75}
            fontWeight={'500'}>
            Podcasts ({pcastData.length})
          </Text>
        </View>
        <ScrollView>
          {pcastData.map(item => {
            return (
              <PodcastListItem data={item} key={pcastData.indexOf(item)} />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default BrowsePodcastView;
