import styled from 'styled-components';


export const Container = styled.div`
 display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #18171A;
  position: relative;
  `;

export const Buttons = styled.div`
display:flex;
flex-direction:column;
gap:11px;
margin-bottom:15px;
  `;

export const Rightside = styled.img`
  width: fit-content;
  height: 100vh;

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom:0;
  overflow: hidden;
  color:white;
  margin-bottom:200px;
`;

export const Title = styled.p`
font-size: 34px;
margin-bottom: 15px;
width:313px;
`;


export const InputTitle = styled.p`
margin-bottom: 12px;
margin-top:12px;
font-size:15px;
`;
export const Span = styled.span`
color: #EA454C;
`;
export const Link = styled.p`
margin-left:12px;
`;

export const Entrar = styled.button`
  border-radius: 10px;
  width: 313px;
  height: 40px;
  margin-top: 15px;
  color: white;
  background-color: #EA454C;
  font-size: 15px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  border:none;
`;
export const Google = styled.button`
  border-radius: 10px;
  width: 313px;
  height: 40px;
  margin-top: 15px;
  color: white;
  background-color: transparent;
  font-size: 15px;
  border-color: white;
  box-shadow: 0px 4px 6px rgba(255, 255, 255, 0.2);
`;

export const Linha = styled.a`
    position: relative;
    display: inline-block;
    text-align: center;

    &::before,
    &::after {
        content: "";
        position: absolute;
        top: 50%;
        width: 180px; // Ajuste este valor para alterar o comprimento da linha
        height: 1px; // Ajuste este valor para alterar a espessura da linha
        background: white; // Ajuste este valor para alterar a cor da linha
    }

    &::before {
        left: -60px; // Ajuste este valor para alterar a distância da linha ao texto
    }

    &::after {
        right: -60px; // Ajuste este valor para alterar a distância da linha ao texto
    }
`