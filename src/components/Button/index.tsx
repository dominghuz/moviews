import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './style';
import { router } from 'expo-router';

export function Button() {
  function login(){
    router.push('home')
  }
  return (
    <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.text}>Sign In</Text>
    </TouchableOpacity>
  );
}