import React, { Component } from 'react';
import axios from 'axios'   //for http requests

import { Link } from 'react-router-dom'

import Sphere from '../sphere.jpg'

/**
 * 
 * Home Component will now request and display a list of posts.
 * 
 * Home must be a container component so we can have access to its lifecycle methods.
 */
class Home extends Component {

    state = {
        posts: []
    }

    //Do the request when the component is created:
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {

                //Sets the state to have the first 10 posts:
                this.setState({
                    posts: res.data.slice(0, 10)
                })

            })
    }

    render() {

        const { posts } = this.state
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

export default Home