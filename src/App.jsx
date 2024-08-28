import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom';

function App() {

    return (
       <>
            <h1 className={"hello"}>This is the landing page</h1>
            <Link to="profile">go to profile</Link>
       </>
    );
}

export default App
