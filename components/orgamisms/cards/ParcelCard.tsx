import { View, Text, Image } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import ParcelDetails, { ParcelDetailsProp } from '@/components/molecules/cards/parcelDetails'

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
    background-color: lightgreen;
    width: 92%;
    min-height: 300px;
    border-radius: 8px;
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
            <ParcelDetails {...ParcelCardData} />
            <ParcelDetails {...ParcelCardData} />


            {/* <MidSection>

        </MidSection>
        <BottomSection>
            
        </BottomSection> */}



        </CardContainer>
    )
}

export default ParcelCard