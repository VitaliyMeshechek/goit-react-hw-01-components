import styled from 'styled-components'
import { BsEmojiSmile, BsEmojiFrown } from "react-icons/bs";

export const List = styled.ul
`display: flex;
flex-direction: column;
list-style: none;
justify-content: start;
align-items: center;
`;

export const Avatar = styled.img
`display: block;
width: 150px;
height: 190px;`

export const Name = styled.p
`font-weight: 700;
font-size: 32px;
line-height: 1.18;
text-align: center;
`;

export const Item = styled.li
`display: flex;
position: relative;
width: 400px;
justify-content: center;
align-items: center;
gap: 30px;
margin-bottom: 10px;
`;

export const SpanStatus = styled.span
`position: absolute;
left: 0;
top: 50%;
border-radius: 50%;
`;

// background-color: ${props => {
//   return props.isActive ? 'green' : 'red'}
// };

export const EmojiSmile = styled(BsEmojiSmile)
`fill: green;`

export const EmojiFrown = styled(BsEmojiFrown)
`fill: red;`
