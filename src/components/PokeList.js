import React from 'react';
import './styles/PokeList.css';
import { pokeClasses } from '../pokeClasses';
import PokeCell from './PokeCell';

const PokeList = () => {
    const cells = pokeClasses.map(pokeClass => {
        return (
          <PokeCell key= {pokeClass.id}
          pokeClass={pokeClass}  
        />
        );
    }); 
    return(
        <section className="poke-list">
            {cells}
        </section>
    );
}

export default PokeList;