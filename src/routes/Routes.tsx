import { Routes, Route, Navigate } from 'react-router-dom';

import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { KatasPage } from '../pages/KatasPage';
import { KatasDetail } from '../pages/KatasDetailPage';

export const AppRoutes = () => {
    return (
<Routes>
    <Route path='/' element={<HomePage/>}></Route> 
    <Route path='/login' element={<LoginPage/>}></Route>
    <Route path='/register' element={<RegisterPage/>}></Route>
    <Route path='/katas' element={<KatasPage/>}></Route>
    <Route path='/katas/:id' element={<KatasDetail/>}></Route>
    {/* Redirect Page Not Found */}
    <Route path='*' element={<Navigate to='/' replace />}></Route>
</Routes>
    )
}