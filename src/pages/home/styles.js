import styled from 'styled-components';
import {font} from "../../assets/theme/theme";
import bannerImage from '../../assets/img/banner.svg';



export const Content = styled.div`
margin-top:150px;
margin-left:120px;
color:white;
width:494px;
height:218px;
`;

export const Container = styled.div`
  background-image: url(${bannerImage});
  background-size:cover;
  background-repeat:no-repeat;
  height:100vh
`;


export const OrangeTitle = styled.span`
  color:#ff4601;
  font-family: 'Orbitron', sans-serif;
  font-weight: bold;
`;

export const Titulo = styled.h1`
  font-size: 45px;
  font-family: 'Orbitron', sans-serif;
  font-weight: bold;
  color: white;
`;

export const Texto = styled.div`
  margin-top:35px;
  margin-bottom:55px;
  font-size:22px;
  width:683px;
  height:93px;  
`;

