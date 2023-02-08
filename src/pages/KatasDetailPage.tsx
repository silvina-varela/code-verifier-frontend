import { AxiosResponse } from 'axios';
import React, {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { Editor } from '../components/editor/Editor';
import { useSessionStorage } from '../hooks/useSessionStorage';
import { getKataByID } from '../services/katasService';
import { Kata } from '../utils/types/Kata.type';

export const KatasDetail = () => {
    let { id } = useParams();

    let loggedIn = useSessionStorage('sessionJWTtoken')
    let navigate = useNavigate();
    const [kata, setKata] = useState<Kata | undefined>(undefined)
    const [showSolution, setShowSolution] = useState(false)
    
    useEffect(()=> {
        if(!loggedIn){
            return navigate('/login');
        } else {
            if(id){
                getKataByID(loggedIn, id).then((response: AxiosResponse) => {
                    if(response.status === 200 && response.data) {
                        let kataData = {
                            _id: response.data._id,
                            name: response.data.name,
                            description: response.data.description,
                            stars: response.data.stars,
                            level: response.data.level,
                            attempts: response.data.attempts,
                            creator: response.data.creator,
                            solution: response.data.solution,
                            participants: response.data.participants
                        }
                        setKata(kataData)
                        console.table(kata)
                    }
                }).catch((error) => console.error(`[Kata By Id Error]: ${error}`))
            } else{
                return navigate('/katas');
            }
           
        }
    }, [loggedIn])

    return(
        <div>
            <h2>Katas Detail Page: { id }</h2>

            {   kata ? 
                <div>
                    <h2>{kata?.description}</h2>
                    <h3>Rating: {kata.stars}/5</h3>
                    <button onClick={() => setShowSolution(!showSolution)}>{showSolution ? 'Show solution' : 'Hide solution'}</button>
            { !showSolution ? <Editor language='typescript'>{kata?.solution}</Editor> : null}
            
                </div>
                :
                <div>
                    <h2>
                        Loading...
                    </h2>
                </div>


            }

            
        </div>
    )
}