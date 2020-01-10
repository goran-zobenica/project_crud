import React from 'react';
import Button from './Button'
import { withRouter } from "react-router";
import { Link } from "react-router-dom";



const Header = (props) => {

    let button1 = props.isLogged ? "Dashboard" : "Posts"
    let button2 = props.isLogged ? "My Posts" : "About"
    let link1 = props.isLogged ? "/dashboard" : "/posts"
    let link2 = props.isLogged ? "/myposts" : "/about"
    let user = props.isLogged ? `Logged as: ${localStorage.getItem("userName")}` : ""

    return (
        <header className="header row">
            <div className="col-sm-12 col-md-6">
            <div className="userName">
                <p>{user} </p>
            </div>
                <p className='logoBitCrud'> BIT CRUD </p>
            </div>
            <div className='navBarHeader col-sm-12 col-md-6'>
                <Link to={link2}><Button value={button2} className='aboutHeader' onClick={() => { return }} /></Link>
                <Link to={link1}><Button value={button1} className='postsHeader' onClick={() => { return }} /></Link>
            </div>
        </header>
    )
}

export default withRouter(Header)