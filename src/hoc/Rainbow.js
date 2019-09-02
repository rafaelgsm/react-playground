import React from 'react'

/**
 * What we want is to have a Component that will return a "supercharged" component.
 * 
 * This one will wrap some component in a div with a class name of a random color.
 */

//When we do:
//export default withRouter(Navbar)
//We receive it as a "WrappedComponent"
const Rainbow = (WrappedComponent) => {

    const colors = ['red', 'pink', 'orange', 'blue', 'green', 'yellow']
    const randomColor = colors[Math.floor(Math.random() * 5)]   //Random color between 0 and 5

    //Make class name based on the color
    const className = randomColor + '-text'

    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}

export default Rainbow