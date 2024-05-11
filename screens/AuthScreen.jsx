import {StyleSheet, Text, View, Button, Pressable} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {OtpInput} from 'react-native-otp-entry';
import globalStylings from '../utils/constants';

export default function AuthScreen({navigation}) {
  const [otpFilled, setOtpFilled] = useState('');
  const [correctOtp, setCorrectOtp] = useState(true);

  const onFilledOtp = text => {
    console.log(text);
    setOtpFilled(text);
  };

  const correctOtpredirection = () => {
    if (otpFilled == '12345') {
      navigation.navigate('Chatbot-screen');
      setCorrectOtp(true);
    } else {
      setCorrectOtp(false);
    }
  };

  return (
    <View>
      <SafeAreaView>
        <View style={styles.screenContainer}>
          <Text style={{fontSize: 18}}>Enter Security Code To Proceed</Text>
          <OtpInput
            numberOfDigits={5}
            // onTextChange={text => console.log(text)}
            focusColor={'red'}
            focusStickBlinkingDuration={500}
            onFilled={onFilledOtp}
            textInputProps={{
              accessibilityLabel: 'One-Time Password',
            }}
            theme={{
              containerStyle: styles.otpRootContainer,
              pinCodeContainerStyle: styles.pinCodeContainerStyle,
              pinCodeTextStyle: styles.pinCodeText,
            }}
          />
          {!correctOtp && <Text>wrong Code</Text>}
          <Pressable
            style={({pressed}) => pressed && styles.clickedStyle}
            onPress={correctOtpredirection}>
            <View style={styles.submitBtn}>
              <Text style={{color: 'white', fontSize: 18}}>Submit Code</Text>
            </View>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    paddingHorizontal: '5%',
  },
  otpRootContainer: {
    marginTop: '2%',
  },
  pinCodeContainerStyle: {
    borderColor: 'grey',
    borderWidth: 1,
  },
  pinCodeText: {},
  submitBtn: {
    width: '100%',
    height: '43%',
    marginTop: 10,
    backgroundColor: globalStylings.chatHeader,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  clickedStyle: {
    opacity: 0.5,
  },
});
