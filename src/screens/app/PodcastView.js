import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
//COMPONENTS
import {NavigationBar, Text} from '../../components';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import SoundPlayer from 'react-native-sound-player';
import {
  ReverseIcon,
  ForwardIcon,
  PauseIcon,
  PlayIcon,
  SliderIndicatorIcon,
  LikeIcon,
  UnlikeIcon,
  MusicIcon,
  DownloadIcon,
  MoreIcon,
} from '../../components/Icons';
//CONSTANTS
//STYLES
import styles from '../../styles/podcastStyles';
import colors from '../../styles/colors';
//ASSETS
import podcast_bg from '../../../assets/png/podcast_bg.png';
import author_1 from '../../../assets/png/author_1.png';
import author_2 from '../../../assets/png/author_2.png';

const PodcastView = props => {
  const [playing, setPlaying] = useState(false);
  const [playeInfo, setPlayerInfo] = useState({
    currentTime: 0,
    duration: 10,
  });

  let item = props.route.params.item;

  const backClicked = () => {
    props.navigation.goBack();
  };

  useEffect(() => {
    SoundPlayer.loadUrl(item.audio_url);
  }, []);

  const menuClicked = () => {};

  const reverseClicked = async () => {
    let info = await SoundPlayer.getInfo();
    SoundPlayer.seek(Math.floor(info.currentTime - 30));
    getInfo();
  };
  const forwardClicked = async () => {
    let info = await SoundPlayer.getInfo();
    SoundPlayer.seek(Math.floor(info.currentTime + 30));
    getInfo();
  };
  const playPauseClicked = () => {
    if (playing) {
      SoundPlayer.pause();
      setPlaying(false);
    } else {
      SoundPlayer.resume();
      setPlaying(true);
    }
  };
  const sliderValuesChange = async value => {
    SoundPlayer.seek(value[0]);
  };

  const getInfo = async () => {
    let info = await SoundPlayer.getInfo();
    setPlayerInfo(info);
  };
  const timeConverter = seconds => {
    return [3600, 60]
      .reduceRight(
        (pipeline, breakpoint) => remainder =>
          [Math.floor(remainder / breakpoint)].concat(
            pipeline(remainder % breakpoint),
          ),
        r => [r],
      )(seconds)
      .map(amount => amount.toString().padStart(2, '0'))
      .join(':');
  };

  setTimeout(() => {
    getInfo();
  }, 1000);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.podcastBg} source={podcast_bg}>
        <View style={styles.navigationBarContainer}>
          <NavigationBar backClicked={backClicked} />
        </View>
        <View style={styles.heroContainer}>
          <Text
            color={colors.white}
            fontFamily="Roboto-Medium"
            fontSize={24}
            lineHeight={30}
            fontWeight={'500'}>
            {item.title}
          </Text>
        </View>
        <View style={styles.authorsContainer}>
          <Text
            color={colors.placeholderText}
            fontFamily="Roboto-Medium"
            fontSize={14}
            lineHeight={23.8}
            fontWeight={'400'}>
            {item.author}
          </Text>
        </View>
        <View style={styles.indicatorsContainer}>
          <Image source={author_1} />
          <View style={styles.indicators}>
            <TouchableOpacity onPress={reverseClicked}>
              <ReverseIcon />
            </TouchableOpacity>
            <TouchableOpacity onPress={playPauseClicked}>
              {playing ? <PauseIcon /> : <PlayIcon />}
            </TouchableOpacity>
            <TouchableOpacity onPress={forwardClicked}>
              <ForwardIcon />
            </TouchableOpacity>
          </View>

          <Image source={author_2} />
        </View>
      </ImageBackground>
      <View style={styles.podcastDetailsBackground}>
        <View style={styles.podcastDetailsContainer}>
          <View style={styles.sliderIndicatorContainer}>
            <MultiSlider
              min={0}
              max={Math.floor(playeInfo.duration)}
              values={[Math.floor(playeInfo.currentTime)]}
              onValuesChangeFinish={sliderValuesChange}
              selectedStyle={styles.sliderSelected}
              unselectedStyle={styles.sliderUnselected}
              customMarker={() => {
                return <SliderIndicatorIcon />;
              }}
            />
          </View>
          <View style={styles.statisticsContainer}>
            <TouchableOpacity style={styles.statistic}>
              <LikeIcon />
              <Text
                color={colors.white}
                fontFamily="Roboto-Medium"
                fontSize={12}
                lineHeight={20.4}
                fontWeight={'400'}>
                {item.likes}
              </Text>
            </TouchableOpacity>
            <View style={styles.statistic}>
              <Text
                color={colors.white}
                fontFamily="Roboto-Medium"
                fontSize={14}
                lineHeight={23.8}
                fontWeight={'500'}>
                {timeConverter(Math.floor(playeInfo.currentTime))}
              </Text>
            </View>
            <TouchableOpacity style={styles.statistic}>
              <UnlikeIcon />
              <Text
                color={colors.placeholderText}
                fontFamily="Roboto-Medium"
                fontSize={12}
                lineHeight={20.4}
                fontWeight={'400'}>
                {item.dislikes}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.podcastDetailsButtonsContainer}>
            <View style={styles.detailsButtonsLeft}>
              <TouchableOpacity style={styles.detailsButton}>
                <View style={styles.detailsIconContainer}>
                  <MusicIcon />
                </View>

                <Text
                  color={colors.placeholderText}
                  fontFamily="Roboto-Medium"
                  fontSize={14}
                  lineHeight={18}
                  fontWeight={'400'}>
                  Episode 2
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.detailsButton}>
                <View style={styles.detailsIconContainer}>
                  <DownloadIcon />
                </View>
                <Text
                  color={colors.placeholderText}
                  fontFamily="Roboto-Medium"
                  fontSize={14}
                  lineHeight={18}
                  fontWeight={'400'}>
                  50 mb
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.detailsButton}>
              <View style={styles.detailsIconContainer}>
                <MoreIcon />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.podcastNotesContainer}>
            <Text
              color={colors.placeholderText}
              fontFamily="Roboto-Medium"
              fontSize={13}
              lineHeight={22.1}
              fontWeight={'400'}>
              {item.description}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default PodcastView;
