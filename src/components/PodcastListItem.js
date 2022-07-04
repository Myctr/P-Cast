import React from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Text from './Text';
import podcast_bg from '../../assets/png/podcast_bg.png';
import colors from '../styles/colors';
import PlayIcon from './Icons/PlayIcon';

const PodcastListItem = ({data}) => {
  return (
    <TouchableOpacity>
      <ImageBackground style={styles.background} source={podcast_bg}>
        <View style={styles.headerContainer}>
          <Text
            color={colors.white}
            fontFamily="Roboto-Medium"
            fontSize={24}
            lineHeight={30}
            fontWeight={'500'}>
            {data.title}
          </Text>
        </View>

        <View style={styles.detailsContainer}>
          <View>
            <Text
              color={colors.placeholderText}
              fontFamily="Roboto-Medium"
              fontSize={13}
              lineHeight={22}
              fontWeight={'300'}>
              23.05.2019 24:15:05
            </Text>
            <Text
              color={colors.white}
              fontFamily="Roboto-Medium"
              fontSize={13}
              lineHeight={22.1}
              fontWeight={'400'}>
              {data.author}
            </Text>
          </View>
          <PlayIcon />
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  background: {
    width: 309,
    height: 180,
    paddingHorizontal: 25,
    justifyContent: 'space-around',
    margin: 25,
  },
  headerContainer: {marginTop: 30},
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
export default PodcastListItem;
