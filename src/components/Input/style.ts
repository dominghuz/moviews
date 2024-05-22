import { theme } from '@/src/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  input: {
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 15,
    borderColor: theme.colors.gray_600,
    borderRadius: theme.borderRadius.full,
    marginRight: 50,
    marginLeft: 50,
    marginTop: 5,
    marginBottom: 5 
  },
  field: {
    color:  theme.colors.gray_400
  },
});