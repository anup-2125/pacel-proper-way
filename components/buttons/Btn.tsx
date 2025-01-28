import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import colors from '@/constants/colours'


interface styledPressableProp {
    bgColor: string,
    borderRadius?: string 
}

const StyledPressable = styled.Pressable<styledPressableProp>`
    background-color: ${({ bgColor }) => bgColor};
    border-radius: ${({ borderRadius }) => borderRadius || '6px' };
`

interface styledTextProp {
    textColor: string,
    fontSize?: string,
    fontWeight?: string,
    padding?: string
}

const StyledText = styled.Text<styledTextProp>`
    color: ${({ textColor }) => textColor};
    padding: ${({ padding }) => padding || '12px 20px' };
    ${({ fontSize }) => fontSize && `font-size: ${fontSize};`}
    ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight};`}

`

interface btnProp {
    bgColor: string,
    text: string,
    textColor: string,
    fontSize?: string,
    fontWeight?: string,
    borderRadius?: string
}

const Btn: React.FC<btnProp> = ({ bgColor, text, textColor, fontSize, fontWeight, borderRadius}) => {
    return (
        <StyledPressable bgColor={bgColor} borderRadius={borderRadius}>
            <StyledText textColor={textColor} fontWeight= {fontWeight} fontSize={fontSize}>
                {text}
            </StyledText>
        </StyledPressable>
    )
}

export default Btn;