import React, { useEffect, useState } from 'react';

export function Statics() {
    // this will set the number of designs, clints, arts, productions red frame represented in page
    const [design, setDesign] = useState(0);
    const [clint, setClint] = useState(0);
    const [art, setArt] = useState(0);
    const [production, setProduction] = useState(0);

    // this will set the value of designs, clints, arts, productions taking from server
    const [numbers, setNumbers] = useState({
        design: 80,
        clint: 40,
        art: 35,
        production: 20
    })

    // the designs, clints, arts, productions value will increse every 40ms
    useEffect(() => {
        const intervalId = setInterval(() => addNum(), 40);
        return () =>
            clearInterval(intervalId);
    });

    // this function will increse the numbers by one if they not reach the numbers that red frames have
    function addNum() {
        if (clint < numbers.clint) {
            setClint(clint + 1)
        }
        if (design < numbers.design) {
            setDesign(design + 1)
        }
        if (art < numbers.art) {
            setArt(art + 1)
        }
        if (production < numbers.production) {
            setProduction(production + 1)
        }
    }

    return (
        // this will show the numbers on screen 
        <tr>
            <td><h3>{design}</h3></td>
            <td><h3>{clint}</h3></td>
            <td><h3>{art}</h3></td>
            <td><h3>{production}</h3></td>
        </tr>
    )

}

export default Statics;