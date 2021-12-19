import React from "react";
import {
  BackgroundPage,
  ImageDiv,
  FormDiv,
  Image,
  TitleLogin,
  Input,
  Form,
  TitleForm,
  Button,
  DivIcons,
  ImageLogo,
} from "./styles/style";
import loginImage from "../../images/loginUI.svg";
import Logo from "../../images/logo.png";
import { ImFacebook2, ImLinkedin } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";

export const Login = () => {
  return (
    <BackgroundPage>
      <ImageDiv>
        <TitleLogin>Mind Consulting</TitleLogin>
        <Image
          style={{
            backgroundImage: `url(${loginImage})`,
            backgroundSize: "cover",
          }}
        ></Image>
      </ImageDiv>
      <FormDiv>
        <ImageLogo src={Logo} alt="Mind Consulting" />
        <Form action="">
          <Input type="text" placeholder="Email" />
          <Input type="text" placeholder="Senha" />
          <Button>Send</Button>
        </Form>
        <DivIcons>
          <ImFacebook2 size={40} color="white" style={{marginRight: '40px'}} />
          <ImLinkedin size={40} color="white" />
          <FaInstagramSquare size={42} color="white" style={{marginLeft: '40px'}} />
        </DivIcons>
      </FormDiv>
    </BackgroundPage>
  );
};
