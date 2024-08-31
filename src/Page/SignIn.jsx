import React from 'react'
import { useForm } from 'react-hook-form';
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import authService from '../Service/api/auth';
import img from '/assets/back2.png'
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
    margin-top: 30px;
` 
export default function SignIn() {
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const create = async(data) => {
    setError("")
    try {
        const userData = await authService.createAccount(data)
        if (userData) {
            const userData = await authService.getCurrentUser()
            if(userData) dispatch(authlogin({userData}));
            navigate("/")
        }
    } catch (error) {
        setError(error.message)
    }
}
  return (
    <Container>
      <LoginContainer>
      <form onSubmit={handleSubmit(create)}>
                        <h1 style={{fontSize:"16px",fontWeight:"bold",textAlign:"center", letterSpacing:"2px"}}>CarrerHub Account</h1>
                      <InputTag>
                        <input
                        label="Full Name: "
                        placeholder="Enter your full name"
                        {...register("name", {
                            required: true,
                        })}
                        />
                        </InputTag>
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
                        </InputTag>
                        <InputTag>
                        <input
                        label="Password: "
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", {
                            required: true,})}
                        />
                        </InputTag>
                          
                        <Button type="submit">
                            Create Account
                        </Button>
                        
                </form>
      </LoginContainer>
      </Container>
  )
}
