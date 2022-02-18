import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Pokemon.css'

class Pokemon extends Component {
  render() { 
    const { name, type, averageWeight, image } = this.props.pokemonData;
    return (
      <section className="Pokemon">
        <div>
          <h2>{name}</h2>
          <p>Type: {type}</p>
          <p>Average weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
        <img src={image} alt={`${name} sprite`}/>
      </section>
    );
  }
}

Pokemon.propTypes = {
  pokemonData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string.isRequired
  })
};

export default Pokemon;