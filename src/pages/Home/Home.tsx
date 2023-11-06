import React, { FC } from 'react';
import { HomeWrapper } from './Home.styled';
import HomeAsideBar from '../../components/HomeAsideBar/HomeAsideBar.lazy';
import { StyledBox, StyledCardBox, StyledFlexBox, StyledImg, StyledInput, StyledSearchIconHolder, StyledTagApplying, StyledTextExtraLarge, StyledTextExtraSmall, StyledTextLarge, StyledTextMediumSmall, StyledTextRegular, StyledTextRegularLarge } from '../../components/CommonUi/CommonUi.styled';
import { ALInpIcon, CInpIcon, CalIcon, EliIcon, GrapIcon, GreCIcon, GreLIcon, OraCIcon, OraLIcon, ProfIcon, RedCIcon, RedLIcon, SegIcon } from '../../assets';

interface HomeProps { }

const Home: FC<HomeProps> = () => (
   <HomeWrapper className='' data-testid="Home">
      <StyledBox className=' px-5 mx-2 pt-4 h-screen overflow-y-scroll'>
         <StyledBox className='mt-5 flex justify-between'>
            <StyledBox>
               <StyledTextExtraLarge>Dashboard</StyledTextExtraLarge>
               <StyledTextRegularLarge style={{ color: 'rgba(173, 173, 173, 1)' }}>Hello, Thomas.  Welcome to Galucter</StyledTextRegularLarge>
            </StyledBox>
            <StyledBox className='relative'>
               <StyledInput type='search' placeholder='Search by anything' />
               <StyledSearchIconHolder><StyledImg style={{ transform: 'scale(0.6)', width: '0.5em', display: 'inline-block' }} src={SegIcon} /></StyledSearchIconHolder>
            </StyledBox>
         </StyledBox>
         <StyledBox>
            <StyledFlexBox className='justify-between my-5' >
               <StyledCardBox className='flex justify-center'>
                  <StyledBox>
                     <StyledTextRegularLarge style={{ color: 'rgba(178, 178, 178, 1)' }}>Total Applications</StyledTextRegularLarge>
                     <StyledTextExtraLarge style={{ fontWeight: '600' }}>5672</StyledTextExtraLarge>
                     <StyledBox style={{ width: '110px', padding: 0 }}>
                        <StyledImg src={GreLIcon} style={{ marginLeft: '-0.5em', marginTop: '0.3em' }} />
                     </StyledBox>
                  </StyledBox>
                  <StyledBox style={{ width: '110px' }}>
                     <StyledImg src={GreCIcon} />
                  </StyledBox>
               </StyledCardBox>
               <StyledCardBox className='flex justify-center'>
                  <StyledBox>
                     <StyledTextRegularLarge style={{ color: 'rgba(178, 178, 178, 1)' }}>Shortlisted Candidates</StyledTextRegularLarge>
                     <StyledTextExtraLarge style={{ fontWeight: '600' }}>3045</StyledTextExtraLarge>
                     <StyledBox style={{ width: '110px', padding: 0 }}>
                        <StyledImg src={OraLIcon} style={{ marginLeft: '-0.5em', marginTop: '0.3em' }} />
                     </StyledBox>
                  </StyledBox>
                  <StyledBox style={{ width: '90px' }}>
                     <StyledImg src={OraCIcon} />

                  </StyledBox>
               </StyledCardBox>
               <StyledCardBox className='flex justify-center'>
                  <StyledBox>
                     <StyledTextRegularLarge style={{ color: 'rgba(178, 178, 178, 1)' }}>Rejected Candidates</StyledTextRegularLarge>
                     <StyledTextExtraLarge style={{ fontWeight: '600' }}>1055</StyledTextExtraLarge>
                     <StyledBox style={{ width: '110px', padding: 0 }}>
                        <StyledImg src={RedLIcon} style={{ marginLeft: '-0.5em', marginTop: '0.3em' }} />
                     </StyledBox>
                  </StyledBox>
                  <StyledBox style={{ width: '90px' }}>
                     <StyledImg src={RedCIcon} />

                  </StyledBox>
               </StyledCardBox>
            </StyledFlexBox>
            <StyledCardBox>
               <StyledImg src={GrapIcon} />
            </StyledCardBox>
            <StyledFlexBox className='my-5 gap-5'>
               <StyledCardBox className='pl-5 w-3/5'>
                  <StyledBox className='w-full'>
                     <StyledFlexBox className='flex justify-between pl-5 w-full'>
                        <StyledTextLarge className='pt-3'>Activity Feed</StyledTextLarge>
                        <StyledBox style={{ width: '120px' }}>
                           <StyledImg src={ALInpIcon} />
                        </StyledBox>
                     </StyledFlexBox>
                     <StyledBox className='ml-5 mr-3'>
                        <StyledFlexBox>
                           <StyledBox style={{ width: '35px', marginTop: '1em', marginRight: '0.5em' }}>
                              <StyledImg src={ProfIcon} />
                           </StyledBox>
                           <StyledBox>

                              <StyledTextMediumSmall className='pt-3' style={{ fontWeight: 500, letterSpacing: '0.08em', color: 'rgba(0, 0, 0, 0.898)' }}><b>Marvin McKinney</b> applied for the Job <b>Product Designer</b></StyledTextMediumSmall>
                              <StyledTextExtraSmall className='py-2' style={{ fontWeight: 500 }}>10 mins ago</StyledTextExtraSmall>
                           </StyledBox>
                           <StyledTagApplying className='mt-3'>
                              Applying
                           </StyledTagApplying>
                        </StyledFlexBox>
                        <StyledFlexBox>
                           <StyledBox style={{ width: '35px', marginTop: '1em', marginRight: '0.5em' }}>
                              <StyledImg src={ProfIcon} />
                           </StyledBox>
                           <StyledBox>

                              <StyledTextMediumSmall className='pt-3' style={{ fontWeight: 500, letterSpacing: '0.08em', color: 'rgba(0, 0, 0, 0.898)' }}><b>Marvin McKinney</b> applied for the Job <b>Product Designer</b></StyledTextMediumSmall>
                              <StyledTextExtraSmall className='py-2' style={{ fontWeight: 500 }}>10 mins ago</StyledTextExtraSmall>
                           </StyledBox>
                           <StyledTagApplying className='mt-3 mx-2'>
                              Applying
                           </StyledTagApplying>
                        </StyledFlexBox>
                        <StyledFlexBox>
                           <StyledBox style={{ width: '35px', marginTop: '1em', marginRight: '0.5em' }}>
                              <StyledImg src={ProfIcon} />
                           </StyledBox>
                           <StyledBox>

                              <StyledTextMediumSmall className='pt-3' style={{ fontWeight: 500, letterSpacing: '0.08em', color: 'rgba(0, 0, 0, 0.898)' }}><b>Marvin McKinney</b> applied for the Job <b>Product Designer</b></StyledTextMediumSmall>
                              <StyledTextExtraSmall className='py-2' style={{ fontWeight: 500 }}>10 mins ago</StyledTextExtraSmall>
                           </StyledBox>
                           <StyledTagApplying className='mt-3 mx-2'>
                              Applying
                           </StyledTagApplying>
                        </StyledFlexBox>
                     </StyledBox>
                  </StyledBox>
               </StyledCardBox>

               <StyledCardBox className='pl-5 w-2/5'>
                  <StyledFlexBox className='flex justify-between w-full'>
                     <StyledTextLarge className='pt-3'>Meetings</StyledTextLarge>
                     <StyledBox style={{ width: '120px' }}>
                        <StyledImg src={CInpIcon} />
                     </StyledBox>
                  </StyledFlexBox>
                  <StyledBox className=''>
                     <StyledFlexBox className='justify-between py-1'>
                        <StyledFlexBox>
                           <StyledBox style={{ width: '40px', marginTop: '0.4em', marginRight: '0.6em' }}>
                              <StyledImg src={CalIcon} />
                           </StyledBox>
                           <StyledBox>
                              <StyledTextRegular className='' style={{ fontWeight: 500, letterSpacing: '0.08em', color: 'rgba(0, 0, 0, 0.898)' }}><b>Interview</b></StyledTextRegular>
                              <StyledTextMediumSmall style={{ fontWeight: 500, letterSpacing: '0.1rem', marginTop: '-0.7em' }}>9:00 am - 11:30 am</StyledTextMediumSmall>
                           </StyledBox>
                        </StyledFlexBox>
                        <StyledBox className='mt-2' style={{ width: '40px', height: '35px', display: 'inline-block' }}>
                           <StyledImg src={EliIcon} />
                        </StyledBox>
                     </StyledFlexBox>
                     <StyledFlexBox className='justify-between py-1'>
                        <StyledFlexBox>
                           <StyledBox style={{ width: '40px', marginTop: '0.4em', marginRight: '0.6em' }}>
                              <StyledImg src={CalIcon} />
                           </StyledBox>
                           <StyledBox>
                              <StyledTextRegular className='' style={{ fontWeight: 500, letterSpacing: '0.08em', color: 'rgba(0, 0, 0, 0.898)' }}><b>Organisational Meeting</b></StyledTextRegular>
                              <StyledTextMediumSmall style={{ fontWeight: 500, letterSpacing: '0.1rem', marginTop: '-0.7em' }}>9:00 am - 11:30 am</StyledTextMediumSmall>
                           </StyledBox>
                        </StyledFlexBox>
                        <StyledBox className='mt-2' style={{ width: '40px', height: '35px', display: 'inline-block' }}>
                           <StyledImg src={EliIcon} />
                        </StyledBox>
                     </StyledFlexBox>
                     <StyledFlexBox className='justify-between py-1'>
                        <StyledFlexBox>
                           <StyledBox style={{ width: '40px', marginTop: '0.4em', marginRight: '0.6em' }}>
                              <StyledImg src={CalIcon} />
                           </StyledBox>
                           <StyledBox>
                              <StyledTextRegular className='' style={{ fontWeight: 500, letterSpacing: '0.08em', color: 'rgba(0, 0, 0, 0.898)' }}><b>Meeting with the manager</b></StyledTextRegular>
                              <StyledTextMediumSmall style={{ fontWeight: 500, letterSpacing: '0.1rem', marginTop: '-0.7em' }}>9:00 am - 11:30 am</StyledTextMediumSmall>
                           </StyledBox>
                        </StyledFlexBox>
                        <StyledBox className='mt-2' style={{ width: '40px', height: '35px', display: 'inline-block' }}>
                           <StyledImg src={EliIcon} />
                        </StyledBox>
                     </StyledFlexBox>
                  </StyledBox>
               </StyledCardBox>
            </StyledFlexBox>



         </StyledBox>
      </StyledBox>
      <HomeAsideBar />
   </HomeWrapper>
);

export default Home;
