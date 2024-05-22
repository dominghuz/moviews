import { theme } from '@/src/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.red_400,
    padding: 15,
    marginRight: 50,
    marginLeft: 50,
    marginTop: 5,
    marginBottom: 5 ,
    borderRadius: theme.borderRadius.full,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: theme.fonts.size.body.md,
    color: theme.colors.white,
  }
});