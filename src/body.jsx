import myImage from './assets/cardimage.png';
import { useEffect } from 'react';

function Card() {
    return(
        <div className={"card"}>
            <div className={"card-body"}>
                <img src={myImage} alt="" />
            </div>
            <div className={"card-footer"}>
                <p>Wally</p>
            </div>
        </div>
    );
}

function Body() {

      useEffect(() => {
        async function fetchPokemon() {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/bulbasaur`);
          const data = await response.json();
          
          console.log(data)
        }
    
        fetchPokemon();
      }, []);

    return(
        <>
        <div className={"score-line"}>

            <div className={"game-name"}>
                <h2>Memory Game</h2>
                <p>Get points by clicking on an image but don't click on any more than once!</p>
            </div>

            <div className={"game-score"}>
                <p>Score: 0</p>
                <p>Best Score: 8</p>
            </div>

        </div>

        <div className={"container"}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        </>
    );

}

export default Body;