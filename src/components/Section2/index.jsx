import React from 'react';
import { Content1, Container, Titulo, Exercicio,Card, ExerciseName,ExerciseText,Texts, CardText} from './styles'; // Import styled components
import Exercise1 from '../../assets/img/exercise1.svg';
import Exercise2 from '../../assets/img/exercise2.svg';
import Exercise3 from '../../assets/img/exercise3.svg';
import Exercise4 from '../../assets/img/exercise4.svg';


function Section2() {

  return (
    <Container>
      <Titulo>Monte planos de treino</Titulo>
      <Content1>
        <Card>
          <Exercicio src={Exercise1} alt="Logo do site" />
          <Texts>
            <ExerciseName>GYM</ExerciseName>
            <ExerciseText>Monte planos de treino detalhadamente e apresente a seus clientes de maneira ágil e eficiente.</ExerciseText>
          </Texts>
        </Card>
          <Exercicio src={Exercise2} alt="Logo do site" />
          <Exercicio src={Exercise3} alt="Logo do site" />
          <Exercicio src={Exercise4} alt="Logo do site" />
      </Content1>
    </Container>
  );
}

export default Section2;
