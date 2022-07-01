import React, {useState} from 'react';
import {
  View,
  StatusBar,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
//STORING & NETWORK
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
//COMPONENTS
import {Logo} from '../../components/Logo';
import Text from '../../components/Text';
import TextInput from '../../components/TextInput';
import EmailIcon from '../../components/Icons/EmailIcon';
import PasswordIcon from '../../components/Icons/PasswordIcon';
import Button from '../../components/Button';
import ActivityIndicator from '../../components/ActivityIndicator';
//CONSTANTS
import {base_url, login} from '../../constants/API_URL';
//ASSETS
import login_bg from '../../../assets/png/login_bg.png';
//STYLES
import styles from '../../styles/loginStyles';
import colors from '../../styles/colors';
const LoginView = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const loginButtonClicked = async () => {
    setLoading(true);
    axios
      .post(base_url + login, {
        email: email,
        password: password,
      })
      .then(res => {
        if (res.data.access_token) {
          AsyncStorage.setItem('token', res.data.access_token);
          props.navigation.reset({
            index: 0,
            routes: [{name: 'AppStack'}],
          });
        } else {
          alert('Username or password is wrong!');
        }
        setLoading(false);
      })
      .catch(err => {
        alert(err);
        setLoading(false);
      });
  };

  return (
    <ImageBackground style={styles.container} source={login_bg}>
      <StatusBar barStyle={'light-content'} />
      {loading && <ActivityIndicator />}

      <View style={styles.formContainer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <ScrollView>
            <View style={styles.logoContainer}>
              <Logo />
            </View>

            <View style={styles.heroContainer}>
              <Text
                color={colors.white}
                fontFamily="Roboto-Medium"
                fontSize={24}
                lineHeight={30}
                fontWeight={'500'}>
                Episodic series of digital audio.
              </Text>
            </View>
            {/*TODO:Formik ve yup kullanılarak validasyon yapılabilir */}
            <View style={styles.textInputsContainer}>
              <TextInput
                value={email}
                setValue={setEmail}
                icon={<EmailIcon />}
                keyboardType={'email-address'}
                placeholder={'E-mail address'}
                autoCapitalize={'none'}
              />

              <TextInput
                value={password}
                setValue={setPassword}
                icon={<PasswordIcon />}
                keyboardType={'default'}
                placeholder={'Password'}
                autoCapitalize={'none'}
                secureTextEntry={true}
              />
            </View>

            <View style={styles.submitButtonContainer}>
              <Button onPress={loginButtonClicked}>
                <Text
                  color={colors.white}
                  fontFamily="Roboto-Medium"
                  fontSize={16}
                  lineHeight={27.2}
                  fontWeight={'500'}>
                  Login
                </Text>
              </Button>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
};

export default LoginView;
