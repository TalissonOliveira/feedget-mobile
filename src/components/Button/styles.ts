import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.brand,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 4
  },
  title: {
    color: theme.colors.text_on_brand_color,
    fontFamily: theme.fonts.medium,
    fontSize: 14
  }
})