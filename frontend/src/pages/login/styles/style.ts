import styled from "styled-components";

export const BackgroundPage = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
`;

export const TitleLogin = styled.h1`
  color: #fff;
  font-weight: 700;
  margin-bottom: 20px;
  font-size: 3rem;
`;

export const ImageDiv = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 990px) {
    display: none;
  }
`;

export const Image = styled.div`
  width: 70%;
  height: 60%;

  @media (max-width: 1015px) {
    width: 70%;
    height: 50%;
  }
`;

export const FormDiv = styled.div`
  width: 40%;
  height: 100%;
  background-color: #444444;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  @media (max-width: 990px) {
    width: 100%;
    height: 100%;
  }
`;

export const Input = styled.input`
  background-color: black;
  width: 75%;
  height: 50px;
  margin-bottom: 30px;
  border-radius: 5px;
  border-style: none;
  color: #fff;
  padding-left: 15px;

  @media (max-width: 990px) {
    width: 45%;
    height: 50px;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TitleForm = styled.h1`
  color: #fff;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  width: 40%;
  height: 40px;
  border-radius: 5px;
  border-style: none;
  background-color: #9999;

  :hover {
    background-color: #fff;
    transition: ease-in-out 0.2s;
  }

  @media (max-width: 990px) {
    width: 25%;
    height: 40px;
  }
`;

export const CreateAccount = styled.button`
  width: 40%;
  height: 40px;
  border-radius: 5px;
  border-style: none;
  background: transparent;
  margin-top: 15px;
  transition: ease-in-out 0.2s;
  font-size: 16px;
  color: #fff;

  :hover {
    font-weight: 700;
    transition: ease-in-out 0.2s;
  }

  @media (max-width: 990px) {
    width: 25%;
    height: 40px;
  }
`;

export const DivIcons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageLogo = styled.img`
  width: 210px;
  height: 150px;
`;
