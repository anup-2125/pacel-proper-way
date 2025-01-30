import React from 'react'
import colors from '@/constants/colours'
import styled from 'styled-components/native'

interface TagProp {
  text: string
  bgColor?: string
}

const StyledView = styled.View`
  /* background-color: ${({ bgColor }: { bgColor: string }) => bgColor || colors.tirtiry}; */
  background-color: ${colors.tirtiry};
  border-radius: 50px;
`

const StyledText = styled.Text`
  color: ${colors.secondary};
  text-transform: capitalize;
  padding: 4px 12px;
  font-weight: 600;
  font-size: 18;
  margin: 2px 4px;
`


const Tag: React.FC<TagProp> = ({ text, bgColor }) => {
  return (
    <StyledView bgColor={bgColor}>
      <StyledText>{text}</StyledText>
    </StyledView>
  )
}

export default Tag