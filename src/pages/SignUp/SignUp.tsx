import React, { FC, useState } from 'react';
import { SignUpWrapper } from './SignUp.styled';
import { StyledBox, StyledButton, StyledCardBox, StyledFlexBox, StyledInput, StyledTextExtraLarge, StyledTextLarge, StyledTextRegular } from '../../components/CommonUi/CommonUi.styled';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

interface SignUpProps { }

const SignUp: FC<SignUpProps> = () => {

   const [email, setEmail] = useState('');
   const [name, setName] = useState('');
   const [password, setPassword] = useState('');
   const [role, setRole] = useState('');
   const navigate = useNavigate()

   const SignUp = (e: any) => {
         e.preventDefault()
         console.log('dfd', {name, role, password, email})
         createUserWithEmailAndPassword (auth, email, password)
      .then((user: any) => {
         console.log(user)
         alert('You have just signed up, you may login now')
      })
      .catch(error => {
         console.log('dfdf', error)
      })
      }

    return (
   <SignUpWrapper data-testid="SignUp">
      <StyledBox className='flex justify-center items-center w-full h-screen border'>
      <form onSubmit={SignUp}>
         <StyledCardBox >
            <StyledTextExtraLarge>
               Human R.
            </StyledTextExtraLarge>

            <StyledTextLarge className='my-4'>
               Sign Up
            </StyledTextLarge>
            <StyledFlexBox className='mb-3'>
            <StyledTextRegular className='mr-5 pr-5'>
               Name
            </StyledTextRegular>
            <StyledInput type='text' value={name} onChange={(e) => setName(e.target.value)} className='border'/>
            </StyledFlexBox>
            <StyledFlexBox className='mb-3'>
            <StyledTextRegular className='mr-5 pr-5'>
            Role
            </StyledTextRegular>
            <StyledInput type='text' value={role} onChange={(e) => setRole(e.target.value)} className='border'/>
            </StyledFlexBox>
            <StyledFlexBox className='mb-3'>
            <StyledTextRegular className='mr-5 pr-5'>
            Email
            </StyledTextRegular>
            <StyledInput type='email' value={email} onChange={(e) => setEmail(e.target.value)} className='border'/>
            </StyledFlexBox>
            <StyledFlexBox className='mb-3'>
            <StyledTextRegular className='mr-3'>
               Password
            </StyledTextRegular>
            <StyledInput type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='border'/>
            </StyledFlexBox>
            <StyledBox>
            <StyledButton type='submit' className='my-3 block'>Register</StyledButton>
               <StyledButton onClick={() => navigate('/login')}>Login</StyledButton>
               </StyledBox>

         </StyledCardBox>
</form>
      </StyledBox>
   </SignUpWrapper>
)};

export default SignUp;
