import React from 'react';

/* 
this component will return button element 
while :

label: is the button content 
handleClick: is what will happen if this button clicked
type: is button type (button by default)
classname: is button class name (empty by default)
id: is button id (empty by default)

*/
const Button = ({ label, handleClick, type = 'button', classname = '', id = '', delay = 0 }) => {
    return (
        <button
            id={id}
            className={classname}
            type={type}
            onClick={handleClick}
            style={{
                animationDelay: `${delay * .25}s`
            }}
        >{label}
        </button>

    );
};

export default Button;