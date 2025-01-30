import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'

interface HorizontalLineProp {
    lineColor?: string,
    width?: string
}


const HorizontalLine = styled.View<HorizontalLineProp>`
    width: ${({ width }: HorizontalLineProp) => width || '100%'};
    height: 1px;
    background-color: ${({ lineColor }: HorizontalLineProp) => lineColor || 'black'};
    opacity: 0.5;
`

export default HorizontalLine