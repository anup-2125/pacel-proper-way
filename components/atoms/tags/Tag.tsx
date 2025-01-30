import { View, Text } from 'react-native'
import React from 'react'

import colors from '@/constants/colours'
import StyledText, {StyledTextProp} from '@/components/atoms/typography/StyledText'
import {StyledButtonProp} from '@/components/atoms/butttons/StyledButton'
import styled from 'styled-components/native'

interface TagProp extends StyledTextProp {
    bgColor?: string
    borderRadius?: string
    border?: string
}

interface StyledViewProp extends TagProp{

}

const StyledView = styled.View`
    background-color: ${({ bgColor }: StyledViewProp) => bgColor || colors.tirtiry };
`

const StyledTextData: StyledTextProp = {
    color: colors.secondary,
    fontWeight: '600'
}

const Tag:React.FC<TagProp> = ({color, bgColor, border, borderRadius, fontSize, fontWeight, padding,textTransform}) => {
  return (
    <StyledView>
        <StyledText {...StyledTextData}/>
    </StyledView>
  )
}

export default Tag