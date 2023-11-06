import React, { FC } from 'react';
import { DashboardWrapper } from './Dashboard.styled';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar.lazy';
import { StyledFlexBox } from '../../components/CommonUi/CommonUi.styled';

interface DashboardProps { }

const Dashboard: FC<DashboardProps> = () => (
   <DashboardWrapper data-testid="Dashboard">
      <Sidebar />
      <StyledFlexBox className='flex-grow box-border' >
         <Outlet />
      </StyledFlexBox>
   </DashboardWrapper>
);

export default Dashboard;
