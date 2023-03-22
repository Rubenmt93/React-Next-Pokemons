import React from 'react'

const Pokemon = ({pokemon}) => {
  return (
    <li>{pokemon.name}</li>
  )
}



export default function Pokemones({pokemones}) {

  return (
    <div>
      <p>Pokemons</p>

      <ul>
        {pokemones.map(pokemon => <Pokemon pokemon={pokemon} key= {pokemon.name}></Pokemon>)}
      </ul>
    </div>
  ) 
}
export const getStaticProps = async () => {
  const response =await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const data = await response.json()
  return {
    props: { pokemones: data.results}
  }

}