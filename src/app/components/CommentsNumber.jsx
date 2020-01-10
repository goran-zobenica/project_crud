import React, { useState, useEffect } from 'react'
import { fetchPostComments } from '../../services/postServices'

const CommentsNumber = (props) => {
    const [totalComments, setTotalComments] = useState("loading");
    useEffect(
        () => {
            fetchPostComments(props.id).then(totalComments => setTotalComments(totalComments))
        }, [props.id])

    if (totalComments === "loading") { return <div className="circleLoader"></div> }

    return (
        <span>{totalComments}</span>
    )
}

/*
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
*/

export default CommentsNumber