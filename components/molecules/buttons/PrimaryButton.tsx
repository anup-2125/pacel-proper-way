import { View, Text } from 'react-native'
import React from 'react'
import StyledButton from '@/components/atoms/butttons/StyledButton'
import colors from '@/constants/colours'


interface PrimaryButtonProp {
  text: string
}

const PrimaryButton: React.FC<PrimaryButtonProp> = ({ text }) => {
  return (
    <StyledButton text={text} textTransform='capitalize' bgColor={colors.secondary} textColor='#fff' fontSize={16} />
  )
}

export default PrimaryButton