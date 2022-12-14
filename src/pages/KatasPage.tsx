import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { useSessionStorage } from '../hooks/useSessionStorage';

export const KatasPage = () => {
    let loggedIn = useSessionStorage('sessionJWTtoken')
    let navigate = useNavigate();

    useEffect(()=> {
        if(!loggedIn){
            return navigate('/login');
        }
    }, [loggedIn])

    /**
     * Method to navigate to Kata detail
     * @param id of Kata to navigate to
     */
    const navigateToKataDetail = (id: number) => {
        navigate(`/katas/${id}`)
    }

    return(
        <div>
            Katas
            {/* TODO: Use real katas */}
            <ul>
                <li onClick={ () => navigateToKataDetail(1)}>First Kata</li>
                <li onClick={ () => navigateToKataDetail(2)}>Second Kata</li>
            </ul>
        </div>
    )
}