import React from 'react';

//The Router Component also passes props.
//So we can get them here:
const Contact = (props) => {

    //Inside the router props, theres the history object,
    //Where we can do redirects using the .push() method:
    // setTimeout(() => {
    //     props.history.push('/about')    //Redirect to about page after 2 secs
    // }, 2000)


    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum cumque facilis quas dolor, aut iure consequatur illo suscipit qui impedit provident voluptates fuga, fugit quod sunt molestias nemo eos inventore.</p>
        </div>
    )
}

export default Contact