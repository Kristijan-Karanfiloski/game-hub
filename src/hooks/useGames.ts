import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";
import {CanceledError} from "axios";

interface Game {
    id:number;
    name:string;

}

interface FetchGamesResponse {
    count: number;
    results:Game[]
}


const MyComponent = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(()=>{
        const controller=new AbortController()

        apiClient.get<FetchGamesResponse>('/games',{signal:controller.signal})
            .then(response=>{
                // console.log(response);
                setGames(response.data.results)
            })
            .catch(err=> {
                if(err instanceof CanceledError) return
                setError(err.message)
            })

        return ()=>{
            controller.abort()
        }
    },[])

    return {games,error}

};

export default MyComponent;
