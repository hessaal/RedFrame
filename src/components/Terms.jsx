import React, { Component } from 'react';
import Button from './common/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { cleanSelected, getSelectedServices } from '../Services';
import ServiceSample from './common/ServiceSample';
import { withRouter } from 'react-router-dom';

// this component will apper in second phase of order page
export class Terms extends Component {
    state = {
        // get user selected services from services file
        services: getSelectedServices()
    }

    // go back to the order page when user clicked on agree button 
    handleClickAgree = () => {
        this.props.callbackParent();
    }

    // go back to home page when user clicked on decline button 
    handleClickNo = () => {
        cleanSelected();
        this.props.history.push("/");

    }

    render() {
        const { services } = this.state;
        return (
            <div className="container">
                <div className='row mt-1'>

                    {/* terms */}
                    <div className='col-8' id='terms'>
                        <ul>
                            <strong>الشروط والاحكام:</strong>
                            <li style={{ animationDelay: '150ms' }}>ﺗﻠﺘﺰم اﻟﻤﺆﺳﺴﺔ ﺑﻤﺒﺎﺷﺮة اﻟﺒﺪء ﺑﺘﻨﻔﻴﺬ اﻟﻤﺸﺮوع ﻓﻮر ﺗﻮﻗﻴﻊ اﻟﻌﻘﺪ اﻟﻤﺘﻔﻖ ﻋﻠﻴﻪ</li>
                            <li style={{ animationDelay: '250ms' }}>ﺗﻠﺘﺰم اﻟﻤﺆﺳﺴﺔ ﺑﺎﻹﺟﺎﺑﺔ ﻋﻦ أﻳﻪ اﺳﺘﻔﺴﺎرات ﺗﻮﺟﻪ إﻟﻴﻬﺎ ﻣﻦ ﻗﺒﻞ اﻟﺸﺮﻛﺔ</li>
                            <li style={{ animationDelay: '350ms' }}>ﺗﻠﺘﺰم اﻟﻤﺆﺳﺴﺔ ﺑﺎﻟﺨﻄﻂ اﻟﺰﻣﻨﻴﺔ ﻟﻠﻤﺸﺮوع اﻟﻤﺘﻔﻖ ﻋﻠﻴﻬﺎ</li>
                            <li style={{ animationDelay: '450ms' }}>ﺗﻠﺘﺰم اﻟﻤﺆﺳﺴﺔ ﺑﻌﻤﻞ ﺧﻤﺲ ﺗﻌﺪﻳﻼت ﻓﻘﻂ ﻟﻜﻞ ﻣﻨﺘﺞ</li>
                            <li style={{ animationDelay: '550ms' }}>ﺗﻠﺘﺰم اﻟﻤﺆﺳﺴﺔ ﺑﻌﺪم ﻧﺸﺮ أي ﻣﻨﺘﺞ إﻻ ﺑﻌﺪ اﻋﺘﻤﺎد اﻟﺠﻬﺔ</li>
                            <li style={{ animationDelay: '650ms' }}>ﻋﺪم اﻟﺴﻤﺎح ﺑﺘﺪاول اﻟﻤﻨﺘﺠﺎت اﻹﻋﻼﻣﻴﺔ واﻻﻋﻼﻧﻴﺔ ﺧﺎرج ﺣﺪود اﻟﻤﺸﺮوع</li>
                            <li style={{ animationDelay: '750ms' }}>اﻟﻤﻮاد واﻟﺘﺼﺎﻣﻴﻢ واﻷﻓﻜﺎر اﻟﻤﻨﺘﺠﺔ ﻓﻲ ﻫﺬا اﻟﻤﺸﺮوع ﻣﻠﻜﺎ ﻛﺎﻣﻼ ﻟﻠﺸﺮﻛﺔ</li>
                            <li style={{ animationDelay: '850ms' }}>ﺗﻠﺘﺰم اﻟﻤﺆﺳﺴﺔ ﺑـﻜﺎﻓﺔ ﺑﻨﻮد ﺟﺪاول اﻟﻜﻤﻴﺎت اﻟﻤﻄﻠﻮﺑﺔ ﻛﻤﺎ ﻫﻲ</li>
                            <li style={{ animationDelay: '950ms' }}>ﻳﻠﺘﺰم اﻟﻌﺎﻣﻠﻮن ﻓﻲ اﻟﻤﺆﺳﺴﺔ ﺑﺎﻟﺘﻮﻗﻴﻊ ﻋﻠﻰ وﺛﻴﻘﺔ ﻋﺪم إﻓﺸﺎء اﻟﻤﻌﻠﻮﻣﺎت</li>
                        </ul>
                    </div>
                    {/* selected services  */}
                    <div className='col-4'>
                        <div className="row" id='terms'>
                            <strong >الخدمات المختارة:</strong>
                        </div>

                        {services.map((service, index) => (
                            <div className="row" key={service + index} >
                                <ServiceSample
                                    index={index}
                                    name_ar={service.name_ar}
                                    name_en={service.name_en}
                                    icon={service.icon}
                                    backgroundImg={service.backgroundImg}
                                    classname='sample slide_up'
                                />
                            </div>))} </div>
                </div>

                {/* agree / decline buttons */}
                <div className="terms_controls">
                    <Button classname="terms_agreement" label={<FontAwesomeIcon className="icon_terms" icon={faCheck} />} handleClick={this.handleClickAgree} />
                    <span>موافق</span>
                    <Button classname="terms_agreement" label={<FontAwesomeIcon className="icon_terms" icon={faCheck} />} handleClick={this.handleClickNo} />
                    <span> غير موافق</span>
                </div>


            </div>
        );
    }
}
export default withRouter(Terms);