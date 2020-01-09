import React from 'react';
import Button from './Button'
import { withRouter } from "react-router";
import { Link } from "react-router-dom";



const Header = (props) => {
    
    let button1 = props.isLogged?"Dashboard":"Posts"
    let button2 = props.isLogged?"My Posts":"About"
    let link1 = props.isLogged?"/dashboard":"/posts"
    let link2 = props.isLogged?"/myposts":"/about"
    let user = props.isLogged?localStorage.getItem("userName"):""

    return (
            <header className="header row">
                <div className="col-4">
                <span className='logoBitCrud'> BIT CRUD </span>
                </div>
                <div className="col-4">
                <p className='userName'> {user} </p>
                </div>
                <div className='navBarHeader col-4'>
                    <Link to={link2}><Button value={button2} className='aboutHeader' onClick={() => { return }} /></Link>
                    <Link to={link1}><Button value={button1} className='postsHeader' onClick={() => { return }} /></Link>
                </div>
            </header>
    )
}

export default withRouter(Header)