import styled from '@emotion/styled'

export const Container = styled.div`
padding: 20px;
max-width:200px;
background-color: lightgray;
`;

export const Description = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`;

export const Img = styled.img`
width:100px;
`;

export const List = styled.ul`
padding: 0;
display: flex;
justify-content: center;
list-style: none;


`;

export const ListEl = styled.li`
display:flex;
flex-direction:column;
align-items:center;

margin-right:20px;
:last-child{
  margin-right:0px
}
`;

