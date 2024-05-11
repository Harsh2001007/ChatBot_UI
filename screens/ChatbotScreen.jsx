import {StyleSheet, Text, View, ScrollView, Pressable} from 'react-native';
import React, {useState} from 'react';
import globalStylings from '../utils/constants';
import IconComp from '../components/IconComp';
import ChatInput from '../components/ChatInput';
import userChatArray from '../utils/chatArray';

export default function ChatbotScreen({navigation}) {
  const [chatMessage, setChatMessage] = useState('');
  const handleChatInputCompValue = newMsg => {
    setChatMessage(newMsg);
  };

  const closeBtnHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <View style={styles.headerMenuView}>
          <IconComp
            iconName={'dots-vertical'}
            iconColor={'white'}
            iconSize={38}
          />
        </View>
        <View style={styles.headerChatInfoView}>
          <IconComp iconName={'robot-love'} iconSize={42} iconColor={'white'} />
          <Text style={{color: 'white', fontSize: 28}}>ID.me Chatbot AIs</Text>
        </View>
        <View style={styles.headerCloseView}>
          <IconComp
            iconName={'close-box-outline'}
            iconSize={28}
            iconColor={'white'}
            onPress={closeBtnHandler}
          />
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.chatScreen}>
        <Text>{chatMessage}</Text>
      </ScrollView>
      <View style={styles.chatInputs}>
        <IconComp iconName={'menu'} iconColor={'grey'} iconSize={28} />
        <IconComp
          iconName={'reload'}
          iconColor={'grey'}
          iconSize={28}
          style={{marginLeft: 7}}
        />
        <ChatInput
          iconName={'paperclip'}
          iconColor={'grey'}
          iconSize={20}
          chatInputComp={handleChatInputCompValue}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerView: {
    height: '10%',
    width: '100%',
    backgroundColor: globalStylings.chatHeader,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerMenuView: {marginRight: 18},
  headerChatInfoView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 18,
    borderColor: 'red',
    borderWidth: 2,
  },
  headerCloseView: {},
  chatScreen: {
    borderWidth: 1,
    borderColor: 'red',
    height: '99%',
  },
  chatInputs: {
    height: '7%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: '95%',
    paddingHorizontal: 8,
  },
});
