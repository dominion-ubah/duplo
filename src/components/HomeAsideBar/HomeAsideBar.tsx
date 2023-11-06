import React, { FC } from 'react';
import { HomeAsideBarWrapper } from './HomeAsideBar.styled';
import { MessageBox, StyledBox, StyledFlexBox, StyledImg, StyledTextExtraLarge, StyledTextExtraSmall, StyledTextLarge, StyledTextMediumSmall, StyledTextRegularLarge } from '../CommonUi/CommonUi.styled';
import { NotifIcon, ProfIcon } from '../../assets';

interface HomeAsideBarProps { }

const HomeAsideBar: FC<HomeAsideBarProps> = () => (
   <HomeAsideBarWrapper data-testid="HomeAsideBar">
      <StyledBox>
         <StyledFlexBox className='flex justify-end w-full'>
            <StyledBox className='w-32'>
            <StyledImg src={NotifIcon} />
            </StyledBox>
            </StyledFlexBox>
         <StyledBox className='my-5 pt-5 text-center'>
            <StyledBox className='w-4/5 mx-auto my-3 flex justify-center '>
            <StyledImg src={ProfIcon} />
            </StyledBox>
            <StyledTextExtraLarge>Thomas Flecture</StyledTextExtraLarge>
            <StyledTextMediumSmall>Director of Recruiting</StyledTextMediumSmall>
         </StyledBox>
         <StyledBox className='my-5 pt-5'>
            <StyledTextLarge className='py-3'>Messages</StyledTextLarge>
            <MessageBox>
               <StyledBox style={{margin:'0.8em 0.8em 0 0', width: '30px', height: '30px', borderRadius: '100px', overflow: 'hidden'}}>
                  <StyledImg src={ProfIcon} />
               </StyledBox>
               <StyledBox>
                  <StyledTextRegularLarge>Cameron Williamson</StyledTextRegularLarge>
                  <StyledTextExtraSmall>Have you planned any ...</StyledTextExtraSmall>
               </StyledBox>
            </MessageBox>
            <MessageBox>
            <StyledBox style={{margin:'0.8em 0.8em 0 0', width: '30px', height: '30px', borderRadius: '100px', overflow: 'hidden'}}>
                  <StyledImg src={ProfIcon} />
               </StyledBox>
               <StyledBox>
                  <StyledTextRegularLarge>Jacob Jones</StyledTextRegularLarge>
                  <StyledTextExtraSmall>The candidate has been shortlis ...</StyledTextExtraSmall>
               </StyledBox>
            </MessageBox>
         </StyledBox>
         <StyledBox className='my-5 pt-5'>
            <StyledTextLarge className='py-3'>Recently added jobs</StyledTextLarge>
            <MessageBox>
            <StyledBox style={{margin:'0.8em 0.8em 0 0', width: '30px', height: '30px', borderRadius: '100px', overflow: 'hidden'}}>
                  <StyledImg src={ProfIcon} />
               </StyledBox>
               <StyledBox>
                  <StyledTextRegularLarge>Product Designer</StyledTextRegularLarge>
                  <StyledTextExtraSmall>Spotify, Singapore - 6 hours ago</StyledTextExtraSmall>
               </StyledBox>
            </MessageBox>
            <MessageBox>
            <StyledBox style={{margin:'0.8em 0.8em 0 0', width: '30px', height: '30px', borderRadius: '100px', overflow: 'hidden'}}>
                  <StyledImg src={ProfIcon} />
               </StyledBox>
               <StyledBox>
                  <StyledTextRegularLarge>IOS Developer</StyledTextRegularLarge>
                  <StyledTextExtraSmall>San Francisco, CA - 2 days ago</StyledTextExtraSmall>
               </StyledBox>
            </MessageBox>
         </StyledBox>
      </StyledBox>
   </HomeAsideBarWrapper>
);

export default HomeAsideBar;
