import React, { useState, useEffect } from "react";

export function Clock() {
    // time is date varible 
    const [time, setTime] = useState(new Date());

    // minhand is to get the movment and angle of minute hand in the clock 
    const [minhand, setminhand] = useState('');

    // hourhand is to get the movment and angle of hour hand in the clock 
    const [hourhand, sethourhand] = useState('');

    var min;
    var hour;
    var minangle;
    var hourangle;

    // options is hoe to present the date 
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    // the time on clock will change every 1000ms 
    useEffect(() => {
        const intervalId = setInterval(() => tick(), 1000);
        return function cleanup() {
            clearInterval(intervalId);
        };;
    });

    //function tick is to get where to set the minute hand and the hour hand on the clock face
    function tick() {
        setTime(new Date());
        min = time.getMinutes();
        hour = (time.getHours() % 12) + min / 60;
        minangle = min * 6;
        hourangle = hour * 30;
        setminhand("rotate(" + minangle + ",50,50)");
        sethourhand("rotate(" + hourangle + ",50,50)");

    }

    // function amORpm is to get the prefix after time if its pm or am 
    function amORpm() {
        let x = '';
        if (time.getHours() < 12)
            x = 'ص';
        else x = 'م';
        return x;
    }


    return (
        <div className="container">
            <h6 className="time_text">الساعة الآن</h6>
            <div className='row'>
                {/* these col will represent the hour and minute at theses moment on the screen */}
                <div className="col-6 p-0 ">
                    <h5 id="time"> {time.getMinutes().toLocaleString('ar-EG')} : {time.getHours() > 12 ? (time.getHours() - 12).toLocaleString('ar-EG') : time.getHours().toLocaleString('ar-EG')} {amORpm()}</h5>
                </div>
                <div className='col-6 p-0'>
                    {/* these col will represent the clock face with the minute hand and hour hand moving place depending on time now */}
                    <svg viewBox='0 0 100 100' stroke="white" strokeWidth="3" strokeLinecap='round'>
                        <circle cx="50" cy="50" r="30" fillOpacity='0' />
                        <line x1='50.00' y1='25.00' x2='50.00' y2='30.00' />
                        <line x1='62.50' y1='29.0' x2='62.00' y2='30.00' />
                        <line x1='70.75' y1='37.50' x2='70.00' y2='38.00' />
                        <line x1='75.00' y1='50.00' x2='70.00' y2='50.00' />
                        <line x1='70.75' y1='62.50' x2='70.00' y2='62.00' />
                        <line x1='62.50' y1='70.75' x2='62.00' y2='70.00' />
                        <line x1='50.00' y1='75.00' x2='50.00' y2='70.00' />
                        <line x1='37.50' y1='70.75' x2='38.00' y2='70.00' />
                        <line x1='29.0' y1='62.50' x2='30.00' y2='62.00' />
                        <line x1='25.000' y1='50.00' x2='30.00' y2='50.00' />
                        <line x1='29.0' y1='37.50' x2='30.00' y2='38.00' />
                        <line x1='37.50' y1='29.0' x2='38.00' y2='30.00' />
                        <line id='min_hand' x1='50' y1='50' x2='50.00' y2='35.00' transform={minhand} />
                        <line id='hour_hand' x1='50' y1='50' x2='50.00' y2='40.00' transform={hourhand} />
                        <circle cx="50" cy="50" r="0.6" stroke='red' fill='red' />
                    </svg>
                </div>
            </div>
            {/* these the today date (as presented on options)  on the screen */}
            <h6 className="time_text"> {time.toLocaleString('ar-EG', options)} (غرينتش)</h6>
        </div>
    );


}

export default Clock;