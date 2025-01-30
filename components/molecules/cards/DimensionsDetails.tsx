import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import StyledText, { StyledTextProp } from '@/components/atoms/typography/StyledText'
import PrimaryButton from '../buttons/PrimaryButton'
import VerticalLine from '@/components/atoms/lines/VerticalLine'

interface DimensionsDetailsProp {
  length: number,
  breadth: number,
  height: number
}

const Container = styled.View`
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
`

const BoldText: StyledTextProp = {
  fontWeight: 600
}

const DimensionsDetails: React.FC<DimensionsDetailsProp> = ({ length, breadth, height }) => {
  return (
    <Container>
      <View style={{}}>
        <StyledText {...BoldText}>Dimensions(cms):</StyledText>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          <StyledText {...BoldText}>L</StyledText>
          <StyledText>{length}</StyledText>
          <StyledText {...BoldText}>B</StyledText>
          <StyledText>{breadth}</StyledText>
          <StyledText {...BoldText}>H(cms):</StyledText>
          <StyledText>{height}</StyledText>
        </View>
      </View>
      <PrimaryButton text='view details' />
    </Container>
  )
}

export default DimensionsDetails