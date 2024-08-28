import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Bend() {


    return (
        <>
            <h1 className="hello">Hello World</h1>
            <p>This is the profile page</p>
            <Link to="/">go to back</Link>
        </>
    );
}

export default Bend;