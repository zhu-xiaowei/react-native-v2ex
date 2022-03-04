import React, { useState } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, ViewStyle, TextStyle } from 'react-native'

import { translate } from '@src/i18n'
import { useTheme } from '@src/theme'
import { IState, ITheme, V2exObject } from '@src/types'
import * as CompS from '../components'
import { Text, Spinner } from '@src/components'
import { ThemeScreenProps as ScreenProps } from '@src/navigation/routes'

const Theme = ({ route, navigation, loading }: ScreenProps) => {
  const { theme } = useTheme()
  return (
    <View>
      <Text>Hello, Theme.</Text>
    </View>
  )
}

/**
 * @description styles settings
 */
const styles = {
  container: (theme: ITheme): ViewStyle => ({
    flex: 1
  })
}

/**
 * default props
 */
Theme.defaultProps = {
  loading: false
}

const mapStateToProps = ({ ui: { login } }: { ui: IState.UIState }) => {
  const { error, success, loading } = login
  return { error, success, loading }
}

export default connect(mapStateToProps)(Theme)