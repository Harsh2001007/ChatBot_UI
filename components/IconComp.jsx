import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function IconComp({
  iconName,
  iconSize,
  iconColor,
  style,
  onPress,
}) {
  return (
    <Pressable style={style} onPress={onPress}>
      <MaterialCommunityIcon
        name={iconName}
        size={iconSize}
        color={iconColor}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({});
