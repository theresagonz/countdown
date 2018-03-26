import React, { Component } from 'react';

import squirrel from '../media/squirrel.jpg';
import pug from '../media/pug.jpg';
import donuts from '../media/donuts.jpg';
import hamster from '../media/hamster.jpg';
import kitten from '../media/kitten.jpg';
import lamb from '../media/lamb.jpg';
import mouse from '../media/mouse.jpg';
import quokka from '../media/quokka.jpg';
import redpanda from '../media/redpanda.jpg';
import seal from '../media/seal.jpg';

export default class AnimalPic extends Component {
  getRandomAnimal = () => {
    const animalArray = [
      kitten,
      hamster,
      squirrel,
      pug,
      donuts,
      lamb,
      mouse,
      quokka,
      redpanda,
      seal
    ];
    const animalIndex = Math.floor(Math.random() * animalArray.length);
    return animalArray[animalIndex];
  };

  render() {
    const randomAnimal = this.getRandomAnimal();
    return (
      <div>
        <img src={randomAnimal} id="animal-pic" alt="random-excited-animal" />
      </div>
    );
  }
}
