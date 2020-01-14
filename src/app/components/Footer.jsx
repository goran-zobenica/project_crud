import React, { useEffect } from 'react';
import Button from './Button'
import { Link } from 'react-router-dom'

const Footer = () => {

    const isLogged = !!localStorage.getItem("isLogged")

    let button = (isLogged ? "Sign Out" : "Sign In");
    let link = (isLogged ? "/" : "/login");
    

    useEffect(() => {
        console.log(isLogged)
    })


    const logOut = () => {

        localStorage.removeItem('isLogged');
        localStorage.removeItem('currentUser');
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');
    }

    return (
        <div className="row">
            <footer className="footer col">
                <h4>{new Date().getFullYear()}© PlazmaTeam </h4>
                <Link to={link}><Button value={button} className='signInButton' onClick={() => logOut()} /></Link>
            </footer>
        </div>
    )
}

export default Footer