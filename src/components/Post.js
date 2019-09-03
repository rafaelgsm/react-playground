import React, { Component } from 'react'
import { connect } from 'react-redux'

import { deletePost } from '../actions/postActions'

class Post extends Component {

    handleClick = () => {
        this.props.deletePost(this.props.post.id)
        this.props.history.push('./')   //Redirects to the homepage
    }

    render() {

        console.log(this.props);


        const post = this.props.post ?
            (
                <div className="post">
                    <h4 className="center">{this.props.post.title}</h4>
                    <p>{this.props.post.body}</p>

                    <div className="center">
                        <button className="btn grey" onClick={this.handleClick}>
                            Delete Post
                        </button>
                    </div>
                </div>
            ) : (
                <div className="center">Loading post...</div>
            )


        return (
            <div className="container">
                {post}
            </div>
        )
    }
}


/**
 * mapStateToProps?: (state, ownProps?) => Object
 */
// We can also access the current props owned by the Component here:
const mapStateToProps = (state, ownProps) => {

    let id = ownProps.match.params.post_id  //So we can access the param like so.

    //Returns an object with a single post:
    return {
        post: state.posts.find(post => post.id === id)
    }
}

/**
 * mapDispatchToProps?: Object | (dispatch, ownProps?) => Object
 */
//'deletePost' will be attached to our props.
const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch(deletePost(id)) }
    }
}

// https://react-redux.js.org/api/connect
//function connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)

export default connect(mapStateToProps, mapDispatchToProps)(Post)