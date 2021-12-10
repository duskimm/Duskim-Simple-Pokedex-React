import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Pokemon extends Component {
  static propTypes = {
    pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
    }).isRequired,
  }

  
  render() {
    const { pokemon: { name, type, averageWeight, image}} = this.props;
    return (
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
        </div>
        <img src={image} alt={ `${name} sprite` } />
        
      </div>
    )
  }
}
