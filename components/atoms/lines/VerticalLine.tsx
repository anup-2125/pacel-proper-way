import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'

interface VerticalLineProp {
    lineColor?: string
}

const VerticalLine = styled.View<VerticalLineProp>`
    height: 100%;
    width: 1px;
    margin: 0 4px;
    background-color: ${({ lineColor }: VerticalLineProp) => lineColor || 'black'};
`

export default VerticalLine