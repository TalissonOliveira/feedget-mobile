import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  image: {
    width: 36,
    height: 36,
    marginTop: 42,
    marginBottom: 10
  },
  title: {
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.medium,
    fontSize: 20,
    marginBottom: 24
  },
  button: {
    backgroundColor: theme.colors.surface_secondary,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    marginBottom: 48,
    borderRadius: 4
  },
  buttonTitle: {
    fontSize: 14,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary
  }
})