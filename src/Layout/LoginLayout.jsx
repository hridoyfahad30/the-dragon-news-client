import React from 'react';
import DragonNav from '../Pages/Shared/DragonNav/DragonNav';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <DragonNav></DragonNav>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;