import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSessionStorage } from '../hooks/useSessionStorage';
import { getAllKatas } from '../services/katasService';
import { Kata } from '../utils/types/Kata.type';

export const KatasPage = () => {
    let loggedIn = useSessionStorage('sessionJWTtoken')
    let navigate = useNavigate();
    const [katas, setKatas] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(()=> {
        if(!loggedIn){
            return navigate('/login');
        } else {
            getAllKatas(loggedIn, 2, 1).then((response: AxiosResponse) => {
                if(response.status === 200 && response.data.katas && response.data.totalPages && response.data.currentPage) {
                    console.table(response.data);
                    let { katas, totalPages, currentPage } = response.data;
                    setKatas(katas);
                    setTotalPages(totalPages);
                    setCurrentPage(currentPage);
                } else {
                    throw new Error(`Error obtaining katas: ${response.data}`);
                }
            }).catch((error) => console.error(`[Get all katas error]: ${error}`))
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
            <h1>Katas</h1>
            
            {
                katas.length > 0 ?
                    <div>
                        <ul>
                            { katas.map((kata: Kata) => 
                                <li key={kata._id}>
                                    <h3 onClick={() => navigateToKataDetail(kata._id)}>{kata.name}</h3>
                                    <h5>{kata.description}</h5>
                                    <h5>Created by {kata.creator}</h5>
                                    <p>Rating: {kata.stars} / 5</p>
                                </li>
                                )
                            }
                        </ul>
                    </div>  
                : 
                    <div>
                        <h5>No katas found</h5>
                    </div>
            }
        </div>
    )
}