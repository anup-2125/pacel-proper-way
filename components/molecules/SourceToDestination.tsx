import { View, Text } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import styled from 'styled-components/native'
import StyledText, { StyledTextProp } from '../atoms/typography/StyledText'
import colors from '@/constants/colours'

interface SourceToDestinationProp {
    source: string,
    destination: string
}

const Container = styled.View`
    flex-direction: row;
    gap: 4px;
    align-items: center;
`

const StyledTextData: StyledTextProp = {
    fontSize: 14,
    fontWeight: 800,
    textTransform: 'capitalize'
}

const SourceToDestination: React.FC<SourceToDestinationProp> = ({ source, destination }) => {
    return (
        <Container>
            <StyledText {...StyledTextData}>{source}</StyledText>
            <MaterialIcons name='arrow-forward' color={colors.secondary} size={20} />
            <StyledText {...StyledTextData}>{destination}</StyledText>
        </Container>
    )
}

export default SourceToDestination