import styled from '@emotion/styled';

export const MarkerOnline = styled.span`
display: block;
width: 10px;
height: 10px;
border-radius: 50%;
background-color: green;`;

export const MarkerOfline = styled.span`
display: block;
width: 10px;
height: 10px;
border-radius: 50%;
background-color: red;`;

export const ListEl = styled.li`
display: flex;
align-items: center;
padding:10px;
margin-bottom: 10px;
background-color: #fafaaa;
:last-child{
  margin-bottom: 0px;
}`;

export const Name = styled.p`
font-weight: 700;
margin-left: 20px;
`;