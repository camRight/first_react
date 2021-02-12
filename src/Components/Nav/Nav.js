import React from 'react';

const Nav = () => {
    const num = 2;

    const styles = {
        color: num < 5 ? "red" : "green",
    };

    return (
        <div>
            <h1 style={styles}>Hello world {num}</h1>
        </div>
    );
};


export default Nav;