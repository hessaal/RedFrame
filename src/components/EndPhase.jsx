import React, { Component } from 'react';
import Button from './common/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileBeam } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export class EndPhase extends Component {


    handleClick() {
        window.open('https://web.whatsapp.com/');
    }

    render() {
        return (

            <div className="container text-center">
                <div className='row justify-content-center'>
                    <FontAwesomeIcon icon={faSmileBeam} className='icon_end' />
                </div>
                <p id="order_scusses">تم إرسال طلبك بنجاح</p>
                <Button classname='whatsup_btn whiteColor'
                    label={<><p>لمزيد من الاستفسارات <br />تفضل بمحادثتنا على<br /> تطبيق الواتساب </p>
                        <FontAwesomeIcon icon={faWhatsapp} className='icon_whatsup whiteColor' /></>}
                    handleClick={this.handleClick} />
            </div>

        )
    }
}

export default EndPhase;

