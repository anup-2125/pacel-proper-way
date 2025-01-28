import { View, Text } from 'react-native'
import React from 'react'
import Btn from '@/components/buttons/Btn'
import colors from '@/constants/colours'

interface tagProp {
    text: string
}

const Tag:React.FC<tagProp> = ({text}) => {
  return (
    <Btn text={text} bgColor={colors.tirtiry} textColor={colors.secondary} borderRadius='100px'fontWeight='500' fontSize='20'/>

  )
}

export default Tag