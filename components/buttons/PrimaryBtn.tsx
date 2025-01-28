import { View, Text } from 'react-native'
import React from 'react'
import Btn from './Btn'
import colors from '@/constants/colours'

interface primaryBtnProp {
    text: string
}

const PrimaryBtn: React.FC<{text: string}> = ({text}) => {
  return (
    <Btn bgColor={colors.secondary} text={text} textColor='white'/>
  )
}

export default PrimaryBtn