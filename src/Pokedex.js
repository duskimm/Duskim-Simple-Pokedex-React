import React, { Component } from 'react'
import Pokemon from './Pokemon'

export default class Pokemons extends Component {

  render() {
    const { pokemons } = this.props;
    return (
      <div className="pokedex">
        {pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} /> )}
      </div>
    );
  }
}
