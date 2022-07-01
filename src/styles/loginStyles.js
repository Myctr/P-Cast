import {StyleSheet, Dimensions} from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
  formContainer: {
    flex: 1,
    marginRight: 50,
    marginBottom: 50,
    backgroundColor: colors.background,
    borderBottomRightRadius: 24,
    paddingHorizontal: 25,
    justifyContent: 'space-around',
  },
  logoContainer: {marginTop: 50},
  heroContainer: {
    width: 195,
    height: 60,
    marginTop: 50,
  },
  textInputsContainer: {
    marginTop: 100,
    height: 130,
    justifyContent: 'space-between',
  },
  submitButtonContainer: {marginTop: 20},
});

export default styles;
