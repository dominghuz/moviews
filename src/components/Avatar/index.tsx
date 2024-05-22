import React from 'react';
import { Image, ImageProps, View } from 'react-native';

import { styles } from './style';

export function Avatar({selected, ...rest}: AvatarProps & ImageProps) {
  return (
    <View style={styles.container}>
        <Image style={[styles.image, selected && styles.selected]} {...rest}/>
    </View>
  );
}