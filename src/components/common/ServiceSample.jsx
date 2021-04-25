import React from 'react';

/* 
this component will return service sample  
which is div contians alot of element and represent 
service image , icon , names

while :
backgroundImg: is the service background image 
icon: is the service icon
name_ar : is the service name in arabic 
name_en : is the service name in english 

*/

const ServiceSample = ({ backgroundImg, name_ar, name_en, icon, index, classname = '' }) => {

    const background_image = require('./../../Assets/' + backgroundImg + '.png').default;
    const icon_image = require('./../../Assets/' + icon + '.png').default;

    return (
        <div style={{
            backgroundImage: `url(${background_image})`,
            backgroundSize: '100% 100%',
            animationDelay: `${index * .5}s`
        }} className={classname !== '' ? classname : 'sample'}>

            <div className="titles">
                <img src={icon_image} className="service_icon" alt="service icon" />
                <h3 className="sample_name whiteColor">{name_ar}</h3>
                <h3 className="sample_name whiteColor">{name_en}</h3>
            </div>

        </div>
    );
};

export default ServiceSample;