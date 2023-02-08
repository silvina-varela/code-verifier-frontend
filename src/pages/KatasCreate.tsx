import React, {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { useSessionStorage } from '../hooks/useSessionStorage';

export const KatasCreate = () => {
    let loggedIn = useSessionStorage('sessionJWTtoken');
    let navigate = useNavigate();

    useEffect(()=> {
        if(!loggedIn){
            return navigate('/login');
        } else{
                return navigate('/login');
            }
           
        }, [loggedIn])

    return(
        <div>
            Hi
        </div>
    )
}