import React, { FC, useState, useEffect } from 'react';
import { DashboardWrapper } from './Dashboard.styled';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar.lazy';
import { StyledFlexBox } from '../../components/CommonUi/CommonUi.styled';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';

interface DashboardProps { }

const Dashboard: FC<DashboardProps> = () => {

   const [authUser, setAuthUser] = useState<any>(null)

useEffect(() => {
   const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
         setAuthUser(user)
      }else {
         setAuthUser(null)
      }

      return () => {
         listen()
      }
   })
}, [])


   return (
   <DashboardWrapper data-testid="Dashboard">
      <Sidebar />
      <StyledFlexBox className='flex-grow box-border' >
         <Outlet />
      </StyledFlexBox>
   </DashboardWrapper>
)};

export default Dashboard;
