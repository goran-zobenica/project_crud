import React from 'react'
import { fetchPostComments } from '../../services/postServices'

class CommentsNumber extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            totalComments: "loading"
        }
    }
    componentDidMount() {
        fetchPostComments(this.props.id)
            .then(totalComments => this.setState({ totalComments }))
    }
    render() {

        if (this.state.totalComments==="loading") {return <div className="circleLoader"></div>}

        return (
            <span>{this.state.totalComments}</span>
        )
    }
}

export default CommentsNumber