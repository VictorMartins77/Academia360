import styled from 'styled-components';


export const Content = styled.div`
 width: 100%;
 display: flex;
 position: relative;
 align-items: center;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-grow: 1; 
  justify-content: center; 
> ul{
    color: white;
    display: flex;
    list-style: none;
    gap: 40px;
    
    font-weight: 600;
    font-size: 20px;

    @media (max-width: 1157px) {
    gap: 30px;
  }

  
  @media (max-width: 1004px) {
    font-size: 18px;
  }
}

ul li{
    cursor: pointer;
    position: relative;
}

ul li:hover{
    color: #ff4601; /* Text color on hover */
    transition: 0.3s;
}

ul li::after{
    content: "";
    position: absolute;
    display: block;
    height: 0.2rem;
    width: 0%;
    background: #ff4601;
    bottom: -0.5rem;
    transition: all ease-in-out 250ms;
}

ul li:hover::after{
   width: 60%;
}
`;

export const Logo = styled.img`
  max-width: 160px;
  height: auto; 
  margin-left:50px;
`;