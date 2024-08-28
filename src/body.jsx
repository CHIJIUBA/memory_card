import myImage from './assets/cardimage.png';
import { useEffect, useState } from 'react';

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

    const [address, setAddress] = useState("lagos")

    useEffect(() => {

        fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${address}?key=RG6TK6E2VCGQ377MRP7SWA6HJ`)
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
        })
        .catch((error) => console.log(error))

    }, [address]);


    const handleSubmit = () => {
        let addressInput = document.querySelector("#address");
        setAddress(addressInput.value);
    }

    return(
        <>
        <div className={"score-line"}>
            <div className={"game-name"}>
                <h2>{ address }</h2>
                <p>Get points by clicking on an image but don't click on any more than once!</p>
            </div>
            <div className={"game-score"}>
                <p>Score: 0</p>
                <p>Best Score: 8</p>
            </div>
        </div>

        <div className={"container"}>
            <Card/>
        </div>

        <div className='input'>
            <input type="text" id='address'/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
        </>
    );

}

export default Body;