import React, { useEffect, useState } from 'react'
import Card from './Card';
import Pokainfo from './Pokainfo';
import axios from 'axios';

const Main = () => {
    const[pokidata, setPokiData]=useState([]);
    const[loading, setLoading]=useState(true);
    const[url, setUrl]=useState("https://pokeapi.co/api/v2/pokemon/");
    const[nexturl, setNextUrl]=useState();
    const[prevurl, setPrevUrl]=useState();
    const[pokeDex, setPokeDex]=useState();

    const pokfun= async()=>{
        setLoading(true);
        const res = await axios.get(url);
        // console.log(res.data.results);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results)
        setLoading(false);
        // console.log(pokidata)
    }
    const getPokemon= async(res)=>{
        res.map( async(item)=>{
            const result = await axios.get(item.url);
            // console.log(result.data)
            setPokiData(state=>{
                state=[...state,result.data]
                state.sort((a,b)=>a.id>b.id?1:-0)
                return state;
            })
        })
    }
    useEffect(()=>{
        pokfun();
    },[url])
  return (
    <>
    <div className="container">
        <div className="letf-content">
            <Card pokemon={pokidata} loading={loading} infoPokemon={poke=>setPokeDex(poke)}/>
            
            <div className="btn-group">
                {prevurl && <button onClick={()=>{setPokiData([])
                        setUrl(prevurl)}}>Previous</button>}

                {nexturl && <button onClick={()=> {setPokiData([]) 
                         setUrl(nexturl)}}>Next</button>}
            </div>
        </div>
        <div className="right-content">
            <Pokainfo data={pokeDex}/>
        </div>
    </div>
    </>
  )
}

export default Main;