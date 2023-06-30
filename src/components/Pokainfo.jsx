import React from 'react'

const Pokainfo = ({ data }) => {
    // console.log("dddd", data)
    return (
        <>
            {
                (!data) ? "" : (
                    <>
                        <h1>{data.name}</h1>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`} alt="" />
                        <div className="abilites">
                            {
                                data.abilities.map((poke,i) => {
                                    return (
                                        <div key={i}>
                                            <div className="group">
                                                <h2>{poke.ability.name}</h2>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            
                        </div>
                        <div className="base-stat">
                            {
                                data.stats.map((poke , i) =>{
                                    return(
                                        <div key={i}>
                                        <h3 >{poke.stat.name}:{poke.base_stat}</h3>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </>
                )
            }

        </>
    )
}

export default Pokainfo;