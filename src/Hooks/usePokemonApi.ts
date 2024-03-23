import { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
interface pokemon { 
    name: string,
    url: string
}
interface PokemonApiResponse {
    count: number, 
    next: string,
    previous: string,
    results: pokemon[]
}
type Direction = "previous" | "next"

export default function usePokemonApi(){
    const [jsonData, setjsonData] = useState <PokemonApiResponse | null>(null);
    const [url, setUrl] = useState ("https://pokeapi.co/api/v2/pokemon/");
    useEffect(()=>{
        async function fetchData(){
            const res = await fetch(url);
            const data = await res.json();
            setjsonData(data);
        }
        fetchData();
    },[url])
    function pagination(direction : Direction){
        if(jsonData){
            setUrl(jsonData[direction])
        }

    }
    return { jsonData, pagination}
}
