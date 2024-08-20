import React from 'react'
import { useForm } from 'react-hook-form';
import { styled } from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import authService from '../Service/api/auth';
import img from '/assets/pic4.png'
import { FaLock, FaUser } from 'react-icons/fa6';
import { login  as authlogin} from '../Store/authslice';
import { useDispatch } from 'react-redux';

const Container = styled.div`
height: 100vh;
max-width: 100vw;
display: flex;
align-items: center;
justify-content: center;
background:url(${img});
background-size:cover;
background-position:center;
`
const LoginContainer = styled.div`
width:400px;
background: transparent;
color: #fff;
border-radius: 10px;
border: 2px solid rgba(255, 255, 255, 0.2);
box-shadow: 0 0 10px rgba(0,0,0,0.2);
backdrop-filter: blur(30px);
padding: 30px 40px;
`
const InputTag = styled.div`
width: 100%;
height: 50px;
margin:30px 0;
position: relative;
input{
  width: 100%;
  height: 100%;
  background: transparent;
  border:2px solid rgba(255,255,255,.2);
  border-radius: 40px;
  font-size: 16px;
  color:#fff;
  padding: 20px 45px 20px 20px;
}
::placeholder{
    color: #fff; 
}

`
const Button = styled.button`
    width: 100%;
    height: 45px;
    background-color:white;
    text-align:center;
    padding:10px;
    border: none;
    outline: none;
    border-radius: 40px;
    cursor: pointer;
    font-size: 16px;    
    color:#333;
    font-weight: 700;
    margin-top: 10px;
` 
const StyledIcon = styled.div`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  color: #fff;
  letterSpacing:"2px"
`;
const DontAccount = styled.p`
 text-align: center;
 margin : 20px 0 15px; 
 font-size: 14px;
 color: #fff;
 a {
    color: #fff;

    font-weight: bold;

    &:hover {
      color: #ccc;
      text-decoration: underline;
    }
  }
`
function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState("")
    const { register, handleSubmit } = useForm()

    const login = async(data) => {
        console.log(data)
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if(userData) { dispatch(authlogin({userData}));};
                console.log("navigating")
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }
  return (
     <Container>
      <LoginContainer>
      <form onSubmit={handleSubmit(login)}>
                        <h1 style={{fontSize:"16px",fontWeight:"bold",textAlign:"center", letterSpacing:"2px"}}>LOGIN</h1>
                        <InputTag>
                        <input
                        label="Email: "
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                            }
                        })}
                        />
                        < StyledIcon  as={FaUser}/>
                        </InputTag>
                        <InputTag>
                        <input
                        label="Password: "
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", {
                            required: true,})}
                        />
                        <StyledIcon as={FaLock} />
                        </InputTag>
                          
                        <Button type="submit">
                            LOGIN
                        </Button>
                        <DontAccount>Don't have an Account? <Link to="/signin">Register</Link></DontAccount>
                </form>
      </LoginContainer>
      </Container>
  )
}

export default Login