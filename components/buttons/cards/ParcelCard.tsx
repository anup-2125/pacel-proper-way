import { View, Text, Image } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'

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
`

const UpperSection = styled.View<cardContainerProp>`
    
`


const ParcelCard = () => {
  return (
    <CardContainer>

    </CardContainer>
  )
}

export default ParcelCard