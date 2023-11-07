import React, { FC, useEffect, useState } from 'react';
import { auth } from '../../firebase'
import { LoginWrapper } from './Login.styled';
import { useNavigate } from 'react-router-dom';
import {signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { StyledBox, StyledButton, StyledCardBox, StyledFlexBox, StyledInput, StyledTextExtraLarge, StyledTextLarge, StyledTextRegular } from '../../components/CommonUi/CommonUi.styled';
interface LoginProps { }

const Login: FC<LoginProps> = () => {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();

   const SignIn = (e: any) => {
      e.preventDefault()
      console.log({email, password})
      signInWithEmailAndPassword(auth, email, password)
      .then((user: any) => {
         console.log(user)
         navigate('/');
      })
      .catch(error => {
         console.log('error', error)
      })
         
   }

   const SignOut = () => {
      signOut(auth)
      .then(() => {
         console.log('signed out')
      })
      .catch(error => {
         console.log('error signin out:', error)
      })
   }

   useEffect(() => {
      SignOut()
   },[])

   return (
      <LoginWrapper data-testid="Login">
         <form onSubmit={SignIn}>

         <StyledBox className='flex justify-center items-center w-full h-screen border'>
            <StyledCardBox >
               <StyledTextExtraLarge>
                  Human R.
               </StyledTextExtraLarge>

               <StyledTextLarge className='my-4'>
                  Login
               </StyledTextLarge>
               <StyledFlexBox className='mb-3'>
                  <StyledTextRegular className='mr-5 pr-5'>
                     Email
                  </StyledTextRegular>
                  <StyledInput type='email' value={email} onChange={(e) => setEmail(e.target.value)} className='border' />
               </StyledFlexBox>
               <StyledFlexBox className='mb-3'>
                  <StyledTextRegular className='mr-3'>
                     Password
                  </StyledTextRegular>
                  <StyledInput type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='border' />
               </StyledFlexBox>
               <StyledBox>

               <StyledButton type="submit" className='my-3 block' >Login</StyledButton>
               <StyledButton onClick={() => navigate('/signup')}>Sign up</StyledButton>
               </StyledBox>


            </StyledCardBox>
         </StyledBox>
         </form>
      </LoginWrapper>)
};

export default Login;
