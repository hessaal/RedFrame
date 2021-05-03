import React, { useEffect, useState } from 'react';

export function Statics(run) {
    // this will set the number of designs, clints, arts, productions red frame represented in page
    const [design, setDesign] = useState(0);
    const [clint, setClint] = useState(0);
    const [art, setArt] = useState(0);
    const [production, setProduction] = useState(0);

    // this will set the value of designs, clints, arts, productions taking from server
    const [numbers, setNumbers] = useState({
        design: 0,
        clint: 0,
        art: 0,
        production: 0
    })

    // the designs, clints, arts, productions value will increse every 40ms
    useEffect(() => {
        fetchData();
        const intervalId = setInterval(() => addNum(), 40);
        return () =>
            clearInterval(intervalId);
    });


    function fetchData() {
        // fetch('http://127.0.0.1:8000/api/projects/')
        //     .then(response => response.json())
        //     .then(data =>
        //         setNumbers({
        //             design: data.filter(d => d.ServiceType === "Design").length,
        //             clint: data.length,
        //             art: data.filter(d => d.ServiceType === "Events").length,
        //             production: data.filter(d => d.ServiceType === "Production").length
        //         })

        //     )
    }

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