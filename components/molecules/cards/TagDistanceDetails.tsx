import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import StyledText, { StyledTextProp } from '@/components/atoms/typography/StyledText'
import Tag from '@/components/atoms/tags/Tag'
import VerticalLine from '@/components/atoms/lines/VerticalLine'
import SourceToDestination from '../SourceToDestination'
import colors from '@/constants/colours'

const StyledView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
    max-height: 80px;
    width: 100%;

`

const TagDistanceContainer = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    gap: 8px;
    align-items: center;
    padding: 12px 0;
`


interface TagDistanceDetailsProp {
    tagName: string,
    source: string,
    destination: string,
    distance: number,
    price: number
}


const TagDistanceDetails: React.FC<TagDistanceDetailsProp> = ({ tagName, source, destination, distance, price }) => {
    return (
        <StyledView>
            <TagDistanceContainer>
                <Tag text={tagName} />
                <StyledText>|</StyledText>
                <SourceToDestination source={source} destination={destination} />
                <StyledText fontSize={12} fontWeight={500} color={colors.secondary}>{distance}Km</StyledText>
            </TagDistanceContainer>
            <StyledText fontSize={20} fontWeight={600} color={colors.secondary}>{price}Kr</StyledText>
        </StyledView>
    )
}

export default TagDistanceDetails