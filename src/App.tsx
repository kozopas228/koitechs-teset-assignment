import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const App = () => {
    return (
        <div className='App'>
            <Outlet />
        </div>
    );
};

export default App;
