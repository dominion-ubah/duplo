import React, { FC } from 'react';
import { AdminWrapper } from './Admin.styled';

interface AdminProps {}

const Admin: FC<AdminProps> = () => (
 <AdminWrapper data-testid="Admin">
    Admin Component
 </AdminWrapper>
);

export default Admin;
