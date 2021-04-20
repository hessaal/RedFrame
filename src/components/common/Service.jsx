import React from 'react';
import Button from './Button'
import doubleArrow from './../../Assets/doubleArrow_r.png'


/* 
this component will return service 
which is div contians alot of element and represent 
service simple information 

while :
backgroundImg: is the service background image 
icon: is the service icon
name_ar : is the service name in arabic 
name_en : is the service name in english 
lable: is the lable for show service info button
handleClick :  is what happen if you clicked on show service info button
classname: is button class name (empty by default)

*/


const Service = ({ backgroundImg, icon, name_ar, name_en, lable, handleClick, classname = '' }) => {

    const background_image = require('./../../Assets/' + backgroundImg + '.png').default;
    const icon_image = require('./../../Assets/' + icon + '.png').default;

    return (
        <div style={{
            backgroundImage: `url(${background_image})`,
            backgroundSize: '100% 100%'
        }}
            className={classname !== '' ? classname : "service"}>

            <div className="titles">
                <img src={icon_image} className="service_icon" alt="service icon" />
                <h3 className="service_name whiteColor">{name_ar}</h3>
                <h3 className="service_name whiteColor">{name_en}</h3>
            </div>

            <Button classname="service_BTNS float-left"
                label={lable} handleClick={handleClick} />
            <img src={doubleArrow} className="doublearrow" alt="double Arrow" />
        </div>
    );
};

export default Service;