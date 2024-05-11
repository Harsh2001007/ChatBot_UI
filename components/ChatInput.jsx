import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import userChatArray from '../utils/chatArray';

export default function ChatInput({
  iconName,
  iconColor,
  iconSize,
  chatInputComp,
}) {
  const [message, setMessage] = useState('');
  const [userChat, setUserChat] = useState([]);

  const inputHandler = text => {
    setMessage(text);
  };

  const chatHandler = () => {
    chatInputComp(message);
  };

  return (
    <View style={styles.chatInputContainer}>
      <TextInput
        style={styles.chatInput}
        color={'black'}
        onChangeText={inputHandler}
        value={message}
      />
      <Pressable onPress={chatHandler}>
        <Feather name={iconName} color={iconColor} size={iconSize} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  chatInput: {
    width: '90%',
    height: '100%',
  },
  chatInputContainer: {
    borderColor: 'grey',
    flexDirection: 'row',
    width: '75%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D8D9DA',
    borderRadius: 8,
    marginLeft: 10,
    borderWidth: 1,
  },
});
