import React, { FC } from 'react';
import { SidebarWrapper, StyledLogo } from './Sidebar.styled';
import { CenterStyle, StyledBox, StyledImg, StyledListItems, StyledNavItems, StyledTextRegular, StyledUList } from '../CommonUi/CommonUi.styled';
import { BgIcon, CgIcon, CugIcon, LogIcon, MgIcon, PagIcon, PgIcon, SgIcon } from '../../assets';

interface SidebarProps { }

const Sidebar: FC<SidebarProps> = () => (
   <SidebarWrapper data-testid="Sidebar">
      <StyledBox className='py-5 my-5'>

         <CenterStyle>
            <StyledLogo className='flex items-center'>
               <StyledBox className='w-12 mr-3'>
                  <StyledImg src={LogIcon} />

               </StyledBox>
               <StyledBox>
                  Human R
               </StyledBox>
            </StyledLogo>
         </CenterStyle>
      </StyledBox>
      <StyledBox className='px-3 pb-4'>
         <StyledTextRegular className='px-5 py-2'>MENU</StyledTextRegular>
         <StyledUList>
            <StyledListItems><StyledNavItems href='#'>
               <StyledBox style={{ width: '20px', borderRadius: '6px', verticalAlign: 'middle', display: 'inline-block' }}>
                  <StyledImg src={CgIcon} />
               </StyledBox>
               <span style={{ display: 'inline-block', verticalAlign: 'bottom', marginLeft: '1em' }}>
                  Dashboard
               </span>
            </StyledNavItems>
            </StyledListItems>
            <StyledListItems><StyledNavItems href='#'>
               <StyledBox style={{ width: '20px', borderRadius: '6px', verticalAlign: 'middle', display: 'inline-block' }}>
                  <StyledImg src={MgIcon} />
               </StyledBox>
               <span style={{ display: 'inline-block', verticalAlign: 'bottom', marginLeft: '1em' }}>
                  Message
               </span>

            </StyledNavItems></StyledListItems>
            <StyledListItems><StyledNavItems href='#'>
               <StyledBox style={{ width: '20px', borderRadius: '6px', verticalAlign: 'middle', display: 'inline-block' }}>
                  <StyledImg src={CgIcon} />
               </StyledBox>
               <span style={{ display: 'inline-block', verticalAlign: 'bottom', marginLeft: '1em' }}>
                  Calendar
               </span>

            </StyledNavItems></StyledListItems>
         </StyledUList>
      </StyledBox>
      <StyledBox className='px-3 pb-4'>
         <StyledTextRegular className='px-5 py-2'>RECRUITMENT</StyledTextRegular>
         <StyledUList>
            <StyledListItems><StyledNavItems href='#'>
               <StyledBox style={{ width: '20px', borderRadius: '6px', verticalAlign: 'middle', display: 'inline-block' }}>
                  <StyledImg src={BgIcon} />
               </StyledBox>
               <span style={{ display: 'inline-block', verticalAlign: 'bottom', marginLeft: '1em' }}>
                  Jobs
               </span>
            </StyledNavItems></StyledListItems>
            <StyledListItems><StyledNavItems href='#'>
               <StyledBox style={{ width: '20px', borderRadius: '6px', verticalAlign: 'middle', display: 'inline-block' }}>
                  <StyledImg src={PgIcon} />
               </StyledBox>
               <span style={{ display: 'inline-block', verticalAlign: 'bottom', marginLeft: '1em' }}>
                  Candidates
               </span>
            </StyledNavItems></StyledListItems>
            <StyledListItems><StyledNavItems href='#'>
               <StyledBox style={{ width: '20px', borderRadius: '6px', verticalAlign: 'middle', display: 'inline-block' }}>
                  <StyledImg src={PagIcon} />
               </StyledBox>
               <span style={{ display: 'inline-block', verticalAlign: 'bottom', marginLeft: '1em' }}>
                  My Referrals
               </span>
            </StyledNavItems></StyledListItems>
            <StyledListItems><StyledNavItems href='#'>
               <StyledBox style={{ width: '20px', borderRadius: '6px', verticalAlign: 'middle', display: 'inline-block' }}>
                  <StyledImg src={CgIcon} />
               </StyledBox>
               <span style={{ display: 'inline-block', verticalAlign: 'bottom', marginLeft: '1em' }}>
                  Career Site
               </span>
            </StyledNavItems></StyledListItems>
         </StyledUList>
      </StyledBox>
      <StyledBox className='px-3 pb-4'>
         <StyledTextRegular className='px-5 py-2'>Organisation</StyledTextRegular>
         <StyledUList>
            <StyledListItems><StyledNavItems href='#'>
               <StyledBox style={{ width: '20px', borderRadius: '6px', verticalAlign: 'middle', display: 'inline-block' }}>
                  <StyledImg src={PgIcon} />
               </StyledBox>
               <span style={{ display: 'inline-block', verticalAlign: 'bottom', marginLeft: '1em' }}>
                  Employee
               </span>
            </StyledNavItems></StyledListItems>
            <StyledListItems><StyledNavItems href='#'>
               <StyledBox style={{ width: '20px', borderRadius: '6px', verticalAlign: 'middle', display: 'inline-block' }}>
                  <StyledImg src={CugIcon} />
               </StyledBox>
               <span style={{ display: 'inline-block', verticalAlign: 'bottom', marginLeft: '1em' }}>
                  Structure
               </span>
            </StyledNavItems></StyledListItems>
            <StyledListItems><StyledNavItems href='#'>
               <StyledBox style={{ width: '20px', borderRadius: '6px', verticalAlign: 'middle', display: 'inline-block' }}>
                  <StyledImg src={MgIcon} />
               </StyledBox>
               <span style={{ display: 'inline-block', verticalAlign: 'bottom', marginLeft: '1em' }}>
                  Report
               </span>
            </StyledNavItems></StyledListItems>
            <StyledListItems><StyledNavItems href='#'>
               <StyledBox style={{ width: '20px', borderRadius: '6px', verticalAlign: 'middle', display: 'inline-block' }}>
                  <StyledImg src={SgIcon} />
               </StyledBox>
               <span style={{ display: 'inline-block', verticalAlign: 'bottom', marginLeft: '1em' }}>
                  Settings
               </span>
            </StyledNavItems></StyledListItems>
         </StyledUList>
      </StyledBox>
   </SidebarWrapper>
);

export default Sidebar;
