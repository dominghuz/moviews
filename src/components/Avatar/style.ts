import { theme } from '@/src/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {},
  image:{
    width: 30,
    height: 30,
    borderRadius: 25
  },
  selected:{
    borderWidth:3,
    borderColor: theme.colors.red_400
  }
});