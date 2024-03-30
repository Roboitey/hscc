import { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import Pokemon from "../componets/Pokemon";
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

/* The function "getPokemon(id)" is getting the data from "pokeapi" and calling the data */
export function getPokemon(id) {
    const [pokemon, setPokemon] = useState();
    useEffect(()=>{
        async function fetchData() {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const data = await res.json();
            setPokemon(data);
        }
        fetchData();
    },[id])
    return pokemon;
}