import {StyleSheet} from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  podcastBg: {
    width: '100%',
    height: 374,
  },
  navigationBarContainer: {
    marginHorizontal: 25,
    marginTop: 50,
  },
  heroContainer: {
    alignItems: 'center',
    marginTop: 80,
  },
  authorsContainer: {alignItems: 'center', marginTop: 10},
  indicatorsContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-evenly',
    bottom: 0,
  },
  indicators: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  podcastDetailsBackground: {
    backgroundColor: colors.placeholderText,
  },
  podcastDetailsContainer: {
    backgroundColor: colors.background,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
  },
  sliderIndicatorContainer: {
    alignItems: 'center',
  },
  sliderSelected: {
    backgroundColor: colors.submitBlue,
    height: 3,
  },
  sliderUnselected: {
    backgroundColor: colors.white,
    height: 3,
  },
  statisticsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    paddingHorizontal: 10,
    marginHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.placeholderText,
  },
  statistic: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 60,
    justifyContent: 'space-around',
  },
  podcastDetailsButtonsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  detailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  detailsIconContainer: {marginRight: 10},
  detailsButtonsLeft: {
    flexDirection: 'row',
  },
  podcastNotesContainer: {
    margin: 15,
  },
});

export default styles;
