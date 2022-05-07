import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    alignItems: 'center'
  },
  header: {
    flexDirection: 'row',
    marginVertical: 16
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 8
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 24
  },
  titleText: {
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.medium,
    fontSize: 20
  },
  input: {
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.regular,
    height: 112,
    padding: 12,
    marginBottom: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: theme.colors.stroke
  },
  footer: {
    flexDirection: 'row',
    marginBottom: 16
  }
})