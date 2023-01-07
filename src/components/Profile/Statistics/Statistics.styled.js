import styled from 'styled-components'

export const Statistics = styled.section
`display: flex;
`;

export const Tetle = styled.h2
`font-weight: 700;
font-size: 32px;
line-height: 1.18;
text-align: center;
`;

export const List = styled.ul
`display: flex;
list-style: none;
justify-content: center;
align-items: center;
`;

export const Item = styled.li
`display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100px;
border-radius: 5px;
padding: 10px 5px;
`;

export const Label = styled.span
`display: flex;
justify-content: center;
align-items: center;
background-color: rgb(0, 255, 0);
color: rgb(255, 0, 0);
font-weight: 700;
font-size: 22px;
line-height: 1.18;
width: 100%;
`;

export const Percentage = styled.span
`display: flex;
justify-content: center;
align-items: center;
background-color: rgb(0, 0, 255);
color: rgb(255, 255, 255);
font-weight: 700;
font-size: 22px;
line-height: 1.18;
width: 100%;
`;
