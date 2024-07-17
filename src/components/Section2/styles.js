import styled from 'styled-components';
import {font} from "../../assets/theme/theme";
import bannerImage from '../../assets/img/banner.png';



export const Content1 = styled.div`
display: flex;
align-items: center;
margin-top:100px;
margin-left:170px;
`;

export const Container = styled.div`
background-color:#18171a;
margin-top:400px;
`;


export const Card = styled.div`
  color: #d1d1d1;
  display: flex;
  flex-direction: column; /* Adicione esta linha para alinhar verticalmente os elementos */
  position:relative;
`;

export const CardText = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  color: white;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Texts = styled.div`
  display: flex;
align-items:center;
`;

export const Titulo = styled.h1`
  font-size: 40px;
  font-family: 'Outfit', SemiBold;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:85px;
`;

export const ExerciseName = styled.h1`
  font-family: 'Outfit', Regular;
  margin-right:58px;
`;

export const ExerciseText = styled.p`
  font-family: 'Outfit', Light;
  font-size:16px;
  max-width:370px;
  margin-top:10px;
`;

export const Exercicio = styled.img`
margin-right:220px;
`;