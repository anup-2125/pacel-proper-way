import { View, Text, Image } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import ParcelDetails, { ParcelDetailsProp } from '@/components/molecules/cards/parcelDetails'
import HorizontalLine from '@/components/atoms/lines/HorizontalLine'
import colors from '@/constants/colours'
import TagDistanceDetails from '@/components/molecules/cards/TagDistanceDetails'
import DimensionsDetails from '@/components/molecules/cards/DimensionsDetails'

type parcelType = 'Small' | 'Medium' | 'Large'

type parcelDiensions = {
    length: number,
    width: number,
    breadth: number
}

interface cardContainerProp {
    imageURL: string,
    cardId: string,
    recipientName: string,
    due: string,
    eta: string,

    parcelType: parcelType,
    source: string,
    destination: string,
    distance: number,

    dimensions: parcelDiensions
}


const CardContainer = styled.View`
    background-color: white;
    height: 260px;
    border-radius: 8px;
    align-items: center;
    margin-bottom: 16px;
`

const UpperSection = styled.View<cardContainerProp>`
    
`



const ParcelCardData: ParcelDetailsProp = {
    cardId: '123',
    due: '12-12-2025 12:24 PM',
    imageURL: 'https://images.pexels.com/photos/1666070/pexels-photo-1666070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    recipientName: 'Anup Narvekar',
    eta: '30mins'
}

const ParcelCard = () => {
    return (
        <CardContainer>
            <ParcelDetails {...ParcelCardData} />
            <HorizontalLine lineColor={colors.secondary} />
            <TagDistanceDetails source="goa" destination="pune" distance={200} price={364} tagName="small" />
            <HorizontalLine lineColor={colors.secondary} width='90%' />
            <DimensionsDetails length={250} breadth={400} height={300} />
        </CardContainer>
    )
}

export default ParcelCard