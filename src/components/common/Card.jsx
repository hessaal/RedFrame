import React from 'react';
import Button from './Button'
import doubleArrow from './../../Assets/doubleArrow_r.png'

/* 
this component will return card 
which is div contians alot of element and represent 
service that you can choose 

while :

backgroundImg: is the service background image 
icon: is the service icon
name_ar : is the service name in arabic 
name_en : is the service name in english 
lableFb: is the lable for select button
handleClickFb :  is what happen if you clicked on select button (whole div not only the select button)
lableFb: is the lable for show service info button
handleClickFb :  is what happen if you clicked on show service info button
classname: is button class name (empty by default)
id: is button id (empty by default)
select: is boolen varible to indicte if the div is selected to change the select button className

*/

const Card = ({ index, backgroundImg, icon, name_ar, name_en, lableFb, handleClickFb, lableSb, handleClickSb, select }) => {

  const background_image = require('./../../Assets/' + backgroundImg + '.png').default;
  const icon_image = require('./../../Assets/' + icon + '.png').default;

  return (

    <div onClick={handleClickFb}
      className="service_card fade"
      style={{
        backgroundImage: `url(${background_image})`,
        backgroundSize: '100% 100%',
        animationDelay: `${index * .5}s`
      }}>

      <Button classname={select ? "selected whiteColor float-right whiteColor" : "select whiteColor whiteColor float-right"} label={lableFb} handleClick={handleClickFb} />

      <div className="titles">
        <img src={icon_image} className="service_icon" alt="service icon" />
        <h3 className="service_name whiteColor">{name_ar}</h3>
        <h3 className="service_name whiteColor">{name_en}</h3>
      </div>

      <Button classname="service_BTNS " label={lableSb} handleClick={handleClickSb} /> <img src={doubleArrow} className="doublearrow" alt="double Arrow" />

    </div>
  );
};

export default Card;