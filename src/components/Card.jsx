import React from 'react'

const Card = ({ pokemon, loading, infoPokemon}) => {
    // console.log(pokemon)
    return (
        <>
            {
                loading ? <h1>Loading...</h1> :
                    pokemon.map((item,i) => {
                        return (
                            <div key={i}>
                                <div className="card"  onClick={()=>infoPokemon(item)}>
                                    <h2>{item.id}</h2>
                                    <img src={item.sprites.front_default} alt="chr"/>
                                    <h2>{item.name}</h2>
                                </div>
                            </div>
                        )
                    })
            }

        </>
    )
}

export default Card;