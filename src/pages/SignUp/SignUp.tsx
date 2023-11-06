import React, { FC } from 'react';
import { SignUpWrapper } from './SignUp.styled';
import { StyledBox, StyledButton, StyledCardBox, StyledFlexBox, StyledInput, StyledTextExtraLarge, StyledTextLarge, StyledTextRegular } from '../../components/CommonUi/CommonUi.styled';

interface SignUpProps { }

const SignUp: FC<SignUpProps> = () => (
   <SignUpWrapper data-testid="SignUp">
      <StyledBox className='flex justify-center items-center w-full h-screen border'>
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
            <StyledInput type='text' className='border'/>
            </StyledFlexBox>
            <StyledFlexBox className='mb-3'>
            <StyledTextRegular className='mr-5 pr-5'>
            Email
            </StyledTextRegular>
            <StyledInput type='email' className='border'/>
            </StyledFlexBox>
            <StyledFlexBox className='mb-3'>
            <StyledTextRegular className='mr-3'>
               Password
            </StyledTextRegular>
            <StyledInput type='password' className='border'/>
            </StyledFlexBox>
            <StyledButton>Register</StyledButton>


         </StyledCardBox>
      </StyledBox>
   </SignUpWrapper>
);

export default SignUp;
