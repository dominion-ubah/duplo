import React, { FC } from 'react';
import { LoginWrapper } from './Login.styled';
import { StyledBox, StyledButton, StyledCardBox, StyledFlexBox, StyledInput, StyledTextExtraLarge, StyledTextLarge, StyledTextRegular } from '../../components/CommonUi/CommonUi.styled';

interface LoginProps { }

const Login: FC<LoginProps> = () => (
   <LoginWrapper data-testid="Login">
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
               <StyledInput type='email' className='border' />
            </StyledFlexBox>
            <StyledFlexBox className='mb-3'>
               <StyledTextRegular className='mr-3'>
                  Password
               </StyledTextRegular>
               <StyledInput type='password' className='border' />
            </StyledFlexBox>
            <StyledButton>Login</StyledButton>


         </StyledCardBox>
      </StyledBox>
   </LoginWrapper>
);

export default Login;
