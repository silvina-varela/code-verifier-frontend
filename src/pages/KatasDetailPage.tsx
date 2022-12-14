import React, {useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { useSessionStorage } from '../hooks/useSessionStorage';

export const KatasDetail = () => {
    let { id } = useParams();

    let loggedIn = useSessionStorage('sessionJWTtoken')
    let navigate = useNavigate();

    useEffect(()=> {
        if(!loggedIn){
            return navigate('/login');
        }
    }, [loggedIn])

    return(
        <div>
            <h2>Katas Detail Page: { id }</h2>
    
            </div>
    )
}