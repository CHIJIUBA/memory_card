import { useEffect, useState } from "react";

    const Fetch = () => {
    const [imageURL, setImageURL] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
        .then((response) => response.json())
        .then((response) => setImageURL(response[0].url))
        .catch((error) => console.error(error));
    }, []);

    if (error) return <p>A network error was encountered</p>

    return (
        imageURL && (
        <>
            <h1>An image</h1>
            <img src={imageURL} alt={"placeholder text"} />
        </>
        )
    );
    };

export default Fetch;