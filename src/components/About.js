import React from 'react';

import Rainbow from '../hoc/Rainbow';

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum cumque facilis quas dolor, aut iure consequatur illo suscipit qui impedit provident voluptates fuga, fugit quod sunt molestias nemo eos inventore.</p>
        </div>
    )
}

export default Rainbow(About)