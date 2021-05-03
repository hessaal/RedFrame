import React, { useState, useEffect } from "react";

export function Assos() {
    // partners is the number of success partners presented in the screen 
    const [partners, setPartners] = useState(0);

    // partners_holder is the number of success partners red frame has 
    let partners_holder = 0;

    // the partners number will increse by one every 10ms
    useEffect(() => {
        fetchData();
        const intervalId = setInterval(() => plus(), 10);
        return function cleanup() {
            clearInterval(intervalId);
        };;
    });

    function fetchData() {
        // fetch('https://random-data-api.com/api/cannabis/random_cannabis?size=30')
        //     .then(response => response.json())
        //     .then(data => {
        //         partners_holder = data.length
        //         console.log(data)
        //     }
        //     )
    }

    // the partners number will keep incresing until its reach to success partners number that red frame has 
    function plus() {
        if (partners < partners_holder)
            setPartners(partners + 1);
    }

    return (
        // these will return circle shape contains partners number inside 
        <svg height='auto' width='100%'>
            <circle cx="72%" cy="50%" r="75"
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