import React, { Component } from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';

export default class SolarSystem extends Component {
  render() {
    return (
      <>
        <div data-testid="solar-system" />
        <Title headline="Planetas" />
        {planets.map(({ name, image }, index) => (<PlanetCard
          key={ name + index }
          planetName={ name }
          planetImage={ image }
        />))}
      </>
    );
  }
}
