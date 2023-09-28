import { useState } from "react";
import { styled } from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginStart,loginSuccess,loginFailure } from "../redux/userSlice.jsx"
import { auth,provider } from "../utils/firebase.jsx";
import { signInWithPopup } from "firebase/auth";



const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.textSoft};
  padding: 20px 50px;
  border: 1px solid ${({ theme }) => theme.soft};
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
`;
const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;

const More = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Links = styled.div`
  margin-left: 50px;
`;

const Link = styled.span`
  margin-left: 30px;
`;

const Signin = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    dispatch(loginStart())
    try {
      const resp = await axios.post("http://localhost:8800/api/auth/signin", {
        email,
        password,
      });
      dispatch(loginSuccess(resp.data))
    } catch (error) {
      dispatch(loginFailure())
    }
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post("http://localhost:8800/api/auth/signup", {
        name,
        email,
        password,
      });
      console.log(resp)
    } catch (error) {
      console.log(error);
    }
  };
  const signInWithGoogle=async()=>{
    dispatch(loginStart())
    signInWithPopup(auth,provider)
    .then((result)=>{
      console.log(result)
       axios.post("http://localhost:8800/api/auth/google",{
        name:result.user.displayName,
        email:result.user.email,
        img:result.user.photoURL
       }).then((res)=>{
        dispatch(loginSuccess(res.data))
       })
    }).catch((error)=>{
      dispatch(loginFailure())
    })
  }
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>to continue to SidhyaTybe</SubTitle>
        <Input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <Input
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleSignIn}>Sign In</Button>
        <Title>Or</Title>
        <Button  onClick={signInWithGoogle} >SignIn By Google</Button>
        <Title>Or</Title>
        <Input
          placeholder="username"
          onChange={(e) => setName(e.target.value)}
        />
        <Input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <Input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleSignUp}>Sign Up</Button>
      </Wrapper>
      <More>
        English (USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default Signin;
