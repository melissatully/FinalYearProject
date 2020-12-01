import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../utils/colors';

export default function IconButton({ iconName, color, size, onPress, style }) {
  return (
    <TouchableOpacity style={[style]} onPress={onPress}>
      <MaterialCommunityIcons name={iconName} size={size} color={Colors.primary} />
    </TouchableOpacity>
  );
}
