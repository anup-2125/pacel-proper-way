import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import StyledText, {StyledTextProp} from '@/components/atoms/typography/StyledText'


// Prop interfaces
export interface StyledPressableProp {
    bgColor: string,
    borderRadius: string,
    border: string
}

export interface StyledButtonProp extends Omit<StyledTextProp, 'color' | 'padding'> {
  text: string,
  textColor?: string,
  bgColor?: string,
  borderRadius?: string,
  border?: string,
}

// Styled-components
const StyledPressable = styled.Pressable<StyledPressableProp>`
    background-color: ${({ bgColor }: StyledPressableProp) => bgColor || '#232323'};
    border-radius: ${({ borderRadius }: StyledPressableProp) => borderRadius || '8px' };
    ${({ border }: StyledPressableProp) => border && `border: ${border};`}
    min-width: 120px;
    max-width: 140px;
    align-items: center;
    justify-content: center;
`

const StyledButton: React.FC<StyledButtonProp>  = ({text, textColor, bgColor, borderRadius, border, textTransform, fontSize, fontWeight}) => {
  return (
    <StyledPressable bgColor={bgColor} borderRadius={borderRadius} border={border}>
        <StyledText padding={'14px 20px'} color={textColor}  textTransform={textTransform} fontSize={fontSize} fontWeight={fontWeight} >
            {text}
        </StyledText>
    </StyledPressable>
  )
}

export default StyledButton;