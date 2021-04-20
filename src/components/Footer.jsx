import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTwitterSquare,
    faSnapchatSquare,
    faWhatsappSquare,
    faInstagramSquare,
    faFacebookSquare
}
    from '@fortawesome/free-brands-svg-icons'





// footer container 
export function Footer() {

    return (
        <div id='footer' >
            <div className="container" >
                <div className="row text-center">
                    <h3 className="col-md-8 text-md-left" id="copywrite">جميع الحقوق محفوظة ، مؤسسة ريد فريم &copy; 2021 </h3>
                    <div className="col-md-4 text-md-right" >
                        {
                            // share buttons 
                        }
                        <FontAwesomeIcon className="icon" icon={faTwitterSquare} />
                        <FontAwesomeIcon className="icon" icon={faSnapchatSquare} />
                        <FontAwesomeIcon className="icon" icon={faWhatsappSquare} />
                        <FontAwesomeIcon className="icon" icon={faInstagramSquare} />
                        <FontAwesomeIcon className="icon" icon={faFacebookSquare} />
                    </div>
                </div>
            </div></div >

    );


}

export default Footer;