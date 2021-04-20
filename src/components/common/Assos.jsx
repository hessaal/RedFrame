import React, { useState, useEffect } from "react";

export function Assos() {
    // partners is the number of success partners presented in the screen 
    const [partners, setPartners] = useState(0);

    // partners_holder is the number of success partners red frame has 
    let partners_holder = 10;

    // the partners number will increse by one every 100ms
    useEffect(() => {
        const intervalId = setInterval(() => plus(), 100);
        return function cleanup() {
            clearInterval(intervalId);
        };;
    });

    // the partners number will keep incresing until its reach to success partners number that red frame has 
    function plus() {
        if (partners < partners_holder)
            setPartners(partners + 1);
    }

    return (
        // these will return circle shape contains partners number inside 
        <svg height='100%' width='100%'>
            <circle cx="72%" cy="50%" r="85"
                stroke="white"
                strokeWidth="2"
                fill="none"
            />
            <text x="72%" y="65%"
                textAnchor="middle"
                fill='white'
                strokeWidth='4'
                stroke='white'
                fontSize="6rem"
                textLength="110" lengthAdjust="spacing"
            > {partners} </text>
        </svg>
    );


}

export default Assos;