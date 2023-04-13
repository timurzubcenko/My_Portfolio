import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage';
import SendMessage from '../pages/SendMessage/SendMessage';

const MyRoute = ({ statusLink, setStatusLink }) => {
    return (
        <Routes>
            <Route path='/home' element={<HomePage statusLink={statusLink} setStatusLink={setStatusLink} />} />
            <Route path='/' element={<Navigate to={'/home'} />} />
            <Route path='*' element={<Navigate to={'/home'} />} />
            {statusLink === 2 ? <Route path='/sendMessage' element={<SendMessage />} /> : ''}
        </Routes>
    );
};

export default MyRoute;