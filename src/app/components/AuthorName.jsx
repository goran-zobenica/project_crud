import React from 'react'
import { searchUser } from '../../services/userServices'

class AuthorName extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            authorName: "loading"
        }
    }

    componentDidMount() {
        searchUser(this.props.id)
            .then(authorName => this.setState({ authorName }))
    }

    render() {
        if (this.state.authorName==="loading") {return <div className="circleLoader"></div>}
        
        return (
            <span>{` ${this.state.authorName} `}</span>
        )
    }
}

export default AuthorName