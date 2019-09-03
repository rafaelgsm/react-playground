import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import Sphere from '../sphere.jpg'

import { connect } from 'react-redux' //connect function to glue REDUX to our component.

/**
 * 
 * Home now will access data from the REDUX store.
 */
class Home extends Component {

    render() {

        //Now we are using props passed from redux store:        
        const { posts } = this.props
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>

                        <img src={Sphere} alt="A sphere" />

                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title red-text">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div >
                )
            })
        ) : (
                <div className="center">No posts yet</div>
            )


        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}

const x = 1

{/* We will create a function to take the state and map it to props */ }
const mapStateToProps = (state) => {

    //Returns the different properties that you want to add to the props:
    return {
        posts: state.posts
    }
}

{/* So it knows what data it want to grab from redux, and pass it to props */}
export default connect(mapStateToProps)(Home)   