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
    flex: 1;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 24px 16px;
    border-radius: 8px 8px 0 0;
    gap: 8px;
    /* max-height: 120px; */
`

const DetailsContainer = styled.View`
    flex: 1;
    justify-content: space-between;
`

const IdEtaContainer = styled.View`
    /* flex: 1; */
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 16px;
`

const AddressLogoContainer = styled.View`
    /* flex: 2; */
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
const ParcelDetails: React.FC<ParcelDetailsProp> = ({ cardId, due, imageURL, recipientName, eta }) => {
    return (
        <StyledView>
            <Image source={{ uri: imageURL }} style={{ width: 80, height: 80, borderRadius: 8 }} resizeMode='cover' />
            <DetailsContainer>
                <IdEtaContainer>
                    <Text style={{ color: colors.secondary, fontWeight: 500 }}>#{cardId}</Text>
                    <Text>{eta}</Text>
                </IdEtaContainer>

                <AddressLogoContainer>
                    <View>
                        <Text>Deliver to: {recipientName}</Text>
                        <Text>Deliver by: {due}</Text>
                    </View>
                    <MaterialIcons name='chat' size={24} style={{ marginRight: 15 }} color={colors.secondary} />
                </AddressLogoContainer>

            </DetailsContainer>

        </StyledView>
    )
}

export default ParcelDetails