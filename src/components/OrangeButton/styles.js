import styled from 'styled-components';
import ButtonImage from '../../assets/img/backgroundbutton.svg'


export const Button = styled.button`
  margin-right:20px;
  display: inline-block;
  padding: 10px 20px;
  background-image: url(${ButtonImage});;
  background-size: cover;
  background-position: center;
  border: none;
  cursor: pointer;
  color: white; /* Text color */
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  width:185px;
  height:45px;

  /* Hover effect */
  &:hover {
    background-image: url(${ButtonImage});; /* Replace with your image URL */
    opacity: 0.8;
  }
`;