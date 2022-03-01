import React, { useContext } from 'react'
import { TextInput, View, ViewPropTypes, TextInputProps as NativeTextInputProps, ViewStyle, TextStyle } from 'react-native'
import PropTypes from 'prop-types'
import { Text } from './Text'
import { ThemeContext } from '@src/theme'
import { ITheme } from '@src/types'

export interface TextInputProps extends NativeTextInputProps {
  label: string
  assignRef?: (ref: TextInput) => void
  containerStyle?: ViewStyle
  labelStyle?: ViewStyle
  inputStyle?: ViewStyle
}

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  assignRef,
  containerStyle,
  labelStyle,
  inputStyle,
  ...props
}: TextInputProps) => {
  const theme = useContext(ThemeContext)

  return (
    <View style={[styles.containerStyle(theme), containerStyle]}>
      {label && (
        <Text type="heading" style={[styles.labelStyle(theme), labelStyle]}>
          {label}
        </Text>
      )}
      <TextInput
        {...props}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.bodyText}
        autoCorrect={false}
        style={[styles.inputStyle(theme), inputStyle]}
        value={value}
        onChangeText={onChangeText}
        ref={(component: TextInput) => {
          assignRef && assignRef(component)
        }}
      />
    </View>
  )
}

const styles = {
  containerStyle: (_theme: ITheme): ViewStyle => ({
    height: _theme.dimens.defaultInputBoxHeight,
    backgroundColor: _theme.colors.surface,
    borderWidth: 1,
    borderColor: _theme.colors.border,
    flexDirection: 'row',
    alignItems: 'center'
  }),
  inputStyle: (_theme: ITheme): TextStyle => ({
    color: _theme.colors.titleText,
    padding: _theme.spacing.small,
    flex: 2
  }),
  labelStyle: (_theme: ITheme): ViewStyle => ({
    paddingLeft: _theme.spacing.large,
    flex: 1
  })
}

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  containerStyle: ViewPropTypes.style,
  assignRef: PropTypes.func
}

Input.defaultProps = {
  label: null,
  value: '',
  placeholder: '',
  secureTextEntry: false,
  assignRef: () => {},
  onChangeText: () => {}
}

export { Input }