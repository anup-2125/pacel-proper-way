import { View, Text, Image } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'
import colors from '@/constants/colours'

export interface ParcelDetailsProp {
    imageURL: string,
    cardId: string,
    recipientName: string,
    due: string,
    eta?: string
}



const StyledView = styled.View`
    /* background-color: lightcoral; */
    flex: 1;
    justify-content: center;
    flex-direction: row;
    padding: 12px;
    border-radius: 8px 8px 0 0;
    gap: 8px;
`

const DetailsContainer = styled.View`
    flex: 1;
    /* background-color: blueviolet; */
    justify-content: space-between;
`

const IdEtaContainer = styled.View`
    flex: 1;
    /* background-color: aqua; */
    flex-direction: row;
    justify-content: space-between;
`

const AddressLogoContainer = styled.View`
    flex: 2;
    /* background-color: #be46d6; */
    flex-direction: row;
    align-items: center;
`

const AddressContainer = styled.View`
    flex: 1;
`


const ParcelDetails: React.FC<ParcelDetailsProp> = ({ cardId, due, imageURL, recipientName, eta }) => {
    return (
        <StyledView>
            <Image source={{ uri: imageURL }} style={{ width: '20%', borderRadius: 8 }} resizeMode='cover' />
            <DetailsContainer>

                <IdEtaContainer>
                    <Text style={{ color: colors.secondary, fontWeight: 500 }}>#{cardId}</Text>
                    <Text>{eta}</Text>
                </IdEtaContainer>

                <AddressLogoContainer>
                    <AddressContainer>
                        <Text>Deliver to: {recipientName}</Text>
                        <Text>Deliver by: {eta}</Text>
                    </AddressContainer>
                    <MaterialIcons name='chat' size={24} style={{ marginRight: 15 }} />
                </AddressLogoContainer>

            </DetailsContainer>

        </StyledView>
    )
}

export default ParcelDetails