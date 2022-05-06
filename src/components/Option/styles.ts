import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.surface_secondary,
    width: 104,
    height: 112,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    marginHorizontal: 8,
    borderRadius: 8
  },
  image: {
    width: 40,
    height: 40
  },
  title: {
    color: theme.colors.text_primary,
    fontSize: 14,
    fontFamily: theme.fonts.medium,
    marginTop: 8
  }
})