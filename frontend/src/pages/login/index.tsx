import {
  BackgroundPage,
  ImageDiv,
  FormDiv,
  Image,
  TitleLogin,
  Input,
  Form,
  Button,
  DivIcons,
  ImageLogo,
  CreateAccount,
} from "./styles/style";
import loginImage from "../../images/loginUI.svg";
import Logo from "../../images/logo.png";
import { ImFacebook2, ImLinkedin } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import { AuthContext } from "../../Contexts/AuthContext";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AutoCreate } from "./createUserLogin";

export const Login = () => {
  const { handleSubmit, register } = useForm();
  const { signIn } = useContext(AuthContext);
  const [createUser, setCreateUser] = useState(false);
  const [ inputEmail, setInputEmail ] = useState(true);

  function onSubmit(values: any) {
    if(values.cpf){
      const credentials = {
        cpf: values.cpf,
        password: values.password,
      };
      signIn(credentials);
    }

    if(values.email){
      const credentials = {
        email: values.email,
        password: values.password,
      };
      signIn(credentials);
    }
    
  }

  function handleCloseCreateUser() {
    setCreateUser(false);
  }

  function handleOpenCreate() {
    setCreateUser(true);
  }

  function changeField(){
   inputEmail ? setInputEmail(false) : setInputEmail(true)
  }

  return (
    <BackgroundPage>
      {createUser && (
        <AutoCreate
          onRequestClose={handleCloseCreateUser}
          isOpen={createUser}
        />
      )}
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
        <Form onSubmit={handleSubmit(onSubmit)}>
          {inputEmail ? (
            <Input {...register("email")} type="email" placeholder="Email" />
          )  : 
            ( <Input {...register("cpf")} type="cpf" placeholder="CPF" /> )
          }
          
          <Input
            {...register("password")}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Send</Button>
          <CreateAccount
            type="button"
            className="createAccount"
            onClick={handleOpenCreate}
          >
            Create Account
          </CreateAccount>
          <CreateAccount type="button" onClick={changeField}>{inputEmail ? "Entrar com CPF" : "Entrar com Email"}</CreateAccount>
        </Form>
        <DivIcons>
          <a href="https://www.facebook.com/Mindconsulting2">
            <ImFacebook2
              size={40}
              color="white"
              style={{ marginRight: "40px" }}
            />
          </a>
          <a href="https://www.linkedin.com/company/mind-tech/">
            <ImLinkedin size={40} color="white" />
          </a>
          <a href="https://www.instagram.com/mind_consulting/">
            <FaInstagramSquare
              size={42}
              color="white"
              style={{ marginLeft: "40px" }}
            />
          </a>
        </DivIcons>
      </FormDiv>
      <ToastContainer />
    </BackgroundPage>
  );
};
