import React, { Component } from "react";
import Pokemon from "./Pokemon";
import pokemons from "./data";
import './Pokedex.css'

class Pokedex extends Component {
  render() {
    return (
      <main>
        <h1>My Pokedex</h1>
        <div className="Pokedex-container">
          {pokemons.map((currPkm) => {
            return (<Pokemon key={currPkm.id} pokemonData={currPkm} />);
          })}
        </div>
      </main>
    );
  }
}

export default Pokedex;
