import styled from 'styled-components'

export const ContainerWrapper = styled.div
`display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #fff;
border-radius: 5px;
height: auto;
`;

export const DescriptionUser = styled.div
`display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
flex-direction: column;
margin-bottom: 10px;

 `;

 export const UserImg = styled.img
 `display: block;
 width: 450px;
 `;

 export const Name = styled.p
 `font-weight: 700;
 font-size: 32px;
 line-height: 1.18;
 text-align: center;
 margin-bottom: 5px;
 `;

 export const Login = styled.p
 `font-weight: 500;
 font-size: 22px;
 line-height: 1.18;
 text-align: center;
 margin-bottom: 5px;

 `;

 export const Location = styled.p
 `font-weight: 400;
 font-size: 22px;
 line-height: 1.18;
 text-align: center;
 margin-bottom: 5px;
 `

export const List = styled.ul
`display: flex;
list-style: none;
justify-content: start;
align-items: center;
gap: 20px;
margin-left: 0;
margin-right: 0;
`;

export const Item = styled.li
`display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
cursor: pointer;
width: 100px;
border-radius: 5px;
padding: 10px 5px;
`;

export const RedItem = styled.li
`display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
cursor: pointer;
width: 100px;
border-radius: 5px;
padding: 10px 5px;
background-color: rgb(255, 0, 0);
&:hover {
  color: #fff;
}
`;

export const BlueItem = styled.li
`display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
cursor: pointer;
width: 100px;
border-radius: 5px;
padding: 10px 5px;
background-color: rgb(0, 0, 255);
&:hover {
  color: #fff;
}
`;

export const GreenItem = styled.li
`display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
cursor: pointer;
width: 100px;
border-radius: 5px;
padding: 10px 5px;
background-color: rgb(0, 255, 0);
&:hover {
  color: #fff;
}
`;

export const Label = styled.span
`display: flex;
flex-direction: column;
font-weight: 700;
font-size: 22px;
line-height: 1.18;
text-align: center;
`;

export const Quantity = styled.span
`display: flex;
flex-direction: column;
font-size: 20px;
`
