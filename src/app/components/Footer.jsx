import React from 'react';
import Button from './Button'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

const Footer = (props) => {

    let button = (props.isLogged ? "Sign Out" : "Sign In")
    let link = (props.isLogged ? "/" : "/login")

    const logOut = () => {
        localStorage.removeItem('isLogged')
        localStorage.removeItem('currentUser')
        localStorage.removeItem('userId')
        localStorage.removeItem('userName')
        props.changeLogStatus(false);
        props.history.push('/')
    }

    return (
        <div className="row">
            <footer className="footer col">
                <h4>{new Date().getFullYear()}© PlazmaTeam</h4>
                <Link to={link}><Button value={button} className='signInButton' onClick={() => logOut()} /></Link>
            </footer>
        </div>
    )
}

export default withRouter(Footer)