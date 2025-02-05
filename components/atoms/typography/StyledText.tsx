import styled from 'styled-components/native'

export interface StyledTextProp {
    color?: string,
    fontSize?: number,
    fontWeight?: number,
    padding?: string,
    textTransform?: string,
}

const StyledText = styled.Text<StyledTextProp>`
    ${({ color }: StyledTextProp) => color && `color: ${color};`}
    ${({ fontSize }: StyledTextProp) => fontSize && `font-size: ${fontSize}px;`}
    ${({ fontWeight }: StyledTextProp) => fontWeight && `font-weight: ${fontWeight};`}
    ${({ padding }: StyledTextProp) => padding && `padding: ${padding};`}
    ${({ textTransform }: StyledTextProp) => textTransform && `text-transform: ${textTransform};`}
`

export default StyledText