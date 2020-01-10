import React, {useState} from 'react'
import { searchUser } from '../../services/userServices'
import { useEffect } from 'react';

const AuthorName = props => {

    const [authorName, setAuthorName] = useState(false);
    useEffect(
        () => {
            searchUser(props.id).then(authorName => setAuthorName(authorName))

        },[props.id])
    if (!authorName) { return <div className="circleLoader"></div> }

    return (
        <span>{` ${authorName} `}</span>
    )
}

/*
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
*/
export default AuthorName